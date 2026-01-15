import { useState } from "react";

export const useTypingTracker = (passage, started, finished) => {
    const [input, setInput] = useState("");

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

            // Track all typed characters
            setTotalTypedCharacters((prev) => prev + 1);
            // If character is wrong, count it as an error
            if (typedChar !== expectedChar) setTotalErrors((prev) => prev + 1);
        }

        setInput(newValue);
    };

    const resetTracker = () => {
        setInput("");
        setTotalTypedCharacters(0);
        setTotalErrors(0);
    };

    return { input, setInput, totalTypedCharacters, totalErrors, handleInputChange, resetTracker };
};
