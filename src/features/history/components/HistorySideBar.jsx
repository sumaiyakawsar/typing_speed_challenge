import { useMemo, useState } from "react";
import { useTheme } from "../../theme/hooks/useTheme";
import { getTypingHistory, clearTypingHistory } from "../utils/historyStorage";
import { notifications } from "../../notification/notifications";

import HistoryChart from "./HistoryChart";
import HistoryStats from "./HistoryStats";
import HistoryList from "./HistoryList";
import ExportCSV from "./ExportCSV";
import Button from "../../../shared/components/Button";
import SelectDropdown from "../../../shared/components/SelectDropdown";

import { LuGamepad2 } from "react-icons/lu";
import { MdFilterAltOff, MdClose, MdOutlineWorkspacePremium, MdOutlineCategory } from "react-icons/md";


const HistorySidebar = ({ onClose }) => {

    const { theme } = useTheme();

    const [openFilter, setOpenFilter] = useState(null);
    const [difficulty, setDifficulty] = useState("all");
    const [mode, setMode] = useState("all");
    const [category, setCategory] = useState("all");

    const [history, setHistory] = useState(getTypingHistory());

    const difficultyOptions = [
        {
            value: "all",
            label: "All"
        },
        {
            value: "easy",
            label: "Easy"
        },
        {
            value: "medium",
            label: "Medium"
        },
        {
            value: "hard",
            label: "Hard"
        }
    ];


    const modeOptions = [
        {
            value: "all",
            label: "All"
        },
        {
            value: "timed",
            label: "Timed"
        },
        {
            value: "passage",
            label: "Passage"
        }
    ];

    const categoryOptions = [
        {
            value: "all",
            label: "All"
        },
        {
            value: "quotes",
            label: "Quotes"
        },
        {
            value: "lyrics",
            label: "Lyrics"
        },
        {
            value: "code",
            label: "Code"
        }
    ];

    const filtered = useMemo(() => {
        return history.filter(
            (h) =>
                (difficulty === "all" || h.difficulty === difficulty) &&
                (mode === "all" || h.mode === mode) &&
                (category === "all" || h.category === category)
        );
    }, [history, difficulty, mode, category]);



    const handleClearHistory = () => {
        notifications.historyCleared();
        clearTypingHistory();
        setHistory([]);
    };

    const handleClearFilters = () => {
        setDifficulty("all");
        setMode("all");
        setCategory("all");
    };

    return (
        <>

            {/* Overlay */}
            <div onClick={onClose} className="fixed inset-0 bg-black/40 z-40" />


            {/* Sidebar */}
            <aside className={`
                    fixed right-0 top-0 h-full w-full md:w-105 z-99 flex flex-col ${theme.panel} border-l ${theme.border}
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

                        <ExportCSV
                            data={filtered}
                            difficulty={difficulty}
                            mode={mode}
                            category={category}
                        />

                        <Button
                            variant="primary"
                            onClick={handleClearHistory}
                            className=" bg-red-500/10  px-3 py-2  text-sm
                                text-red-400 font-bold 
                                hover:bg-red-500/20">
                            Clear
                        </Button>


                        <button
                            onClick={onClose}
                            className={`
                                transition
                                ${theme.accent}
                                hover:${theme.text}
                                ${theme.focus}
                            `}
                        >
                            <MdClose size={20} />
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="p-4 flex gap-3">

                    <SelectDropdown
                        icon={MdOutlineWorkspacePremium}
                        value={difficulty}
                        options={difficultyOptions}
                        theme={theme}
                        onChange={setDifficulty}
                        placeholder="Difficulty"

                        isOpen={openFilter === "difficulty"}

                        setIsOpen={() =>
                            setOpenFilter(
                                openFilter === "difficulty"
                                    ? null
                                    : "difficulty"
                            )
                        }
                    />

                    <SelectDropdown
                        icon={MdOutlineCategory}
                        value={category}
                        options={categoryOptions}
                        theme={theme}
                        onChange={setCategory}
                        placeholder="Category"
                        isOpen={openFilter === "category"}

                        setIsOpen={() =>
                            setOpenFilter(
                                openFilter === "category"
                                    ? null
                                    : "category"
                            )
                        }
                    />

                    <SelectDropdown
                        icon={LuGamepad2}
                        value={mode}
                        options={modeOptions}
                        theme={theme}
                        onChange={setMode}
                        placeholder="Mode"

                        isOpen={openFilter === "mode"}

                        setIsOpen={() =>
                            setOpenFilter(
                                openFilter === "mode"
                                    ? null
                                    : "mode"
                            )
                        }
                    />

                    {
                        (difficulty !== "all" || mode !== "all" || category !== "all") && (
                            <Button variant="icon"
                                onClick={handleClearFilters}
                            >
                                <MdFilterAltOff />
                            </Button>
                        )
                    }
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