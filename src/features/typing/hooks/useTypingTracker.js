import { useState, useCallback } from "react";

export const useTypingTracker = (
    passage,
    started,
    finished,
    recordError,
    onComplete
) => {

    const [input, setInput] = useState("");
    const [lastKey, setLastKey] = useState(null);

    // Track all keystrokes (including backspaced errors)
    const [totalTypedCharacters, setTotalTypedCharacters] = useState(0);
    const [totalErrors, setTotalErrors] = useState(0);


    const handleInputChange = useCallback(
        (e) => {

            if (!started || finished) return;


            const newValue = e.target.value;
            const oldValue = input;


            if (newValue.length > oldValue.length) {

                // User typed a character
                const typedChar =
                    newValue[newValue.length - 1];

                const expectedChar =
                    passage[newValue.length - 1];


                setLastKey(typedChar);

                setTotalTypedCharacters(
                    prev => prev + 1
                );

                // If character is wrong, count it as an error 
                if (typedChar !== expectedChar) {

                    setTotalErrors(
                        prev => prev + 1
                    );

                    recordError?.(
                        typedChar.toLowerCase()
                    );
                }

            } else {

                setLastKey(null);

            }


            setInput(newValue);

            // Detect completion here
            if (newValue.length === passage.length) {
                onComplete?.();
            }


        }, [finished, input, onComplete, passage, recordError, started]);



    const resetTracker = useCallback(() => {

        setInput("");
        setLastKey(null);

        setTotalTypedCharacters(0);
        setTotalErrors(0);

    }, []);



    return {
        input,
        lastKey,
        totalTypedCharacters,
        totalErrors,
        handleInputChange,
        resetTracker
    };
};