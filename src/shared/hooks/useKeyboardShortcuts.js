import { useEffect, useCallback } from "react";

export const useKeyboardShortcuts = ({
    toggleSound,
    openHistory,
    setCurrentTheme,
    themes,
    currentTheme,
    setColorMode,
    colorMode
}) => {
    const cycleTheme = useCallback(() => {
        const themeList = Object.keys(themes);
        const currentIndex = themeList.indexOf(currentTheme);

        setCurrentTheme(
            themeList[(currentIndex + 1) % themeList.length]
        );

    }, [themes, currentTheme, setCurrentTheme]);

    useEffect(() => {
        const handler = (e) => {

            if (!e.ctrlKey) return;

            const key = e.key.toLowerCase();

            switch (key) {
                // Ctrl + M → Mute
                case "m":
                    e.preventDefault();
                    toggleSound();
                    break;

                // Ctrl + H → Open History
                case "h":
                    e.preventDefault();
                    openHistory();
                    break;

                // Ctrl + c → Change Theme
                case "c":
                    e.preventDefault();
                    cycleTheme();
                    break;
                    
                // Ctrl + D → Dark/light
                case "d":
                    e.preventDefault();
                    setColorMode(
                        colorMode === "dark"
                            ? "light"
                            : "dark"
                    );
                    break;

                default:
                    break;
            }
        };

        window.addEventListener("keydown", handler);

        return () =>
            window.removeEventListener("keydown", handler);

    }, [openHistory, setCurrentTheme, themes, currentTheme, setColorMode, colorMode, cycleTheme, toggleSound]);
};