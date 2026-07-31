import { HiOutlineTrendingUp } from "react-icons/hi";
import { MdOutlineKeyboard } from "react-icons/md";
import { useTheme } from "../../theme/hooks/useTheme";

const keyboardRows = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
    ["space"]

];

export default function KeyboardHeatmap({ keyErrors }) {

    const {
        theme, colorMode
    } = useTheme();

    const maxError = Math.max(...Object.values(keyErrors), 1);

    const getKeyStyle = (key) => {
        const errors = keyErrors[key] || 0;
        const intensity = errors / maxError;

        // Base themed key
        const style = {
            backgroundColor: theme.keyBg,
            border: `1px solid ${theme.keyBorder}`,
                     boxShadow: `0 0 8px ${theme.keyShadow}`,
        };

        // No errors
        if (errors === 0) {
            return style;
        }

        // Heatmap overlay
        style.backgroundColor = `rgba(239, 68, 68, ${0.15 + intensity * 0.65})`;
        style.border = `1px solid rgb(${255}, ${Math.round(
            180 * (1 - intensity)
        )}, ${Math.round(180 * (1 - intensity))})`;

        style.boxShadow = `
        0 0 8px ${theme.keyShadow},
        0 0 ${10 + intensity * 20}px rgba(239,68,68,${0.4 + intensity * 0.5})
    `;

        return style;
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
            
            {keyboardRows.map((row, i) => (
                <div key={i} className="flex gap-1">
                    {row.map((key) => {
                        const count = keyErrors[key] || 0;
                        return (
                            <div
                                key={key}
                                title={`Errors: ${count}`}
                                style={getKeyStyle(key)}
                                className={`${getKeyWidth(key)} elevation-1 shrink-0 h-14 rounded-md flex items-center justify-center  relative  ${colorMode === "dark"
                                    ? "text-white"
                                    : `${theme.text}`
                                    }
                                        ${theme.shadow}`}
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
