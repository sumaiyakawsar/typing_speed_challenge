import KeyboardHeatmap from "./KeyboardHeatmap";
import { FiCode, FiPercent, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { TbProgress } from "react-icons/tb";
import { useTheme } from "../../theme/hooks/useTheme";

export default function Passage({ passage, input, started, finished, keyErrors,
    heatmapKey, category, showHeatmap }) {
    const isCode = category === "code";
    const { theme } = useTheme();

    return (
        <>
            <div className={`w-full py-6 transition-all duration-300 ${started ? "blur-0 pointer-events-auto" : "blur-md pointer-events-none"}`}>
                {/* Progress indicator */}
                {started && (
                    <div className="mt-6 flex items-center justify-center space-x-4">
                        <div className="flex items-center gap-2">
                            <TbProgress className={`w-4 h-4 ${theme.text}`} />
                            <span className="text-sm font-medium text-gray-400">Progress</span>
                        </div>
                        <div className="flex-1 max-w-md h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className={`h-full bg-linear-to-r ${theme.primary} rounded-full transition-all duration-300 relative`}
                                style={{ width: `${(input.length / passage.length) * 100}%` }}
                            >
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                            </div>
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 min-w-16 flex items-center gap-1">
                            <FiPercent className="w-3 h-3" />
                            {Math.round((input.length / passage.length) * 100)}%
                        </span>
                    </div>
                )}



                {/* Text passage container */}
                <div className={`relative max-w-4xl mx-auto p-8 rounded-2xl transition-all duration-300 ${!started ? "opacity-50" : ""}`}>

                    {/* Subtle background gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-gray-50/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 rounded-2xl -z-10" />


                    {/* Text content */}
                    <div className={`transition-all 
                        ${!started ? "blur-[1px]" : ""} 
                        ${isCode
                            ? "font-mono text-green-400 bg-gray-900 p-4 rounded-lg whitespace-pre-wrap overflow-x-auto"
                            : "font-sans text-2xl leading-[1.8] tracking-wide text-gray-800 dark:text-gray-200"}`}>
                        {!isCode ? (
                            // Normal per-character rendering for lyrics/quotes
                            passage.split("").map((char, i) => {
                                const isTyped = i < input.length;
                                const isCorrect = isTyped && char === input[i];
                                const isError = isTyped && char !== input[i];
                                const isCaret = started && !finished && i === input.length;
                                const isWhitespace = char === ' ';

                                let charClasses = "transition-colors duration-150 ";
                                let bgClasses = "relative inline-block px-[0.05em] rounded-sm ";

                                if (!isTyped) {
                                    charClasses += "text-gray-400 dark:text-gray-600";
                                } else if (isCorrect) {
                                    charClasses += "text-emerald-600 dark:text-emerald-400";
                                } else if (isError) {
                                    charClasses += "text-rose-600 dark:text-rose-400 font-semibold";
                                    bgClasses += "bg-rose-100/50 dark:bg-rose-900/30";
                                }

                                if (isWhitespace && isTyped && !isError) {
                                    bgClasses += "after:content-[''] after:absolute after:bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[2px] after:h-[2px] after:bg-emerald-400/50 after:rounded-full";
                                }

                                return (
                                    <span key={i} className={bgClasses}>
                                        {isCaret && (
                                            <span className={`absolute inset-0 -mx-px -my-0.5 rounded pointer-events-none animate-pulse ${isError ? "bg-rose-400/30" : `${theme.caretColor}`}`}>
                                                <span className={`absolute left-0 top-0 w-0.5 h-full ${isError ? "bg-rose-500" : "bg-blue-500"}`} />
                                                <HiOutlineSparkles className={`absolute -top-2 -right-2 w-3 h-3 ${theme.text}`} />
                                            </span>
                                        )}
                                        <span className={charClasses}>{char === ' ' ? '\u00A0' : char}</span>
                                    </span>
                                );
                            })
                        ) : (
                            // Code passages: render as block (preserve formatting)
                            <div className="relative">
                                <div className="absolute -left-8 top-0 flex items-center h-full">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                                        <FiCode className="w-3 h-3 text-blue-400" />
                                    </div>
                                </div>
                                {passage}
                            </div>
                        )}
                    </div>

                </div>

                {/* Heatmap section */}
                <div className="mt-8 max-w-4xl mx-auto">


                    {showHeatmap && (
                        <KeyboardHeatmap
                            key={heatmapKey}
                            keyErrors={keyErrors}
                        />
                    )}

                    {/* Stats summary */}
                    {started && input.length > 0 && (
                        <div className="mt-6 p-4 bg-gray-800/30 rounded-xl border border-gray-700">
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                <div className="flex flex-col items-center p-3 bg-gray-800/50 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                        <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                                        <span className="text-sm text-gray-400">Correct</span>
                                    </div>
                                    <span className="text-xl font-bold text-white">
                                        {input.split('').filter((char, i) => char === passage[i]).length}
                                    </span>
                                </div>

                                <div className="flex flex-col items-center p-3 bg-gray-800/50 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                        <FiXCircle className="w-4 h-4 text-rose-400" />
                                        <span className="text-sm text-gray-400">Errors</span>
                                    </div>
                                    <span className="text-xl font-bold text-white">
                                        {input.split('').filter((char, i) => char !== passage[i]).length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}