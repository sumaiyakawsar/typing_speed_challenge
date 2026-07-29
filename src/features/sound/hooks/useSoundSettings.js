import { useContext } from "react";

import { SoundContext } from "../context/SoundContext";

export function useSoundSettings() {
    const context = useContext(SoundContext);

    if (!context) {
        throw new Error(
            "useSoundSettings must be used within SoundProvider"
        );
    }

    return context;
}