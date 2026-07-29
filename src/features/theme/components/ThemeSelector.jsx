
import { useState } from "react";

import {
    FaPalette,
    FaCheck,
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";


const ThemeSelector = () => {

    const {
        currentTheme,
        setCurrentTheme,
        themes,
        setPreviewTheme,
        theme
    } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const availableThemes = Object.keys(themes);

    const handleThemeSelect = (themeName) => {
        setCurrentTheme(themeName);
        setPreviewTheme?.(null);
        setIsOpen(false);
    };



    return (

        <div className="relative">
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(prev => !prev)}
                className={`
                    flex items-center gap-2
                    px-4 py-2
                    rounded-lg
                    transition-all duration-300
                    hover:scale-105
                    ${theme.button}
                `}
            >
                <FaPalette className={theme.icon} />

                <span
                    className={`
                        text-sm font-medium
                        ${theme.text}
                    `}
                >
                    {theme.name}
                </span>

                {
                    isOpen
                        ? <FaChevronUp size={12} />
                        : <FaChevronDown size={12} />
                }
            </button>



            {isOpen && (

                <div
                    className={`
                        absolute
                        top-full right-0
                        mt-2
                        z-50
                        w-48
                        rounded-lg
                        shadow-xl
                        border
                        backdrop-blur-sm
                        ${theme.panel}
                        ${theme.border}
                    `}
                >

                    {availableThemes.map(themeName => {

                        const itemTheme = themes[themeName];

                        const selected =
                            currentTheme === themeName;


                        return (
                            <button
                                key={themeName}
                                type="button"

                                role="option"

                                aria-selected={
                                    selected
                                }
                                onClick={() =>
                                    handleThemeSelect(themeName)
                                }
                                onMouseEnter={() =>
                                    setPreviewTheme(themeName)
                                }
                                onMouseLeave={() =>
                                    setPreviewTheme(null)
                                }
                                className={`
                                    flex justify-between items-center
                                    w-full
                                    px-3 py-2
                                    rounded-md
 transition-all
                                    ${selected
                                        ? itemTheme.button
                                        : "hover:bg-white/5"
                                    }
                                `}
                            >

                                <div className="flex items-center gap-3">

                                    <div
                                        className={`
                                            w-4 h-4
                                            rounded-full
                                            bg-linear-to-r
                                            ${itemTheme.primary}
                                        `}
                                    />

                                    <span className={theme.text}>
                                        {itemTheme.name}
                                    </span>

                                </div>


                                {
                                    selected &&
                                    <FaCheck
                                        size={12}
                                        className={theme.icon}
                                    />
                                }

                            </button>
                        );
                    })}

                </div>

            )}


        </div>

    );
};


export default ThemeSelector;