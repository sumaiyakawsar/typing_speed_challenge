import { useEffect, useMemo, useState, useCallback } from "react";
import { SoundContext } from "../../features/sound/context/SoundContext";

const STORAGE_KEY = "typing-sound";

export function SoundProvider({ children }) {
    const [soundOn, setSoundOn] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        return saved === null ? true : saved === "true";
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, soundOn);
    }, [soundOn]);

    const toggleSound = useCallback(() => {
        setSoundOn((prev) => !prev);
    }, []);


    const value = useMemo(() => ({ soundOn, setSoundOn, toggleSound }),
        [soundOn, toggleSound]
    );

    return (
        <SoundContext.Provider value={value}>
            {children}
        </SoundContext.Provider>
    );
}