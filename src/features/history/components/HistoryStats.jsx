const HistoryStats = ({ data }) => {
    if (!data.length) return null;

    const avgWPM =
        data.reduce((a, b) => a + b.wpm, 0) / data.length;

    const avgAccuracy =
        data.reduce((a, b) => a + b.accuracy, 0) / data.length;

    const streak = (() => {
        let count = 0;
        for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].accuracy >= 95) count++;
            else break;
        }
        return count;
    })();

    const consistency =
        Math.round(
            (data.filter(d => d.accuracy >= 95).length / data.length) * 100
        );

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Stat label="Avg WPM" value={avgWPM.toFixed(1)} />
            <Stat label="Avg Accuracy" value={`${avgAccuracy.toFixed(1)}%`} />
            <Stat label="Current Streak" value={`${streak} tests`} />
            <Stat label="Consistency" value={`${consistency}%`} />
        </div>
    );
};

const Stat = ({ label, value }) => (
    <div className="bg-white/5 p-3 rounded-lg">
        <p className="text-gray-400">{label}</p>
        <p className="text-lg font-semibold text-white">{value}</p>
    </div>
);

export default HistoryStats;
