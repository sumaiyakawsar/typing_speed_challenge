import StatCard from "./StatCard";
import OptionSelector from "./OptionSelector";


import { difficultyOptions, categoryOptions, modeOptions, durationOptions } from "../config/statsConfig";
import { formatTime } from "../../../shared/utils/helpers";

import { MdOutlineWorkspacePremium, MdOutlineCategory } from "react-icons/md";
import { LuActivity, LuTarget, LuClock, LuGamepad2 } from "react-icons/lu";
import { FaHourglassEnd } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";


const StatsDesktop = ({
    wpm, accuracy, timeLeft,
    difficulty, setDifficulty, category, setCategory,
    mode, setMode, duration, setDuration,
    restartTest,
    theme
}) => {

    return (
        <div className="backdrop-blur-md
            flex flex-wrap items-center justify-between
            px-4 py-3 bg-gray-900/50 rounded-b-lg"
        >

            {/* LEFT SIDE STATS */}
            <div className="flex items-center gap-6">

                {/* WPM */}
                <StatCard
                    icon={
                        <LuActivity
                            className={`w-5 h-5 ${theme.icon} animate-pulse`}
                        />
                    }
                    label="WPM"
                    value={wpm || 0}
                    theme={theme}
                />


                <div className="h-8 w-px bg-gray-700" />

                {/* Accuracy */}
                <StatCard
                    icon={
                        <LuTarget
                            className={`w-5 h-5 ${theme.icon} animate-pulse`}
                        />
                    }
                    label="ACCURACY"
                    value={`${accuracy}%`}
                    valueClassName={accuracy < 95 ? "text-red-400" : theme.text}
                    theme={theme}
                />


                <div className="h-8 w-px bg-gray-700" />

                {/* Time */}
                <StatCard
                    icon={
                        <FaHourglassEnd
                            className={`w-5 h-5 ${theme.icon} animate-pulse`}
                        />
                    }
                    label="TIME"
                    value={formatTime(timeLeft)}
                    theme={theme}
                />
            </div>



            {/* RIGHT SIDE CONTROLS */}
            <div className="flex items-center gap-4">

                {/* Difficulty */}
                <OptionSelector
                    icon={
                        <MdOutlineWorkspacePremium
                            className={`w-3 h-3 animate-pulse`}
                        />
                    }
                    label="DIFFICULTY"
                    options={difficultyOptions}
                    value={difficulty}
                    onChange={setDifficulty}
                    theme={theme}
                />


                <div className="h-8 w-px bg-gray-700" />

                {/* Category */}
                <OptionSelector
                    icon={
                        <MdOutlineCategory
                            className={`w-3 h-3  animate-pulse`}
                        />
                    }
                    label="CATEGORY"
                    options={categoryOptions}
                    value={category}
                    onChange={setCategory}
                    theme={theme}
                />


                <div className="h-8 w-px bg-gray-700" />

                {/* Mode */}
                <OptionSelector
                    icon={
                        <LuGamepad2
                            className={`w-3 h-3  animate-pulse`}
                        />
                    }
                    label="MODE"
                    options={modeOptions}
                    value={mode}
                    onChange={setMode}
                    theme={theme}
                />


                {/* Duration */}
                {
                    mode === "timed" && (

                        <>

                            <div className="h-8 w-px bg-gray-700" />


                            <OptionSelector
                                icon={
                                    <LuClock
                                        className={`w-3 h-3 animate-pulse`}
                                    />
                                }
                                label="DURATION"
                                options={durationOptions}
                                value={duration}
                                onChange={setDuration}
                                theme={theme}
                            />

                        </>

                    )
                }



                <div className="h-8 w-px bg-gray-700" />

                {/* Restart - Neon Button */}
                <button
                    onClick={restartTest}
                    className={`relative
                    px-4
                    py-3
                    ${theme.button}
                    rounded-lg
                    transition-all group
                    duration-300
                    hover:scale-105
                    cursor-pointer
                    `}
                    title="Restart Test"
                >

                    <VscDebugRestart
                        className={`relative group-hover:text-white group-hover:rotate-180 transition-all duration-300
                        w-5 h-5 ${theme.icon}
                        `}
                    />
                </button>
            </div>
        </div>

    );

};


export default StatsDesktop;