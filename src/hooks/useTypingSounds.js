import { useEffect } from "react";
import useSound from "use-sound";

import typingMp3 from "/sounds/typing.wav";
import errorMp3 from "/sounds/error.mp3";
import countdownMp3 from "/sounds/countdown.mp3";
import finishMp3 from "/sounds/finish.wav";
import highscoreMp3 from "/sounds/highscore.wav";

export const useTypingSounds = ({
    input,
    passage,
    timeLeft,
    started,
    finished,
    isHighScore,
    soundOn,
}) => {
    // ALWAYS load hooks
    const [playTyping] = useSound(typingMp3, { volume: 0.15 });
    const [playError] = useSound(errorMp3, { volume: 0.5 });
    const [playCountdown] = useSound(countdownMp3, { volume: 0.5 });
    const [playFinish] = useSound(finishMp3, { volume: 0.5 });
    const [playHighscore] = useSound(highscoreMp3, { volume: 0.7 });

    // Typing sound
    useEffect(() => {
        if (!soundOn || !started || finished) return;
        if (!input || !passage) return;

        const i = input.length - 1;
        if (i < 0) return;

        input[i] === passage[i] ? playTyping() : playError();
    }, [input, soundOn]);

    // Countdown sound
    useEffect(() => {
        if (!soundOn || !started || finished) return;

        if (timeLeft <= 10 && timeLeft > 0) {
            playCountdown();
        }
    }, [timeLeft, soundOn]);

    // Finish / high score
    useEffect(() => {
        if (!soundOn || !finished) return;

        playFinish();
        if (isHighScore) playHighscore();
    }, [finished, isHighScore, soundOn]);
};
