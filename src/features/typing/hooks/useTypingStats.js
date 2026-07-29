import { useMemo, useEffect, useState } from "react";

export const useTypingStats = (
    input,
    passage,
    totalTypedCharacters,
    totalErrors,
    started,
    startTime,
    finished,
    elapsedSeconds
) => { 
    
    // Track WPM & Accuracy over time
    const [history, setHistory] = useState([]);

    /* CORRECT CHAR COUNT - Current state only */
    const correctChars = useMemo(
        () => input.split("").filter((c, i) => c === passage[i]).length,
        [input, passage]
    );
    // Calculate errors in current input
    const currentErrors = useMemo(
        () => input.split("").filter((c, i) => c !== passage[i]).length,
        [input, passage]
    );

    const MIN_TIME_FOR_WPM = 5;

    const elapsed =
        started && startTime
            ? finished
                ? elapsedSeconds
                : (Date.now() - startTime) / 1000
            : 0;


    const wpm =
        started && elapsed >= MIN_TIME_FOR_WPM
            ? Math.round((correctChars / 5) / (elapsed / 60))
            : 0;

    // Combine current errors with previously backspaced errors
    const totalTypedWithErrors = totalTypedCharacters > 0 ? totalTypedCharacters : input.length;
    const allErrors = totalErrors + currentErrors;

    const rawAccuracy =
        totalTypedWithErrors > 0
            ? ((totalTypedWithErrors - allErrors) / totalTypedWithErrors) * 100
            : 100;

    const accuracy = Math.max(0, Math.min(100, Math.round(rawAccuracy)));

    /* NET WPM */
    const netWPM =
        started && elapsed >= MIN_TIME_FOR_WPM
            ? Math.max(wpm - allErrors / (elapsed / 60), 0)
            : 0;

    // 🔹 Record history every second while test is running
    useEffect(() => {
        if (!started || finished) return;

        const interval = setInterval(() => {
            setHistory(prev => [
                ...prev,
                { time: Math.round((Date.now() - startTime) / 1000), wpm, accuracy }
            ]);
        }, 1000);

        return () => clearInterval(interval);
    }, [started, finished, startTime, wpm, accuracy]);

    return { correctChars, currentErrors, elapsed, wpm, accuracy, netWPM, history };
};
