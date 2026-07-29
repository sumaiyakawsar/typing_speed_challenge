import { useEffect, useState } from "react";


export function useColorMode() {

    const [colorMode, setColorMode] = useState(() => {
        return localStorage.getItem("typing-mode") || "dark";
    });


    useEffect(() => {

        document.documentElement.setAttribute(
            "data-mode",
            colorMode
        );

        localStorage.setItem(
            "typing-mode",
            colorMode
        );

    }, [colorMode]);


    return {
        colorMode,
        setColorMode
    };
}