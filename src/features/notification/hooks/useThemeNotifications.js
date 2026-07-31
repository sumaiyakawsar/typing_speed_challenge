import { useEffect, useRef } from "react";
import { useTheme } from "../../theme/hooks/useTheme";
import { notifications } from "../notifications";

export function useThemeNotifications() {

    const {
        colorMode,
        currentTheme,
        themes
    } = useTheme();


    const previousColorMode = useRef(colorMode);
    const previousTheme = useRef(currentTheme);


    // Color mode notification
    useEffect(() => {

        if (previousColorMode.current === colorMode) {
            return;
        }

        if (colorMode === "dark") {
            notifications.darkMode();
        } else {
            notifications.lightMode();
        }

        previousColorMode.current = colorMode;

    }, [colorMode]);


    // Theme notification
    useEffect(() => {

        if (previousTheme.current === currentTheme) {
            return;
        }

        const themeName =
            themes[currentTheme]?.name ?? currentTheme;


        notifications.themeChanged(themeName);


        previousTheme.current = currentTheme;

    }, [currentTheme, themes]);

}