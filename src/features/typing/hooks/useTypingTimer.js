import { useEffect, useState } from "react";

export const useTypingTimer = (
    started,
    finished,
    mode,
    startTime,
    setFinished,
    duration = 60
) => {
    // Initial value only (used when the hook is first mounted)
    const [timeLeft, setTimeLeft] = useState(
        mode === "timed" ? duration : 0
    );

    useEffect(() => {
        if (!started || finished) return;

        const interval = setInterval(() => {
            setTimeLeft((t) => {
                if (mode === "timed") {
                    if (t <= 1) {
                        setFinished(true);
                        return 0;
                    }
                    return t - 1;
                }

                // Passage mode: count up
                return t + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [started, finished, mode, setFinished]);



    return [timeLeft, setTimeLeft];
};