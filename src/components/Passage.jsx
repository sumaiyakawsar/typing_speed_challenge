import KeyboardHeatmap from "./KeyboardHeatmap";

export default function Passage({ passage, input, started, finished, keyErrors, heatmapKey }) {
    return (

        <div className={`w-full py-6   transition-all duration-300
        ${started ? "blur-0 pointer-events-auto" : "blur-md pointer-events-none"}`}>
            {/* Progress indicator */}
            {started && (
                <div className="mt-6 flex items-center justify-center space-x-4">
                    <div className="flex-1 max-w-md h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-linear-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-300"
                            style={{ width: `${(input.length / passage.length) * 100}%` }}
                        />
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 min-w-16">
                        {Math.round((input.length / passage.length) * 100)}%
                    </span>
                </div>
            )}
            {/* Text passage container */}
            <div className={`relative max-w-4xl mx-auto p-8 rounded-2xl transition-all duration-300 ${!started ? "opacity-50" : ""}`}>


                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-gray-50/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 rounded-2xl -z-10" />

                {/* Text content */}
                <div className={`font-sans text-2xl leading-[1.8] tracking-wide font-medium text-gray-800 dark:text-gray-200 transition-all ${!started ? "blur-[1px]" : ""}`}>
                    {passage.split("").map((char, i) => {
                        const isTyped = i < input.length;
                        const isCorrect = isTyped && char === input[i];
                        const isError = isTyped && char !== input[i];
                        const isCaret = started && !finished && i === input.length;
                        const isWhitespace = char === ' ';

                        let charClasses = "transition-colors duration-150 ";
                        let bgClasses = "relative inline-block px-[0.05em] rounded-sm ";

                        // Character styling
                        if (!isTyped) {
                            charClasses += "text-gray-400 dark:text-gray-600";
                        } else if (isCorrect) {
                            charClasses += "text-emerald-600 dark:text-emerald-400";
                        } else if (isError) {
                            charClasses += "text-rose-600 dark:text-rose-400 font-semibold";
                            bgClasses += "bg-rose-100/50 dark:bg-rose-900/30";
                        }

                        // Whitespace indicator
                        if (isWhitespace && isTyped && !isError) {
                            bgClasses += "after:content-[''] after:absolute after:bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[2px] after:h-[2px] after:bg-emerald-400/50 after:rounded-full";
                        }

                        return (
                            <span
                                key={i}
                                className={bgClasses}
                            >
                                {/* Smooth caret */}
                                {isCaret && (
                                    <span className={`absolute inset-0 -mx-px -my-0.5 rounded pointer-events-none animate-pulse ${isError ? "bg-rose-400/30" : "bg-blue-400/30"}`}>
                                        <span className={`absolute left-0 top-0 w-0.5 h-full ${isError ? "bg-rose-500" : "bg-blue-500"}`} />
                                    </span>
                                )}

                                {/* Character */}
                                <span className={charClasses}>
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            </span>
                        );
                    })}

                    {/* End-of-text caret */}
                    {started && !finished && input.length === passage.length && (
                        <span className="relative inline-block w-[0.5ch] h-[1.4em] ml-[0.1em]">
                            <span className="absolute inset-0 bg-linear-to-r from-blue-500/30 to-transparent rounded-r-sm" />
                            <span className="absolute left-0 top-0 w-0.5 h-full bg-linear-to-b from-blue-500 to-blue-400 animate-pulse rounded-full" />
                        </span>
                    )}
                </div>


            </div>

            {/* Heatmap section */}
            <div className="mt-8 max-w-4xl mx-auto">
                <KeyboardHeatmap keyErrors={keyErrors} key={heatmapKey} />

                {/* Stats summary */}
                {started && input.length > 0 && (
                    <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2" />
                            Correct: {input.split('').filter((char, i) => char === passage[i]).length}
                        </span>
                        <span className="flex items-center">
                            <div className="w-3 h-3 bg-rose-500 rounded-full mr-2" />
                            Errors: {input.split('').filter((char, i) => char !== passage[i]).length}
                        </span>
                    </div>
                )}
            </div>
        </div>

    );
}
