import { HiOutlineTrendingUp } from "react-icons/hi";
import { MdOutlineKeyboard } from "react-icons/md";

const keyboardRows = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
    ["space"]

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
    
    const getKeyWidth = (key) => {
        switch (key) {
            case "space":
                return "w-80";
            default:
                return "w-12";
        }
    };

    return (
        <div className="mt-6 flex-col gap-2 items-center hidden xl:flex">
            <div className="flex items-center justify-between mb-4 w-full">
                <div className="flex items-center gap-2">
                    <MdOutlineKeyboard className="w-5 h-5 text-gray-400" />
                    <h3 className="text-lg font-semibold text-white">Key Heatmap</h3>
                </div>
                <HiOutlineTrendingUp className="w-4 h-4 text-gray-500" />
            </div>
            {keyboardRows.map((row, i) => (
                <div key={i} className="flex gap-1">
                    {row.map((key) => {
                        const count = keyErrors[key] || 0;
                        return (
                            <div
                                key={key}
                                title={`Errors: ${count}`}
                                style={{ backgroundColor: getColor(key) }}
                                className={`${getKeyWidth(key)} shrink-0 h-14 rounded-md flex items-center justify-center text-white font-bold relative`}
                            >
                                <span>{key === "space" ? "Space" : key.toUpperCase()}</span>
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
