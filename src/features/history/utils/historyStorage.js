const HISTORY_KEY = "typing_history";

export const getTypingHistory = () => {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
};

export const saveTypingResult = (entry) => {
    const history = getTypingHistory();
    history.push(entry);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

export const clearTypingHistory = () => {
    localStorage.removeItem(HISTORY_KEY);
};
