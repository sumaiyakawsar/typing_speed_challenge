const getBestNetWPMs = () =>
    JSON.parse(localStorage.getItem("bestNetWPMs") || "{}");

/* BEST WPM PER DIFFICULTY */
export const getBestNetWPM = (diff) => {
    const bests = getBestNetWPMs();
    return bests[diff] || 0;
};

export const setBestNetWPM = (diff, value) => {
    const bests = getBestNetWPMs();
    bests[diff] = value;
    localStorage.setItem("bestNetWPMs", JSON.stringify(bests));
};
 