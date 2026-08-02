import desktopLogo from "../../../assets/logo-large.svg";
import mobileLogo from "../../../assets/logo-small.svg";

import ThemeSelector from "../../../features/theme/components/ThemeSelector";
import KeyboardShortcuts from "./KeyboardShortcuts";

import { FaVolumeUp, FaVolumeMute, FaChartLine, FaStar, FaMoon, FaKeyboard, FaSun} from "react-icons/fa";
import { MdOutlineKeyboard } from "react-icons/md";
import { useKeyboardShortcuts } from "../../hooks/useKeyboardShortcuts";
import { useTheme } from "../../../features/theme/hooks/useTheme";
import { useSoundSettings } from "../../../features/sound/hooks/useSoundSettings";
import { useThemeNotifications } from "../../../features/notification/hooks/useThemeNotifications";
import { useSoundNotifications } from "../../../features/notification/hooks/useSoundNotifications";


const Header = ({ stats, openHistory, toggleHeatmap, showHeatmap }) => {
    const { best = 0, wpm = 0 } = stats;
    const { soundOn, toggleSound } = useSoundSettings();

    useSoundNotifications();
    useThemeNotifications();

    const {
        theme, currentTheme,
        themes, setCurrentTheme,
        colorMode, setColorMode
    } = useTheme();

    useKeyboardShortcuts({
        toggleSound,
        openHistory,
        themes, currentTheme, setCurrentTheme,
        colorMode, setColorMode,
        toggleHeatmap
    });


    const toggleColorMode = () => {
        setColorMode(prev =>
            prev === "dark"
                ? "light"
                : "dark"
        );
    };

    return (
        <header
            className={`
                py-5 px-6
                bg-linear-to-r from-gray-900/50 to-black/50
                border-b
                ${theme.border}
            `}
        >

            <div className="container mx-auto flex justify-between items-center">


                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <div
                            className={`
                                absolute -inset-1
                                bg-linear-to-r
                                ${theme.primary}
                                rounded-lg
                                blur
                                opacity-20 group-hover:opacity-30 transition duration-1000
                            `}
                        />


                        <div className="relative">

                            <img
                                src={desktopLogo}
                                alt="logo"
                                className="hidden md:block h-8"
                            />


                            <img
                                src={mobileLogo}
                                alt="mobile logo"
                                className="block md:hidden h-8"
                            />

                        </div>

                    </div>


                    {/* Divider */}
                    <div className="hidden md:block h-6 w-px bg-white/10" />


                    {/* WPM */}
                    <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg">

                        <span className="text-amber-400/80"><FaStar /></span>

                        <div>
                            <p className="text-xs text-gray-500"> Best   </p>
                            <p className="text-white font-medium">
                                {Math.max(best, wpm).toFixed(0)}
                                <span className="text-gray-400 text-sm ml-1"> WPM </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3">
                    {/* Theme Selector */}


                    <ThemeSelector />

                    <button type="button"
                        onClick={toggleColorMode}
                        aria-label={
                            colorMode === "dark"
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                        title="Toggle color mode"
                        className={`
                            p-3
                            rounded-full  transition-all 
                            ${theme.border}
                        `}
                    >
                        {
                            colorMode === "dark"
                                ? <FaSun size={18} />
                                : <FaMoon size={18} />
                        }
                    </button>

                    {/* Sound toggle */}
                    <button type="button"
                        onClick={toggleSound}
                        aria-label={
                            soundOn
                                ? "Disable typing sounds"
                                : "Enable typing sounds"
                        }

                        title="Toggle sound"
                        className={`
                           p-2
                           rounded-lg 
                            ${soundOn
                                ? `${theme.accent} shadow-lg ${theme.shadow}`
                                : "text-gray-500  hover:text-gray-300"
                            }`}
                    >
                        {
                            soundOn
                                ? <FaVolumeUp size={18} />
                                : <FaVolumeMute size={18} />
                        }
                    </button>


                    {/* Keyboard Heatmap Toggle */}
                    <button
                        type="button"
                        onClick={toggleHeatmap}
                        aria-label="Toggle keyboard heatmap"
                        title="Toggle keyboard heatmap"
                        className={`hidden xl:flex items-center justify-center p-2 rounded-lg transition-all duration-300 overflow-hidden 
                              ${showHeatmap
                                ? `${theme.accent} shadow-lg ${theme.shadow}`
                                : "text-gray-500  hover:text-gray-300"
                            } `}
                    >
                        <FaKeyboard size={18} />
                    </button>

                    <KeyboardShortcuts />
                    {/* History Button */}
                    <button
                        onClick={openHistory}
                        aria-label="Open history" 
                        title="Open history"
                        className={`
                            p-2 rounded-lg border-2 transition-all duration-300 overflow-hidden
                            ${theme.border} ${theme.text}   
                        `}
                    >
                        <FaChartLine size={16} />
                    </button>
                </div>
            </div>
        </header>
    );
};


export default Header;