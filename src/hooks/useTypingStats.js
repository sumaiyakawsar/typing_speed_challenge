import { useMemo } from "react";

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

    /* ELAPSED TIME */
    const elapsed =
        started && startTime
            ? Math.max(finished ? elapsedSeconds : (Date.now() - startTime) / 1000, 1)
            : 1;

    /* WPM (LIVE + FINAL) - Based on correct characters only */
    const wpm = started && input.length > 0
        ? Math.round((correctChars / 5) / (elapsed / 60))
        : 0;

    // Combine current errors with previously backspaced errors
    const totalTypedWithErrors = totalTypedCharacters > 0 ? totalTypedCharacters : input.length;
    const allErrors = totalErrors + currentErrors;

    const accuracy = totalTypedWithErrors > 0
        ? Math.round(((totalTypedWithErrors - allErrors) / totalTypedWithErrors) * 100)
        : 100;

    /* NET WPM */

    const netWPM = started && input.length > 0
        ? Math.max(wpm - allErrors / (elapsed / 60), 0)
        : 0;

    return { correctChars, currentErrors, elapsed, wpm, accuracy, netWPM };
};
