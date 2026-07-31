import { useEffect, useCallback, useRef } from "react";

export const useKeyboardShortcuts = ({
    toggleSound,
    openHistory,
    setCurrentTheme,
    themes,
    currentTheme,
    setColorMode,
    colorMode,
    toggleHeatmap
}) => {

    const callbacksRef = useRef({});

    useEffect(() => {
        callbacksRef.current = {
            toggleSound,
            openHistory,
            setCurrentTheme,
            themes,
            currentTheme,
            setColorMode,
            colorMode,
            toggleHeatmap
        };
    }, [
        toggleSound,
        openHistory,
        setCurrentTheme,
        themes,
        currentTheme,
        setColorMode,
        colorMode,
        toggleHeatmap
    ]);


    const cycleTheme = useCallback(() => {
        const {
            themes,
            currentTheme,
            setCurrentTheme
        } = callbacksRef.current;

        const themeList = Object.keys(themes);

        const currentIndex = themeList.indexOf(currentTheme);

        setCurrentTheme(
            themeList[(currentIndex + 1) % themeList.length]
        );

    }, []);


    useEffect(() => {

        const handler = (e) => {

            if (!e.ctrlKey) return;

            const key = e.key.toLowerCase();


            switch (key) {

                case "m":
                    e.preventDefault();
                    callbacksRef.current.toggleSound();
                    break;


                case "h":
                    e.preventDefault();
                    callbacksRef.current.openHistory();
                    break;


                case "c":
                    e.preventDefault();
                    cycleTheme();
                    break;


                case "d":
                    e.preventDefault();

                    callbacksRef.current.setColorMode(
                        callbacksRef.current.colorMode === "dark"
                            ? "light"
                            : "dark"
                    );

                    break;


                case "k":
                    e.preventDefault();
                    callbacksRef.current.toggleHeatmap();
                    break;


                default:
                    break;
            }
        };


        window.addEventListener(
            "keydown",
            handler
        );


        return () => {
            window.removeEventListener(
                "keydown",
                handler
            );
        };


    }, [cycleTheme]);

};