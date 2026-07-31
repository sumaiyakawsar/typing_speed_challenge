import { useMemo, useState } from "react";
import { getTypingHistory, clearTypingHistory } from "../utils/historyStorage";
import { IoClose } from "react-icons/io5";
import { notifications } from "../../notification/notifications";

import HistoryChart from "./HistoryChart";
import HistoryStats from "./HistoryStats";
import HistoryList from "./HistoryList";
import ExportCSV from "./ExportCSV";

import { useTheme } from "../../theme/hooks/useTheme";


const HistorySidebar = ({ onClose }) => {

    const { theme } = useTheme();


    const [difficulty, setDifficulty] = useState("all");
    const [mode, setMode] = useState("all");
    const [history, setHistory] = useState(getTypingHistory());


    const filtered = useMemo(() => {
        return history.filter(
            (h) =>
                (difficulty === "all" || h.difficulty === difficulty) &&
                (mode === "all" || h.mode === mode)
        );
    }, [history, difficulty, mode]);



    const handleClearHistory = () => {
        notifications.historyCleared();
        clearTypingHistory();
        setHistory([]);
    };

    return (
        <>

            {/* Overlay */}
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/40 z-40"
            />


            {/* Sidebar */}
            <aside
                className={`
                    fixed right-0 top-0 h-full w-full md:w-105
                    z-99
                    flex flex-col
                    ${theme.panel}
                    border-l
                    ${theme.border}
                `}
            >


                {/* Header */}
                <div
                    className={`
                        flex items-center justify-between
                        p-4
                        border-b
                        ${theme.border}
                    `}
                >

                    <h2
                        className={`
                            font-semibold text-lg
                            ${theme.text}
                        `}
                    >
                        Typing History
                    </h2>



                    <div className="flex items-center gap-2">

                        <ExportCSV data={filtered} theme={theme} />


                        <button
                            onClick={handleClearHistory}
                            className={`
                                text-sm
                                px-3 py-2
                                rounded
                                bg-red-500/10
                                text-red-400
                                hover:bg-red-500/20
                                transition
                                ${theme.focus}
                            `}
                        >
                            Clear
                        </button>



                        <button
                            onClick={onClose}
                            className={`
                                transition
                                ${theme.accent}
                                hover:${theme.text}
                                ${theme.focus}
                            `}
                        >
                            <IoClose size={20} />
                        </button>
                    </div>
                </div>



                {/* Filters */}
                <div className="p-4 flex gap-3">


                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className={`
                            bg-black/30
                            border
                            ${theme.border}
                            rounded
                            px-2 py-1
                            text-sm
                            ${theme.text}
                            ${theme.focus}
                        `}
                    >

                        <option value="all">
                            All
                        </option>

                        <option value="easy">  Easy  </option>

                        <option value="medium"> Medium </option>

                        <option value="hard"> Hard </option>

                    </select>



                    <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                        className={`
                            bg-black/30
                            border
                            ${theme.border}
                            rounded
                            px-2 py-1
                            text-sm
                            ${theme.text}
                            ${theme.focus}
                        `}
                    >

                        <option value="all">
                            All
                        </option>

                        <option value="timed">
                            Timed
                        </option>

                        <option value="passage">
                            Passage
                        </option>
                    </select>
                </div>

                {/* Scrollable Content */}
                <div
                    className="
                        flex-1 overflow-y-auto
                        px-4 pb-6 space-y-6
                        custom-scrollbar
                    "
                >

                    <HistoryStats data={filtered} />

                    <HistoryChart data={filtered} />

                    <HistoryList data={filtered} />

                </div>


            </aside>

        </>
    );
};


export default HistorySidebar;