import { useState } from "react";

export const useKeyErrors = () => {
    const [keyErrors, setKeyErrors] = useState({}); 

    const recordError = (char) => {
        setKeyErrors(prev => ({
            ...prev,
            [char]: prev[char] ? prev[char] + 1 : 1
        }));
    };

    const resetErrors = () => setKeyErrors({});

    return { keyErrors, recordError, resetErrors };
};
