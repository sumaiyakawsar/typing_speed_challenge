import { useState } from "react";

export const useKeyErrors = () => {
    const [keyErrors, setKeyErrors] = useState({}); 

    const normalizeKey = (key) => {
        if (key === " ") return "space";
        if (key === "Enter") return "enter";
        if (key === "Tab") return "tab";
        return key.toLowerCase();
    };

    const recordError = (char) => {
        const key = normalizeKey(char); // normalize here
        setKeyErrors(prev => ({
            ...prev,
            [key]: prev[key] ? prev[key] + 1 : 1
        }));
    };


    const resetErrors = () => setKeyErrors({});

    return { keyErrors, recordError, resetErrors };
};
