import { FiActivity, FiTarget, FiClock } from "react-icons/fi";
import { VscDebugRestart } from "react-icons/vsc";
import { TbCategory2, TbDeviceGamepad2 } from "react-icons/tb";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa";

import StatCard from "./StatCard";
import OptionSelector from "./OptionSelector";

import {
    difficultyOptions,
    categoryOptions,
    modeOptions,
    durationOptions
} from "../config/statsConfig";
import { formatTime } from "../../../shared/utils/helpers";


const StatsMobile = ({
    wpm, accuracy, timeLeft,
    difficulty, setDifficulty,  category, setCategory,
    mode, setMode, duration, setDuration,
    restartTest, theme
}) => {
    return (

        <div className="space-y-3 flex flex-col  ">
            {/* STATS BAR */}
            <div className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/50 rounded-b-lg">

                <div
                    className={`
                    flex
                    items-center
                    justify-between
                    p-3
                    ${theme.bg}
                    rounded-lg
                    border
                    ${theme.border}
                    `}
                >


                    <div
                        className="
                        flex
                        items-center
                        gap-4
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
                        p-2
                        rounded-lg
                        ${theme.button}
                        transition-all
                        hover:scale-105
                        cursor-pointer
                        `}
                    >
                        <VscDebugRestart className={`w-5 h-5 ${theme.icon}`} />
                    </button>
                </div>
            </div>





            {/* SETTINGS */}

            <div
                className=" flex flex-wrap items-center justify-between gap-3 p-3 bg-gray-900/50 rounded-lg
                "
            >
                {/* Difficulty */}
                <OptionSelector
                    icon={
                        <MdOutlineWorkspacePremium
                            className={`w-3 h-3 ${theme.icon} animate-pulse`}
                        />
                    }
                    label="DIFFICULTY"
                    options={difficultyOptions}
                    value={difficulty}
                    onChange={setDifficulty}
                    theme={theme}
                    variant="mobile"
                />



                {/* Category */}
                <OptionSelector
                    icon={
                        <TbCategory2
                            className={`w-3 h-3 ${theme.icon} animate-pulse`}
                        />
                    }
                    label="CATEGORY"
                    options={categoryOptions}
                    value={category}
                    onChange={setCategory}
                    theme={theme}
                    variant="mobile"
                />

                {/* Mode */}
                <OptionSelector
                    icon={
                        <TbDeviceGamepad2
                            className={`w-3 h-3 ${theme.icon} animate-pulse`}
                        />
                    }
                    label="MODE"
                    options={modeOptions}
                    value={mode}
                    onChange={setMode}
                    theme={theme}
                    variant="mobile"
                />

                {/* Duration (if timed) */}
                {mode === "timed" && (
                    <div className="w-full">
                        <OptionSelector
                            icon={
                                <FiClock
                                    className={`w-3 h-3 ${theme.icon} animate-pulse`}
                                />
                            }
                            label="DURATION"

                            options={durationOptions}

                            value={duration}

                            onChange={setDuration}

                            theme={theme}
                            variant="mobile"
                        />

                    </div>

                )
                }



            </div>


        </div>

    );

};


export default StatsMobile;