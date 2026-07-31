import { useTheme } from "../../theme/hooks/useTheme";

import StatsDesktop from "./StatsDesktop";
import StatsTablet from "./StatsTablet";
import StatsMobile from "./StatsMobile";


const Stats = ({
    wpm, accuracy, timeLeft,
    difficulty, setDifficulty,
    mode, setMode,
    duration, setDuration,
    category, setCategory,
    restartTest
}) => {
    const { theme } = useTheme();

    const props = {
        wpm, accuracy, timeLeft,
        difficulty, setDifficulty,
        mode, setMode,
        duration, setDuration,
        category, setCategory,
        restartTest,
        theme
    };


    return (
        <div className="w-full">
            <div className="container mx-auto">
                {/* Desktop */}
                <div className="hidden lg:block">
                    <StatsDesktop {...props} />
                </div>

                {/* Tablet */}
                <div className="hidden md:block lg:hidden">
                    <StatsTablet {...props} />
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                    <StatsMobile {...props} />
                </div>
            </div>
        </div>
    );
};


export default Stats;