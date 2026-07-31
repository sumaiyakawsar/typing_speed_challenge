import { useState, useEffect, useRef, useCallback } from "react";
import data from "./data/data.json";

import Header from "./shared/components/Header/Header";
import Passage from "./features/typing/components/Passage";
import ResultModal from "./features/results/components/ResultModal";
import HistorySidebar from "./features/history/components/HistorySideBar";
import StartButton from "./features/typing/components/StartButton";
import Footer from "./shared/components/Footer";

import { useTypingTimer } from "./features/typing/hooks/useTypingTimer";
import { useTypingStats } from "./features/typing/hooks/useTypingStats";
import { useTypingTracker } from "./features/typing/hooks/useTypingTracker";
import { useTypingHistory } from "./hooks/useTypingHistory";
import { useTypingSounds } from "./features/sound/hooks/useTypingSounds";
import { useKeyErrors } from "./hooks/useKeyErrors";
import { useTheme } from "./features/theme/hooks/useTheme";
import { useSoundSettings } from "./features/sound/hooks/useSoundSettings";
import { notifications } from "./features/notification/notifications";

import { getRandomIndex } from "./shared/utils/helpers";
import {
  getBestNetWPM,
  setBestNetWPM
} from "./shared/utils/storage";
import Stats from "./features/stats/components/Stats";
import { useHeatmapNotification } from "./features/notification/hooks/useHeatmapNotification";



