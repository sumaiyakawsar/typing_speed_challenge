import { useEffect } from "react";
import useSound from "use-sound";

import typingMp3 from "../assets/sounds/typing.wav";
import errorMp3 from "../assets/sounds/error.mp3";
import countdownMp3 from "../assets/sounds/countdown.mp3";
import finishMp3 from "../assets/sounds/finish.wav";
import highscoreMp3 from "../assets/sounds/highscore.wav";
import { useSoundSettings } from "./useSoundSettings";

export const useTypingSounds = ({
    input,
    passage,
    timeLeft,
    started,
    finished,
    isHighScore,
    mode
}) => {
    // ALWAYS load hooks
    const [playTyping] = useSound(typingMp3, { volume: 0.15 });
    const [playError] = useSound(errorMp3, { volume: 0.5 });
    const [playCountdown] = useSound(countdownMp3, { volume: 0.5 });
    const [playFinish] = useSound(finishMp3, { volume: 0.5 });
    const [playHighscore] = useSound(highscoreMp3, { volume: 0.7 });
    const { soundOn } = useSoundSettings();

    // Typing sound
    useEffect(() => {
        if (!soundOn || !started || finished) return;
        if (!input || !passage) return;

        const i = input.length - 1;
        if (i < 0) return;

        input[i] === passage[i] ? playTyping() : playError();
    }, [finished, input, passage, playError, playTyping, soundOn, started]);

    // Countdown sound
    useEffect(() => {
        if (!soundOn) return;
        if (mode !== "timed") return; // 🚫 no sound in passage mode
        if (!started || finished) return;

        if (timeLeft <= 10 && timeLeft > 0) {
            playCountdown();
        }
    }, [timeLeft, soundOn, mode, started, finished, playCountdown]);

    // Finish / high score
    useEffect(() => {
        if (!soundOn || !finished) return;

        playFinish();
        if (isHighScore) playHighscore();
    }, [finished, isHighScore, playFinish, playHighscore, soundOn]);
};
