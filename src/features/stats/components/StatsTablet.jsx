import {
    FiActivity,
    FiTarget,
    FiClock
} from "react-icons/fi";

import {
    VscDebugRestart
} from "react-icons/vsc";
import { FaHourglassEnd } from "react-icons/fa";
import {
    TbDeviceGamepad2
} from "react-icons/tb";
import StatCard from "./StatCard";
import OptionSelector from "./OptionSelector";

import {
    difficultyOptions,
    categoryOptions,
    modeOptions,
    durationOptions
} from "../config/statsConfig";
import { formatTime } from "../../../shared/utils/helpers";


const StatsTablet = ({
    wpm, accuracy, timeLeft,
    difficulty, setDifficulty,
    category, setCategory,
    mode, setMode,
    duration, setDuration,
    restartTest,
    theme
}) => {

    return (

        <div
            className="
            sticky top-0 z-50
            backdrop-blur-md
            flex flex-col gap-4 p-4
            bg-gray-900/80
            rounded-lg
            border border-gray-800
            "
        >


            {/* TOP STATS ROW */}

            <div
                className="
                flex
                items-center
                justify-between
                "
            >


                <div
                    className="
                    flex
                    items-center
                    gap-6
                    "
                >

                    {/* WPM */}
                    <StatCard
                        icon={
                            <FiActivity
                                className={`w-4 h-4 ${theme.icon}`}
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
                            <FiTarget
                                className={`w-4 h-4 ${theme.icon}`}
                            />
                        }
                        label="ACC"
                        value={`${accuracy}%`}
                        valueClassName={accuracy < 95 ? "text-red-400" : theme.text}

                        theme={theme}
                    />



                    <div className="h-8 w-px bg-gray-700" />


                    {/* Time */}
                    <StatCard
                        icon={
                            <FaHourglassEnd
                                className={`w-4 h-4 ${theme.icon}`}
                            />
                        }
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

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-700">

                {/* Difficulty */}
                <OptionSelector
                    label="DIFFICULTY"
                    options={difficultyOptions}
                    value={difficulty}
                    onChange={setDifficulty}
                    theme={theme}
                />

                {/* Category */}
                <OptionSelector
                    label="CATEGORY"
                    options={categoryOptions}
                    value={category}
                    onChange={setCategory}
                    theme={theme}
                />

                {/* Mode */}
                <OptionSelector
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