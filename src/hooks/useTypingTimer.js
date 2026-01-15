import { useEffect, useState } from "react";

export const useTypingTimer = (started, finished, mode, startTime, setFinished, duration = 60) => {
    const [timeLeft, setTimeLeft] = useState(mode === "timed" ? duration : 0);

    useEffect(() => {
        if (!started || finished) return;

        const interval = setInterval(() => {
            setTimeLeft((t) => {
                if (mode === "timed") {
                    if (t <= 1) {
                        setFinished(true); // important!
                        return 0;
                    }
                    return t - 1;
                }
                return t + 1; // passage mode
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [started, finished, mode]);

    // Reset timer when mode changes
    useEffect(() => {
        setTimeLeft(mode === "timed" ? duration : 0);
    }, [mode]);

    return [timeLeft, setTimeLeft];
};
