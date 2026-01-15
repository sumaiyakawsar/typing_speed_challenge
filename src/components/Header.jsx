

import desktopLogo from "../assets/logo-large.svg";
import mobileLogo from "../assets/logo-small.svg";

const Header = ({ best, wpm }) => (
    <header className="flex justify-between items-center py-6">
        <div>
            {/* Desktop logo */}
            <img src={desktopLogo} alt="logo" className="hidden md:block" />

            {/* Mobile logo */}
            <img src={mobileLogo} alt="mobile logo" className="block md:hidden" />
        </div>

        <div className="text-sm text-gray-300 flex items-center gap-2">
            🏆
            {/* Desktop text */}
            <span className="hidden md:inline">Personal Best:</span>

            {/* Mobile text */}
            <span className="inline md:hidden">Best:</span>

            <span className="font-semibold">
                {Math.max(best, wpm).toFixed(0)} WPM
            </span>
        </div>
    </header>
);

export default Header;
