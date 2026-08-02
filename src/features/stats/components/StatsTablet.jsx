import StatCard from "./StatCard";
import OptionSelector from "./OptionSelector";

import { LuActivity, LuTarget, LuGamepad2, LuClock } from "react-icons/lu";
import { VscDebugRestart } from "react-icons/vsc";
import { FaHourglassEnd } from "react-icons/fa";
import { MdOutlineWorkspacePremium, MdOutlineCategory } from "react-icons/md";

import {
    difficultyOptions, categoryOptions, modeOptions, durationOptions
} from "../config/statsConfig";
import { formatTime } from "../../../shared/utils/helpers";


const StatsTablet = ({
    wpm, accuracy, timeLeft,
    difficulty, setDifficulty, category, setCategory,
    mode, setMode, duration, setDuration,
    restartTest, theme
}) => {

    return (
        <div className="sticky top-0 z-50 backdrop-blur-md
            flex flex-col gap-4 p-4 bg-gray-900/50 rounded-b-lg">

            {/* TOP STATS ROW */}
            <div className="flex items-center justify-between" >

                <div className="flex items-center gap-6">

                    {/* WPM */}
                    <StatCard
                        icon={<LuActivity className={`w-4 h-4 ${theme.icon}`} />}
                        label="WPM"
                        value={wpm || 0}
                        theme={theme}
                    />

                    <div className="h-8 w-px bg-gray-700" />

                    {/* Accuracy */}
                    <StatCard
                        icon={<LuTarget className={`w-4 h-4 ${theme.icon}`} />}
                        label="ACC"
                        value={`${accuracy}%`}
                        valueClassName={accuracy < 95 ? "text-red-400" : theme.text}
                        theme={theme}
                    />

                    <div className="h-8 w-px bg-gray-700" />

                    {/* Time */}
                    <StatCard
                        icon={<FaHourglassEnd className={`w-4 h-4 ${theme.icon}`} />}
                        label="TIME"
                        value={formatTime(timeLeft)}
                        valueClassName={theme.text}
                        theme={theme}
                    />
                </div>

                {/* Restart Button */}
                <button
                    onClick={restartTest}
                    className={`
                    px-4
                    py-3
                    rounded-lg
                    ${theme.button}
                    transition-all duration-300
                    hover:scale-105
                    cursor-pointer
                    `}
                >
                    <VscDebugRestart
                        className={`
                        w-5
                        h-5
                        ${theme.icon}
                        `}
                    />
                </button>
            </div>





            {/* CONTROLS ROW */}

            <div className={`flex flex-wrap items-center justify-between gap-3 pt-3 border-t ${theme.border}`}>

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

                {/* Duration (if timed) */}
                {
                    mode === "timed" && (
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
                    )
                }


            </div>


        </div>

    );

};


export default StatsTablet;