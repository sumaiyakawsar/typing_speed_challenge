import DifficultyDropdown from "./Dropdowns/DifficultyDropdown";
import ModeDropdown from "./Dropdowns/ModeDropdown";
import { VscDebugRestart } from "react-icons/vsc";

const Stats = ({
    wpm,
    accuracy,
    timeLeft,
    difficulty,
    setDifficulty,
    mode,
    setMode,
    restartTest
}) => (
    <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-4 md:gap-6 border-b border-white/5 py-4 text-sm text-gray-300">

        {/* --- Desktop View --- */}
        <div className="hidden md:flex md:items-center md:gap-6 w-full">
            {/* BASIC STATS */}
            <span>
                WPM: <b className="text-white">{wpm || 0}</b>
            </span>

            <span>
                Accuracy:{" "}
                <b className={accuracy < 95 ? "text-red-400" : "text-white"}>
                    {accuracy}%
                </b>
            </span>

            <span>
                Time:{" "}
                <b className="text-yellow-300">
                    {mode === "timed"
                        ? `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`
                        : `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`}
                </b>
            </span>

            {/* DIFFICULTY */}
            <div className="ml-auto flex items-center gap-2">
                <span className="text-gray-400">Difficulty:</span>
                {["easy", "medium", "hard"].map(d => (
                    <button
                        key={d}
                        onClick={() => setDifficulty(d)}
                        className={`px-3 py-1 rounded-md border transition cursor-pointer
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
                    ${difficulty === d
                                ? "border-blue-500 text-blue-400"
                                : "border-white/10 hover:border-white/20"
                            }`}
                    >
                        {d[0].toUpperCase() + d.slice(1)}
                    </button>
                ))}
            </div>

            {/* MODE */}
            <div className="flex items-center gap-2">
                <span className="text-gray-400">Mode:</span>

                <button
                    onClick={() => setMode("timed")}
                    className={`px-3 py-1 rounded-md border transition cursor-pointer
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
                        ${mode === "timed"
                            ? "border-blue-500 text-blue-400"
                            : "border-white/10 hover:border-white/20"}
        `}
                >
                    Timed (60s)
                </button>

                <button
                    onClick={() => setMode("passage")}
                    className={`px-3 py-1 rounded-md border transition cursor-pointer
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
                        ${mode === "passage"
                            ? "border-blue-500 text-blue-400"
                            : "border-white/10 hover:border-white/20"}
        `}
                >
                    Passage
                </button>
            </div>

            {/* RESTART */}
            <button
                onClick={restartTest}
                className=" text-sm px-3 py-2 rounded-lg cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
                border border-white/10 hover:border-white/30"
                title="Restart Test"
            >
                <VscDebugRestart />
            </button>
        </div>

        {/* --- Mobile View --- */}
        <div className="flex flex-col md:hidden w-full items-center gap-3">
            {/* BASIC STATS ROW */}

            <div className=" flex   justify-around w-100 items-center ">
                <div className="px-3 text-center">
                    <p className="text-xs text-gray-400">WPM</p>
                    <p className="text-lg text-white font-semibold">{wpm || 0}</p>
                </div>

                <div className="h-8 w-px bg-white/20" />

                <div className="px-3 text-center">
                    <p className="text-xs text-gray-400">Accuracy</p>
                    <b className={`text-lg ${accuracy < 95 ? "text-red-400" : "text-white"}`}>{accuracy}%</b>
                </div>

                <div className="h-8 w-px bg-white/20" />

                <div className="px-3 text-center">
                    <p className="text-xs text-gray-400">Time</p>
                    <b className="text-yellow-400">
                        {mode === "timed"
                            ? `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`
                            : `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`}
                    </b>
                </div>
            </div>

            {/* DIFFICULTY, MODE, RESTART ROW */}




            <div className="flex  justify-center items-center gap-3 w-full">
                <DifficultyDropdown
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                />

                <ModeDropdown
                    mode={mode}
                    setMode={setMode}
                />

                <button
                    onClick={restartTest}
                    className="text-sm px-3 py-2 flex items-center justify-center cursor-pointer 
    rounded-md border border-white/10 hover:border-white/30
    focus:outline-none focus:ring-2 focus:ring-blue-500"
                    title="Restart"
                >
                    <VscDebugRestart />
                </button>
            </div>

        </div>
    </div>
);

export default Stats;
