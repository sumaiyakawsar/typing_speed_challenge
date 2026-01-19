import { useState } from "react";

export const useTypingTracker = (passage, started, finished, recordError) => {
    const [input, setInput] = useState("");
    const [lastKey, setLastKey] = useState(null);

    // Track all keystrokes (including backspaced errors)
    const [totalTypedCharacters, setTotalTypedCharacters] = useState(0);
    const [totalErrors, setTotalErrors] = useState(0);

    const handleInputChange = (e) => {
        if (!started || finished) return;

        const newValue = e.target.value;
        const oldValue = input;

        if (newValue.length > oldValue.length) {
            // User typed a character
            const typedChar = newValue[newValue.length - 1];
            const expectedChar = passage[newValue.length - 1];

            setLastKey(typedChar);   
            setTotalTypedCharacters((prev) => prev + 1);

            // If character is wrong, count it as an error
            // if (typedChar !== expectedChar) setTotalErrors((prev) => prev + 1);
            if (typedChar !== expectedChar) {
                setTotalErrors((prev) => prev + 1);
                recordError && recordError(typedChar.toLowerCase()); // Record which key was wrong
            }
        } else {
            // Backspace or programmatic change
            setLastKey(null);
        }

        setInput(newValue);
    };

    const resetTracker = () => {
        setInput(""); 
        setLastKey(null);
        setTotalTypedCharacters(0);
        setTotalErrors(0);
    };

    return { input, setInput, lastKey, totalTypedCharacters, totalErrors, handleInputChange, resetTracker };
};
