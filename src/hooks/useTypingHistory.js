import { useState } from "react";
import { getTypingHistory, saveTypingResult } from "../utils/history";

export const useTypingHistory = () => {
    const [history, setHistory] = useState(getTypingHistory());

    const addEntry = (entry) => {
        saveTypingResult(entry);
        setHistory(prev => [...prev, entry]);
    };

    return {
        history,
        addEntry
    };
};
