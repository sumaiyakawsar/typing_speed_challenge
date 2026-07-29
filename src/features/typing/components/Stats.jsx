import {
    VscDebugRestart,
} from "react-icons/vsc";
import {
    FiActivity,
    FiTarget,
    FiBook,
    FiMusic,
    FiCode,
    FiClock,
} from "react-icons/fi";
import {
    HiClock,
} from "react-icons/hi";
import {
    MdOutlineCategory,
    MdOutlineTimer,
    MdOutlineWorkspacePremium
} from "react-icons/md";
import {
    TbCircleLetterE,
    TbCircleLetterM,
    TbCircleLetterH,
    TbCategory2,
    TbDeviceGamepad2
} from "react-icons/tb";
import {
    PiTextTLight,
} from "react-icons/pi";
import { RiTimerFill } from "react-icons/ri";
import { useTheme } from "../../theme/hooks/useTheme";

const StatsCompact = ({
    wpm,
    accuracy,
    timeLeft,
    difficulty, setDifficulty,
    mode, setMode,
    duration, setDuration,
    category, setCategory,
    restartTest
}) => {
    const {
        theme: currentTheme
    } = useTheme();
    const difficultyIcons = {
        easy: <TbCircleLetterE className="text-lg" />,
        medium: <TbCircleLetterM className="text-lg" />,
        hard: <TbCircleLetterH className="text-lg" />
    };

    const categoryIcons = {
        quotes: <FiBook className="text-lg" />,
        lyrics: <FiMusic className="text-lg" />,
        code: <FiCode className="text-lg" />
    };

    const modeIcons = {
        timed: <MdOutlineTimer className="text-lg" />,
        passage: <PiTextTLight className="text-lg" />
    };

    // Helper function to properly apply theme classes
    const getThemeClass = (baseClass, themeClass) => {
        // Handle cases where themeClass might be undefined or empty
        if (!themeClass) return baseClass;

        // For button classes, check if it's a gradient
        if (baseClass.includes('button')) {
            return themeClass.includes('from')
                ? themeClass
                : `bg-${themeClass}`;
        }

        return themeClass;
    };

    return (
        <div className="w-full">

            <div className="container mx-auto">

                {/* Desktop & Tablet */}
                <div className="hidden   backdrop-blur-md lg:flex items-center flex-wrap justify-between   px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-800">
                    {/* Left: Stats */}
                    <div className="flex items-center gap-6">

                        {/* WPM */}
                        <div className="relative group">
                            <div className={`absolute -inset-1 ${currentTheme.glow} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000`}></div>
                            <div className={`relative flex items-center gap-3 p-2 ${getThemeClass('bg', currentTheme.bg)} rounded-xl ${currentTheme.border}`}>
                                <div className="relative">
                                    <FiActivity className={`w-5 h-5 ${currentTheme.icon} animate-pulse`} />
                                </div>
                                <div>
                                    <p className={`text-xs ${currentTheme.text}/80 opacity-80 flex items-center gap-1`}>
                                        WPM
                                    </p>
                                    <p className="text-lg font-bold text-white tracking-wider">{wpm || 0}</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-gray-700"></div>

                        {/* Accuracy */}
                        <div className="relative group">
                            <div className={`absolute -inset-1 ${currentTheme.glow} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000`}></div>
                            <div className={`relative flex items-center gap-3 p-2 ${getThemeClass('bg', currentTheme.bg)} rounded-xl ${currentTheme.border}`}>
                                <FiTarget className={`w-5 h-5 ${currentTheme.icon} animate-pulse`} />
                                <div>
                                    <p className={`text-xs ${currentTheme.text}/80  opacity-80 flex items-center gap-1`}>
                                        ACCURACY
                                    </p>
                                    <p className={`text-lg font-bold ${accuracy < 95 ? "text-red-400" : currentTheme.text} tracking-wider`}>
                                        {accuracy}%
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-gray-700"></div>

                        {/* Time */}
                        <div className="relative group">
                            <div className={`absolute -inset-1 ${currentTheme.glow} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000`}></div>
                            <div className={`relative flex items-center gap-3 p-2 ${getThemeClass('bg', currentTheme.bg)} rounded-xl ${currentTheme.border}`}>
                                <RiTimerFill className={`w-5 h-5 ${currentTheme.icon} animate-pulse`} />
                                <div>
                                    <p className={`text-xs ${currentTheme.text}/80 opacity-80 flex items-center gap-1`}>
                                        TIME
                                    </p>
                                    <span className={`text-lg font-bold ${currentTheme.text} tracking-wider`}>
                                        {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Controls */}
                    <div className="flex items-center gap-4">
                        {/* Difficulty */}
                        <div className="flex flex-col gap-1">
                            <span className={`text-xs ${currentTheme.text} opacity-60 font-mono flex items-center gap-1`}>
                                <MdOutlineWorkspacePremium className="w-3 h-3" /> DIFFICULTY
                            </span>
                            <div className={`flex gap-1 p-1 bg-gray-900/80 rounded-lg border ${currentTheme.border}`}>
                                {["easy", "medium", "hard"].map(d => (
                                    <button
                                        key={d}
                                        onClick={() => setDifficulty(d)}
                                        className={`px-3 py-1.5 text-sm font-medium font-mono rounded transition-all duration-200 cursor-pointer flex items-center gap-2 
                                    ${difficulty === d
                                                ? `${getThemeClass('button', currentTheme.button)} text-white shadow-lg ${currentTheme.shadow}`
                                                : `text-gray-400 hover:${currentTheme.text} hover:${currentTheme.highlight}`
                                            }`}
                                        title={d.toUpperCase()}
                                    >
                                        {difficultyIcons[d]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="h-8 w-px bg-gray-700"></div>

                        {/* Category */}
                        <div className="flex flex-col gap-1">
                            <span className={`text-xs ${currentTheme.text} opacity-60 font-mono flex items-center gap-1`}>
                                <TbCategory2 className="w-3 h-3" /> CATEGORY
                            </span>
                            <div className={`flex gap-1 p-1 bg-gray-900/80 rounded-lg border ${currentTheme.border}`}>
                                {["quotes", "lyrics", "code"].map((c) => (
                                    <button
                                        key={c}
                                        onClick={() => setCategory(c)}
                                        className={`px-3 py-1.5 cursor-pointer text-sm font-medium font-mono rounded transition-all duration-200 flex items-center gap-2
                                    ${category === c
                                                ? `${getThemeClass('button', currentTheme.button)} text-white shadow-lg ${currentTheme.shadow}`
                                                : `text-gray-400 hover:${currentTheme.text} hover:${currentTheme.highlight}`
                                            }`}
                                        title={c.toUpperCase()}
                                    >
                                        {categoryIcons[c]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="h-8 w-px bg-gray-700"></div>

                        {/* Mode */}
                        <div className="flex flex-col gap-1">
                            <span className={`text-xs ${currentTheme.text} opacity-60 font-mono flex items-center gap-1`}>
                                <TbDeviceGamepad2 className="w-3 h-3" /> MODE
                            </span>
                            <div className={`flex gap-1 p-1 bg-gray-900/80 rounded-lg border ${currentTheme.border}`}>
                                {["timed", "passage"].map((m) => (
                                    <button
                                        key={m}
                                        onClick={() => setMode(m)}
                                        className={`px-3 py-1.5 cursor-pointer text-sm font-medium font-mono rounded-md transition-all duration-200 flex items-center gap-2
                                    ${mode === m
                                                ? `${getThemeClass('button', currentTheme.button)} text-white shadow-lg ${currentTheme.shadow}`
                                                : `text-gray-400 hover:${currentTheme.text} hover:${currentTheme.highlight}`
                                            }`}
                                        title={m.toUpperCase()}
                                    >
                                        {modeIcons[m]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Duration */}
                        {mode === "timed" && (
                            <>
                                <div className="h-8 w-px bg-gray-700"></div>
                                <div className="flex flex-col gap-1">
                                    <span className={`text-xs ${currentTheme.text} opacity-60 font-mono flex items-center gap-1`}>
                                        <FiClock className="w-3 h-3" /> DURATION
                                    </span>
                                    <div className={`flex gap-1 p-1 bg-gray-900/80 rounded-lg border ${currentTheme.border}`}>
                                        {[15, 30, 60, 120].map(d => (
                                            <button
                                                key={d}
                                                onClick={() => setDuration(d)}
                                                className={`px-3 py-1.5 text-sm cursor-pointer font-medium font-mono rounded transition-all duration-200 flex items-center gap-1
                                        ${duration === d
                                                        ? `${getThemeClass('button', currentTheme.button)} text-white shadow-lg ${currentTheme.shadow}`
                                                        : `text-gray-400 hover:${currentTheme.text} hover:${currentTheme.highlight}`
                                                    }`}
                                            >
                                                {d}s
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="h-8 w-px bg-gray-700"></div>

                        {/* Restart - Neon Button */}
                        <button
                            onClick={restartTest}
                            className={`relative px-4 py-3 ${getThemeClass('button', currentTheme.button)} rounded-lg transition-all duration-300 cursor-pointer group hover:scale-105`}
                            title="Restart Test"
                        >
                            <VscDebugRestart className={`relative w-5 h-5 ${currentTheme.icon} group-hover:text-white group-hover:rotate-180 transition-all duration-300`} />
                        </button>
                    </div>
                </div>

                {/* Tablet (Medium Screens) */}
                <div className="hidden md:flex lg:hidden sticky top-0 z-50 backdrop-blur-md flex-col gap-3 p-4 bg-gray-900/80 rounded-lg border border-gray-800">
                    {/* Stats Row */}
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-6">
                            {/* WPM */}
                            <div className="flex items-center gap-2">
                                <div className={`p-2 ${getThemeClass('button', currentTheme.button)} rounded-lg`}>
                                    <FiActivity className={`w-4 h-4 ${currentTheme.icon}`} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">WPM</p>
                                    <p className="text-lg font-bold text-white">{wpm || 0}</p>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-gray-700"></div>

                            {/* Accuracy */}
                            <div className="flex items-center gap-2">
                                <div className={`p-2 ${getThemeClass('button', currentTheme.button)} rounded-lg`}>
                                    <FiTarget className={`w-4 h-4 ${currentTheme.icon}`} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">ACC</p>
                                    <p className={`text-lg font-bold ${accuracy < 95 ? "text-red-400" : currentTheme.text}`}>
                                        {accuracy}%
                                    </p>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-gray-700"></div>

                            {/* Time */}
                            <div className="flex items-center gap-2">
                                <div className={`p-2 ${getThemeClass('button', currentTheme.button)} rounded-lg`}>
                                    <HiClock className={`w-4 h-4 ${currentTheme.icon}`} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">TIME</p>
                                    <span className={`text-lg font-bold ${currentTheme.text}`}>
                                        {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Restart Button */}
                        <button
                            onClick={restartTest}
                            className={`px-4 py-3 ${getThemeClass('button', currentTheme.button)} rounded-lg transition-all duration-300 hover:scale-105`}
                        >
                            <VscDebugRestart className={`w-5 h-5 ${currentTheme.icon}`} />
                        </button>
                    </div>

                    {/* Controls Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-700">
                        {/* Difficulty */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400">DIFFICULTY</span>
                            <div className={`flex gap-1 p-1 bg-gray-900/80 rounded-lg border ${currentTheme.border}`}>
                                {["easy", "medium", "hard"].map(d => (
                                    <button
                                        key={d}
                                        onClick={() => setDifficulty(d)}
                                        className={`px-2 py-1.5 text-sm rounded transition-all ${difficulty === d
                                            ? `${getThemeClass('button', currentTheme.button)} text-white`
                                            : 'text-gray-400 hover:bg-gray-800'
                                            }`}
                                        title={d}
                                    >
                                        {difficultyIcons[d]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Category */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400">CATEGORY</span>
                            <div className={`flex gap-1 p-1 bg-gray-900/80 rounded-lg border ${currentTheme.border}`}>
                                {["quotes", "lyrics", "code"].map(c => (
                                    <button
                                        key={c}
                                        onClick={() => setCategory(c)}
                                        className={`px-2 py-1.5 text-sm rounded transition-all ${category === c
                                            ? `${getThemeClass('button', currentTheme.button)} text-white`
                                            : 'text-gray-400 hover:bg-gray-800'
                                            }`}
                                        title={c.toUpperCase()}
                                    >
                                        {categoryIcons[c]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mode */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400">MODE</span>
                            <div className={`flex gap-1 p-1 bg-gray-900/80 rounded-lg border ${currentTheme.border}`}>
                                {["timed", "passage"].map(m => (
                                    <button
                                        key={m}
                                        onClick={() => setMode(m)}
                                        className={`px-2 py-1.5 text-sm rounded transition-all ${mode === m
                                            ? `${getThemeClass('button', currentTheme.button)} text-white`
                                            : 'text-gray-400 hover:bg-gray-800'
                                            }`}
                                        title={m.toUpperCase()}
                                    >
                                        {modeIcons[m]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Duration (if timed) */}
                        {mode === "timed" && (
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-gray-400">DURATION</span>
                                <div className={`flex gap-1 p-1 bg-gray-900/80 rounded-lg border ${currentTheme.border}`}>
                                    {[15, 30, 60, 120].map(d => (
                                        <button
                                            key={d}
                                            onClick={() => setDuration(d)}
                                            className={`px-2 py-1.5 text-sm rounded transition-all ${duration === d
                                                ? `${getThemeClass('button', currentTheme.button)} text-white`
                                                : 'text-gray-400 hover:bg-gray-800'
                                                }`}
                                        >
                                            {d}s
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden space-y-3 flex flex-col">
                    {/* Stats Bar */}
                    <div className="sticky top-0 z-50 backdrop-blur-md">
                        <div className={`flex items-center justify-between p-3 ${getThemeClass('bg', currentTheme.bg)} rounded-lg border ${currentTheme.border}`}>
                            <div className="flex items-center gap-4">
                                {/* WPM */}
                                <div className="flex items-center gap-2">
                                    <div className={`p-2 ${getThemeClass('button', currentTheme.button)} rounded-lg`}>
                                        <FiActivity className={`w-4 h-4 ${currentTheme.icon}`} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-400">WPM</p>
                                        <div className="text-lg font-bold text-white">{wpm || 0}</div>
                                    </div>
                                </div>

                                <div className="h-8 w-px bg-gray-700"></div>

                                {/* Accuracy */}
                                <div className="flex items-center gap-2">
                                    <div className={`p-2 ${getThemeClass('button', currentTheme.button)} rounded-lg`}>
                                        <FiTarget className={`w-4 h-4 ${currentTheme.icon}`} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-400">ACC</p>
                                        <div className={`text-lg font-bold ${accuracy < 95 ? "text-red-400" : currentTheme.text}`}>
                                            {accuracy}%
                                        </div>
                                    </div>
                                </div>

                                <div className="h-8 w-px bg-gray-700"></div>

                                {/* Time */}
                                <div className="flex items-center gap-2">
                                    <div className={`p-2 ${getThemeClass('button', currentTheme.button)} rounded-lg`}>
                                        <HiClock className={`w-4 h-4 ${currentTheme.icon}`} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-400">TIME</p>
                                        <span className={`text-lg font-bold ${currentTheme.text}`}>
                                            {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Restart Button */}
                            <button
                                onClick={restartTest}
                                className={`p-2 rounded-lg ${getThemeClass('button', currentTheme.button)} transition-colors hover:scale-105`}
                            >
                                <VscDebugRestart className={`w-5 h-5 ${currentTheme.icon}`} />
                            </button>
                        </div>
                    </div>

                    {/* Settings Row */}
                    <div className="flex flex-wrap gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                        {/* Difficulty */}
                        <div className="flex-1 min-w-30">
                            <label className={`text-xs text-gray-500 ${currentTheme.text}/60 mb-2 flex items-center gap-1`}>
                                <MdOutlineWorkspacePremium className="w-3 h-3" /> Difficulty
                            </label>
                            <div className={`flex rounded-lg overflow-hidden border ${currentTheme.border}`}>
                                {["easy", "medium", "hard"].map(d => (
                                    <button
                                        key={d}
                                        onClick={() => setDifficulty(d)}
                                        className={`flex-1 py-2 flex items-center justify-center 
                                        ${difficulty === d
                                                ? `${getThemeClass('button', currentTheme.button)} text-white`
                                                : `bg-gray-900 text-gray-400 hover:bg-gray-800`
                                            }`}
                                    >
                                        {difficultyIcons[d]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Category */}
                        <div className="flex-1 min-w-30">
                            <label className={`text-xs text-gray-500 ${currentTheme.text}/60 mb-2 flex items-center gap-1`}>
                                <MdOutlineCategory className="w-3 h-3" /> Category
                            </label>
                            <div className={`flex rounded-lg overflow-hidden border ${currentTheme.border}`}>
                                {["quotes", "lyrics", "code"].map(c => (
                                    <button
                                        key={c}
                                        onClick={() => setCategory(c)}
                                        className={`flex-1 py-2 flex items-center justify-center 
                                        ${category === c
                                                ? `${getThemeClass('button', currentTheme.button)} text-white`
                                                : `bg-gray-900 text-gray-400 hover:bg-gray-800`
                                            }`}
                                        title={c.toUpperCase()}
                                    >
                                        {categoryIcons[c]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mode */}
                        <div className="flex-1 min-w-30">
                            <label className={`text-xs text-gray-500 ${currentTheme.text}/60 mb-2 flex items-center gap-1`}>
                                <TbDeviceGamepad2 className="w-3 h-3" /> Mode
                            </label>
                            <div className={`flex rounded-lg overflow-hidden border ${currentTheme.border}`}>
                                <button
                                    onClick={() => setMode("timed")}
                                    className={`flex-1 py-2 flex items-center justify-center 
                                    ${mode === "timed"
                                            ? `${getThemeClass('button', currentTheme.button)} text-white`
                                            : `bg-gray-900 text-gray-400 hover:bg-gray-800`
                                        }`}
                                    title="Timed"
                                >
                                    {modeIcons.timed}
                                </button>
                                <button
                                    onClick={() => setMode("passage")}
                                    className={`flex-1 py-2 flex items-center justify-center 
                                    ${mode === "passage"
                                            ? `${getThemeClass('button', currentTheme.button)} text-white`
                                            : `bg-gray-900 text-gray-400 hover:bg-gray-800`
                                        }`}
                                    title="Passage"
                                >
                                    {modeIcons.passage}
                                </button>
                            </div>
                        </div>

                        {/* Duration (if timed) */}
                        {mode === "timed" && (
                            <div className="w-full">
                                <label className={`text-xs text-gray-500 ${currentTheme.text}/60 mb-2 flex items-center gap-1`}>
                                    <FiClock className="w-3 h-3" /> Duration
                                </label>
                                <div className="grid grid-cols-4 gap-2">
                                    {[15, 30, 60, 120].map(d => (
                                        <button
                                            key={d}
                                            onClick={() => setDuration(d)}
                                            className={`py-2 text-sm rounded ${duration === d
                                                ? `${getThemeClass('button', currentTheme.button)} text-white`
                                                : `bg-gray-900 text-gray-400 hover:bg-gray-800`
                                                }`}
                                        >
                                            {d}s
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StatsCompact;


