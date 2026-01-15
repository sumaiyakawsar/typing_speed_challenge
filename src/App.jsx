import { useState, useEffect, useRef } from "react";
import data from "./data/data.json";
import Header from "./components/Header";
import Stats from "./components/Stats";
import ResultModal from "./components/ResultModal";
import Passage from "./components/Passage";
import StartButton from "./components/StartButton";

import { useTypingTimer } from "./hooks/useTypingTimer";
import { useTypingStats } from "./hooks/useTypingStats";
import { useTypingTracker } from "./hooks/useTypingTracker";

import { getRandomIndex } from "./utils/helpers";
import { getBestNetWPM, setBestNetWPM } from "./utils/storage";

export default function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [mode, setMode] = useState("timed");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [passageIndex, setPassageIndex] = useState(0);

  const passage = data[difficulty][passageIndex].text;
  const inputRef = useRef(null);

  // Start the test
  const startTest = () => {
    if (started) return;
    setStartTime(Date.now());
    setStarted(true);
    inputRef.current?.focus();
  };
// Typing state
  const { input, totalTypedCharacters, totalErrors, handleInputChange, resetTracker } =
    useTypingTracker(passage, started, finished);

  const { correctChars, currentErrors, elapsed, wpm, accuracy, netWPM } =
    useTypingStats(input, passage, totalTypedCharacters, totalErrors, started, startTime, finished, elapsedSeconds);

  const [timeLeft, setTimeLeft] = useTypingTimer(started, finished, mode, startTime, setFinished);

  // End test if passage is completed
  useEffect(() => {
    if (!started || finished) return;
    if (input.length === passage.length) {
      setElapsedSeconds(Math.max((Date.now() - startTime) / 1000, 1));
      setFinished(true);
      setTimeLeft(0);
    }
  }, [input, passage, started, finished, startTime]);

  // Best Net WPM
  const bestNetWPM = getBestNetWPM(difficulty);
  const MIN_ACCURACY = 95;
  const isEligibleForHighScore = accuracy >= MIN_ACCURACY;
  const isHighScore =
    finished &&
    isEligibleForHighScore &&
    netWPM > bestNetWPM;
  useEffect(() => {
    if (isHighScore) setBestNetWPM(difficulty, netWPM);
  }, [isHighScore]);

  const restartTest = () => {
    setStarted(false);
    setFinished(false);

    setStartTime(null);
    setElapsedSeconds(0);
    // Reset timer depending on mode
    setTimeLeft(mode === "timed" ? 60 : 0);
    // Pick a NEW random passage
    setPassageIndex(getRandomIndex(data, difficulty));

    resetTracker();

    // Focus input after restart
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  useEffect(() => {
    setPassageIndex(getRandomIndex(data, difficulty));
    restartTest();
  }, [difficulty]);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0b0b0c] to-[#111] text-white px-8">
      <Header best={bestNetWPM} wpm={wpm} />
      <Stats
        wpm={wpm}
        accuracy={accuracy}
        timeLeft={timeLeft}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        mode={mode}
        setMode={setMode}
        restartTest={restartTest}
      />

      {/* PASSAGE WRAPPER */}
      <div className="relative mt-12 max-w-5xl mx-auto" onClick={() => {
        startTest();
        inputRef.current.focus();
      }}>

        {/* Passage */}
        <Passage
          passage={passage}
          input={input}
          started={started}
          finished={finished} />

        {/* Start Button */}
        {!started && (
          <StartButton startTest={startTest} />
        )}

        {/* Hidden input */}
        <input
          ref={inputRef}
          autoFocus
          value={input}
          disabled={finished}
          onChange={handleInputChange}
          className="absolute opacity-0"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Typing input"
        />
      </div>

      {finished && (
        <ResultModal
          wpm={wpm}
          accuracy={accuracy}
          correctChars={correctChars}
          errorChars={input.length - correctChars}
          restartTest={restartTest}
          isFirstTest={finished && bestNetWPM === 0}
          isHighScore={isHighScore}
        />
      )}
    </div>
  );
}
