import { useMemo, useState, useEffect } from "react";

import { ThemeContext } from "../../features/theme/context/ThemeContext";
import { themes } from "../../features/theme/config/themes";

import { useColorMode } from "../../features/theme/hooks/useColorMode";


export const ThemeProvider = ({ children }) => {

    const [currentTheme, setCurrentTheme] = useState(() => {
        const saved = localStorage.getItem("typing-theme");

        return saved && themes[saved]
            ? saved
            : "cyberpunk";
    });

    const [previewTheme, setPreviewTheme] = useState(null);

    const { colorMode, setColorMode } = useColorMode();


    const theme = useMemo(() => {

        const selected = themes[previewTheme ?? currentTheme] ?? themes.cyberpunk;
        return selected[colorMode];

    }, [currentTheme, previewTheme, colorMode]);



    useEffect(() => {
        localStorage.setItem("typing-theme", currentTheme);
    }, [currentTheme]);



    const value = useMemo(() => ({
        currentTheme, setCurrentTheme,

        previewTheme, setPreviewTheme,

        theme, themes,

        colorMode, setColorMode

    }), [currentTheme, previewTheme, theme, colorMode, setColorMode]);


    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};