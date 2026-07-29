const HistoryList = ({ data }) => {
    if (!data.length) {
        return <p className="text-gray-400 text-sm">No history yet</p>;
    }

    return (
        <div>
            <h3 className="text-sm text-gray-400 mb-2">All Tests</h3>

            <ul className="space-y-2">
                {[...data].reverse().map(h => (
                    <li
                        key={h.id}
                        className="bg-white/5 p-3 rounded-lg flex justify-between text-sm"
                    >
                        <div>
                            <p className="text-white font-medium">
                                {h.wpm} WPM · {h.accuracy}%
                            </p>
                            <p className="text-gray-400">
                                {h.difficulty} · {h.mode}
                            </p>
                        </div>

                        <div className="text-right text-gray-400">
                            <p>{new Date(h.date).toLocaleDateString()}</p>
                            <p>{h.duration}s</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HistoryList;
