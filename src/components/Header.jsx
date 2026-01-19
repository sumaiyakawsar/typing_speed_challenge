import { useEffect } from "react";
import desktopLogo from "../assets/logo-large.svg";
import mobileLogo from "../assets/logo-small.svg";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const Header = ({ best, wpm, openHistory, soundOn, setSoundOn }) => {
    useEffect(() => {
        const handler = (e) => {
            const key = e.key.toLowerCase();

            // Ctrl + M → Mute
            if (e.ctrlKey && key === "m") {
                e.preventDefault();
                setSoundOn(s => !s);
            }

            // Ctrl + H → Open History
            if (e.ctrlKey && key === "h") {
                e.preventDefault();
                openHistory();
            }
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [setSoundOn, openHistory]);


    return (

        <header className="flex justify-between items-center py-5 px-6 bg-linear-to-r from-gray-900/50 to-black/50 border-b border-cyan-500/20">
            <div className="flex items-center gap-4">

                <div className="relative group">
                    <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                    <div className="relative">
                        <img src={desktopLogo} alt="logo" className="hidden md:block h-8" />
                        <img src={mobileLogo} alt="mobile logo" className="block md:hidden h-8" />
                    </div>
                </div>

                {/* Divider */}
                <div className="h-6 w-px bg-white/10 hidden md:block"></div>

                {/*  WPM */}
                <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-white/3 rounded-lg">
                    <span className="text-amber-400/80 text-sm">★</span>
                    <div>
                        <p className="text-xs text-gray-500">Best</p>
                        <p className="font-medium text-white">
                            {Math.max(best, wpm).toFixed(0)} <span className="text-gray-400 text-sm">WPM</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* Sound toggle */}
                <button
                    onClick={() => setSoundOn(!soundOn)}
                    className={`relative p-3 rounded-full transition-all duration-300
                        ${soundOn
                            ? "text-green-400 shadow-lg shadow-green-500/20"
                            : "text-gray-500 hover:text-gray-300"
                        }`}
                >
                    <div className={`absolute inset-0 rounded-full ${soundOn ? 'bg-green-500/10 animate-ping' : ''}`}></div>
                    {soundOn ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
                </button>

                {/* History Button */}
                <button
                    onClick={openHistory}
                    className="  p-3 font-mono text-sm tracking-wider rounded-lg bg-black/60 border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-300 group-hover:text-cyan-200 transition-all duration-300 overflow-hidden"
                >
                    <FaChartLine size={16} />

                </button>

            </div>
        </header>
    );

}


export default Header;
