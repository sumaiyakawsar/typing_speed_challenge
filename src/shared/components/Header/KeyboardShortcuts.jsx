import { useTheme } from "../../../features/theme/hooks/useTheme";
import { CgShortcut } from "react-icons/cg";
import Button from "../Button";

const shortcuts = [
    ["Ctrl + M", "Toggle Sound"],
    ["Ctrl + H", "Open History"],
    ["Ctrl + C", "Cycle Theme"],
    ["Ctrl + D", "Toggle Color Mode"],
    ["Ctrl + K", " Toggle Keyboard Heatmap"]
];

const KeyboardShortcuts = ({
    open,
    setOpen
}) => {
        const { theme } = useTheme();

    return (
        <div className="relative">

            <Button
                type="button"
                variant="icon"
                shadow
                active={open}
                onClick={() => setOpen(prev => !prev)}
                aria-label="Keyboard shortcuts"
                title="Keyboard shortcuts"
            >
                <CgShortcut size={18} />
            </Button>
            {open && (
                <>
                    {/* Close when clicking outside */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setOpen(false)}
                    />

                    <div
                        className={`
                            absolute  right-0
                            mt-2  w-72 z-99
                            rounded-2xl border ${theme.border}
                            bg-white/10
                            backdrop-blur-xl
                            shadow-2xl
                            overflow-hidden
                        `}
                    >

                        <div className="p-2">
                            {shortcuts.map(([key, description]) => (
                                <div
                                    key={key}
                                    className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-white/5"
                                >
                                    <span className="text-sm text-gray-300">
                                        {description}
                                    </span>

                                    <kbd className="px-2 py-1 rounded-md bg-white/10 border border-white/20 font-mono text-xs">
                                        {key}
                                    </kbd>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default KeyboardShortcuts;