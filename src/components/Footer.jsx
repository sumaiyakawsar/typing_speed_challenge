import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    const socials = [
        {
            icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sumaiyakawsar/", label: "linkedin"
        },
        { icon: <FaGithub />, href: "https://github.com/sumaiyakawsar", label: "github" },
        { icon: <FaInstagram />, href: "https://www.instagram.com/devsume/", label: "instagram" },
    ];

    return (
        <footer className="fixed bottom-0 left-0 w-full z-20">
            <div
                className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between
                text-xs text-gray-400   backdrop-blur-md border-t border-white/5"
            >
                {/* Left: Shortcuts */}
                <div className="flex items-center gap-4">
                    <span className="opacity-70">Shortcuts:</span>

                    {/* Ctrl + M */}
                    <div className="flex items-center gap-1">
                        <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-gray-200">
                            Ctrl
                        </kbd>
                        <span>+</span>
                        <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-gray-200">
                            M
                        </kbd>
                        <span className="opacity-70">Mute</span>
                    </div>

                    {/* Divider */}
                    <span className="opacity-40">•</span>

                    {/* Ctrl + H */}
                    <div className="flex items-center gap-1">
                        <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-gray-200">
                            Ctrl
                        </kbd>
                        <span>+</span>
                        <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-gray-200">
                            H
                        </kbd>
                        <span className="opacity-70">History</span>
                    </div>
                </div>



                <div className="flex items-center gap-2">
                    {socials.map(({ icon, href, label }) => (
                        <a key={label} href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                            aria-label={label}>
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
