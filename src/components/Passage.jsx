export default function Passage({ passage, input, started, finished }) {
    return (
        <main className={`mt-12 max-w-5xl mx-auto text-2xl leading-relaxed font-medium transition whitespace-pre-wrap ${!started ? "blur-sm opacity-40" : ""}`}>
            {passage.split("").map((char, i) => {
                const isTyped = i < input.length;
                const isCorrect = isTyped && char === input[i];
                const isError = isTyped && char !== input[i];
                const isCaret = started && !finished && i === input.length;

                let cls = "text-gray-500";
                if (isCorrect) cls = "text-green-400";
                if (isError) cls = "text-red-400 underline";

                return (
                    <span key={i} className="relative inline-block">
                        {/* Block caret */}
                        {isCaret && <span className={`block-caret ${isError ? "bg-red-500" : "bg-blue-400"}`} />}
                        {/* Character */}
                        <span className={cls}>{char}</span>
                    </span>
                );
            })}

            {/* Caret at end of passage */}
            {started && !finished && input.length === passage.length && (
                <span className="relative inline-block w-[0.6ch] h-[1.4em]">
                    <span className="block-caret" />
                </span>
            )}
        </main>
    );
}
