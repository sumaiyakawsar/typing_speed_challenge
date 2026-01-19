const keyboardRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"]
];

export default function KeyboardHeatmap({ keyErrors }) {
    const maxError = Math.max(...Object.values(keyErrors), 1);

    const getColor = (key) => {
        const errors = keyErrors[key] || 0;
        const intensity = errors / maxError; // 0 to 1
        if (intensity === 0) return "bg-gray-700";
        const red = Math.floor(255 * intensity);
        return `rgb(${red}, 50, 50)`; // inline style for gradient
    };

    return (
        <div className="mt-6 flex flex-col gap-2 items-center">
            {keyboardRows.map((row, i) => (
                <div key={i} className="flex gap-1">
                    {row.map((key) => {
                        const count = keyErrors[key] || 0;
                        return (
                            <div
                                key={key}
                                title={`Errors: ${count}`} 
                                style={{ backgroundColor: getColor(key) }}
                                className="w-12 h-14 rounded-md flex items-center justify-center text-white font-bold relative"
                            >
                                <span>{key.toUpperCase()}</span>
                                {count > 0 && (
                                    <span className="absolute -top-2 -right-2 text-xs text-red-300 bg-black rounded-full w-5 h-5 flex items-center justify-center">
                                        {count}
                                    </span>
                                )}
                            </div>
                        )
                    }
                    )}
                </div>
            ))}
        </div>
    );
}
