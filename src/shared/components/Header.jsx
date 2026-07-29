import { useCallback } from "react";

import desktopLogo from "../../assets/logo-large.svg";
import mobileLogo from "../../assets/logo-small.svg";

import {
    FaVolumeUp,
    FaVolumeMute,
    FaChartLine,
    FaMoon, FaKeyboard,
    FaSun
} from "react-icons/fa";

import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import ThemeSelector from "../../features/theme/components/ThemeSelector";
import KeyboardShortcuts from "./KeyboardShortcuts";
import { useTheme } from "../../features/theme/hooks/useTheme";
import { useSoundSettings } from "../../features/sound/hooks/useSoundSettings";


const Header = ({
    stats,
    controls,
    openHistory
}) => {


    const {
        best = 0,
        wpm = 0
    } = stats;


    const {
       
        colorMode,
        setColorMode
    } = controls;

    const {
        soundOn,
        toggleSound
    } = useSoundSettings();

    const {
        theme,
        currentTheme,
        themes,
        setCurrentTheme
    } = useTheme();

    useKeyboardShortcuts({
        toggleSound,
        openHistory,
        setCurrentTheme,
        themes,
        currentTheme,
        setColorMode,
        colorMode
    });

    // const toggleSound = useCallback(() => {
    //     setSoundOn(prev => !prev);
    // }, [setSoundOn]);

    const toggleColorMode = useCallback(() => {
        setColorMode(prev =>
            prev === "dark"
                ? "light"
                : "dark"
        );
    }, [setColorMode]);



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

                        <span className="text-amber-400/80">                            ★                        </span>


                        <div>

                            <p className="text-xs text-gray-500">
                                Best
                            </p>


                            <p className="text-white font-medium">

                                {Math.max(best, wpm).toFixed(0)}

                                <span className="text-gray-400 text-sm ml-1">
                                    WPM
                                </span>
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
                        aria-label="Toggle color mode"
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
                        aria-label="Toggle sound" title="Toggle sound"
                        className={`
                           p-3 
                           rounded-full 
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
                    <KeyboardShortcuts theme={theme} />


                    {/* History Button */}
                    <button
                        onClick={openHistory}
                        aria-label="Open history"
                        className={`
                            p-3
                            rounded-lg
                            border-2
                            ${theme.border}
                             bg-black/60  hover:${theme.border.replace('/50', '')} ${theme.text} group-hover:${theme.accent} transition-all duration-300 overflow-hidden
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