export default function App() {

  const inputRef = useRef(null);
  const startTimeRef = useRef(null); 

  /* Theme & Sound */
  const { currentTheme, colorMode } = useTheme();
  const { soundOn } = useSoundSettings();

  /* Config State */
  const [difficulty, setDifficulty] = useState("easy");
  const [mode, setMode] = useState("timed");//Times | Passage
  const [duration, setDuration] = useState(60);// default 60s
  const [category, setCategory] = useState("quotes");

  /* Test state */
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [passageIndex, setPassageIndex] = useState(0);

  /* UI Toggles */
  const [showHistory, setShowHistory] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [heatmapKey, setHeatmapKey] = useState(0);

  //  Safe passage retrieval
  const passage = data[category][difficulty][passageIndex].text;

  const { addEntry } = useTypingHistory();
  const { keyErrors, recordError, resetErrors } = useKeyErrors();


  /* Timer  */
  const [timeLeft, setTimeLeft] = useTypingTimer(started, finished, mode, startTime, setFinished, duration);

  /*  Complete test  */
  const completeTest = useCallback(() => {

    const elapsed =
      Math.max(
        (Date.now() -
          startTimeRef.current) / 1000,
        1
      );

    setElapsedSeconds(elapsed);
    setFinished(true);
    setTimeLeft(0);

  }, [setTimeLeft]);

  /* Typing Tracker & Stats */
  const { input, lastKey, totalTypedCharacters, totalErrors, handleInputChange, resetTracker } = useTypingTracker(
    passage, started, finished, recordError, completeTest);

  const { correctChars, wpm, accuracy, netWPM, history } = useTypingStats(input, passage, totalTypedCharacters, totalErrors, started, startTime, finished, elapsedSeconds);


  /* Consolidated Reset Logic */
  const resetTest = useCallback((newMode = mode, newDuration = duration) => {
    setStarted(false);
    setFinished(false);
    setStartTime(null);
    startTimeRef.current = null;
    setElapsedSeconds(0);
    setTimeLeft(newMode === "timed" ? newDuration : 0);
    resetTracker();
    resetErrors();
    setHeatmapKey(prev => prev + 1);
  }, [mode, duration, resetTracker, resetErrors, setTimeLeft]);

  /* Handlers */
  /* Start test*/
  const startTest = () => {

    if (!started) {
      const now = Date.now();
      startTimeRef.current = now;
      setStartTime(now);
      setStarted(true);

      notifications.testStarted();

    }
    inputRef.current?.focus();
  };


  /* Restart test */
  const restartTest = useCallback(() => {
    notifications.testRestarted();
    setPassageIndex(getRandomIndex(data[category], difficulty));
    resetTest();
  }, [category, difficulty, resetTest]);

  /* Change difficulty */
  const changeDifficulty = useCallback(
    (newDifficulty) => {
      setDifficulty(newDifficulty);
      notifications.difficultyChanged(newDifficulty);
      setPassageIndex(getRandomIndex(data[category], newDifficulty));
      resetTest();
    },
    [category, resetTest]
  );

  /*    Change category  */
  const changeCategory = useCallback(
    (newCategory) => {
      setCategory(newCategory);
      notifications.categoryChanged(newCategory);
      setPassageIndex(getRandomIndex(data[newCategory], difficulty));
      resetTest();
    },
    [difficulty, resetTest]
  );

  const changeMode = useCallback((newMode) => {
    setMode(newMode);
    notifications.modeChanged(newMode);
    resetTest(newMode, duration);
  }, [duration, resetTest]);

  const changeDuration = useCallback((newDuration) => {
    setDuration(newDuration);
    notifications.durationChanged(newDuration);
    resetTest(mode, newDuration);
  }, [mode, resetTest]);

  const toggleKeyboardHeatmap = useCallback(() => {
    setShowHeatmap(prev => !prev);
  }, []);

  

  /* Save History on Completion */
  useEffect(() => {

    if (!finished) return;

    addEntry({
      id: crypto.randomUUID(),
      date: Date.now(),
      wpm, accuracy, netWPM,
      difficulty, mode, duration, category,
      theme: currentTheme
    });
  }, [finished, addEntry, wpm, accuracy, netWPM, difficulty, mode, duration, category, currentTheme]);



  /* Highscore Evaluation */
  const bestNetWPM = getBestNetWPM(difficulty);
  const MIN_ACCURACY = 95;
  const isHighScore = finished &&
    accuracy >= MIN_ACCURACY &&
    netWPM > bestNetWPM;

  useEffect(() => {
    if (isHighScore) {
      setBestNetWPM(difficulty, netWPM);
    }
  }, [difficulty, isHighScore, netWPM]);



  /* Result type */

  const resultType =
    !finished
      ? null
      : bestNetWPM === 0
        ? "baseline"
        : isHighScore
          ? "highscore"
          : "normal";



  /* Audio Effects Hook */
  useTypingSounds({ input, lastKey, passage, timeLeft, started, finished, isHighScore, soundOn, mode });
  useHeatmapNotification(showHeatmap);

  return (
    <div
      className={`
      min-h-screen flex flex-col
      transition-colors duration-300
      ${colorMode === "dark"
          ? "bg-black text-white"
          : "bg-white text-black"
        }
    `}
    >

      <Header
        stats={{ best: bestNetWPM, wpm }}
        openHistory={() => setShowHistory(true)}
        showHeatmap={showHeatmap}
        toggleHeatmap={toggleKeyboardHeatmap}
      />

      {showHistory && (<HistorySidebar onClose={() => setShowHistory(false)} />)}




      <div className="flex-1 flex flex-col">
        <Stats
          wpm={wpm} accuracy={accuracy} timeLeft={timeLeft}
          difficulty={difficulty} setDifficulty={changeDifficulty}
          mode={mode} setMode={changeMode}
          duration={duration} setDuration={changeDuration}
          category={category} setCategory={changeCategory}
          restartTest={restartTest}
          input={input} passage={passage}
        />

        {/* PASSAGE WRAPPER */}
        <div className="flex-1 relative flex items-center justify-center" onClick={startTest}>

          <Passage
            passage={passage} input={input} started={started} finished={finished}
            keyErrors={keyErrors} heatmapKey={heatmapKey}
            startTest={startTest} showHeatmap={showHeatmap}
          />

          {!started && (<StartButton startTest={startTest} />)}

          <input
            ref={inputRef} value={input} disabled={finished} onChange={handleInputChange}
            className="absolute opacity-0" aria-label="Typing input"
            autoFocus autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
          />
        </div>

        {finished && (
          <ResultModal
            wpm={wpm} accuracy={accuracy}
            correctChars={correctChars} errorChars={input.length - correctChars}
            restartTest={restartTest} resultType={resultType} history={history}
          />
        )}


      </div>
      <Footer />

    </div>

  );
}