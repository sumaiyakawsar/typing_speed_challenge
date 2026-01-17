import { useMemo, useState } from "react";
import { getTypingHistory } from "../../utils/history";
import HistoryChart from "./HistoryChart";
import HistoryStats from "./HistoryStats";
import HistoryList from "./HistoryList";
import ExportCSV from "./ExportCSV";

const HistorySidebar = ({ onClose }) => {
    const [difficulty, setDifficulty] = useState("all");
    const [mode, setMode] = useState("all");

    const history = getTypingHistory();

    const filtered = useMemo(() => {
        return history.filter(h =>
            (difficulty === "all" || h.difficulty === difficulty) &&
            (mode === "all" || h.mode === mode)
        );
    }, [history, difficulty, mode]);

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/40 z-40"
            />

            {/* Sidebar */}
            <aside className="
        fixed right-0 top-0 h-full w-full md:w-105
        bg-[#0f0f10] z-50 border-l border-white/10
        flex flex-col
      ">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <h2 className="font-semibold text-lg">Typing History</h2>
                    <div className="flex gap-2">
                        <ExportCSV data={filtered} />
                        <button onClick={onClose}>✕</button>
                    </div>
                </div>

                {/* Filters */}
                <div className="p-4 flex gap-3">
                    <select
                        value={difficulty}
                        onChange={e => setDifficulty(e.target.value)}
                        className="bg-black/30 border border-white/10 rounded px-2 py-1"
                    >
                        <option value="all">All</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>

                    <select
                        value={mode}
                        onChange={e => setMode(e.target.value)}
                        className="bg-black/30 border border-white/10 rounded px-2 py-1"
                    >
                        <option value="all">All</option>
                        <option value="timed">Timed</option>
                        <option value="passage">Passage</option>
                    </select>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-6">
                    <HistoryStats data={filtered} />
                    <HistoryChart data={filtered} />
                    <HistoryList data={filtered} />
                </div>
            </aside>
        </>
    );
};

export default HistorySidebar;
