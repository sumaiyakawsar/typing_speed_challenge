import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { useTheme } from "../../features/theme/hooks/useTheme";

export default function Footer() {

    const socials = [
        {
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/sumaiyakawsar/",
            label: "linkedin"
        },
        {
            icon: <FaGithub />,
            href: "https://github.com/sumaiyakawsar",
            label: "github"
        },
        {
            icon: <FaInstagram />,
            href: "https://www.instagram.com/devsume/",
            label: "instagram"
        },
    ];

    const { theme } = useTheme();


    return (
        <footer className="w-full z-20">

            <div
                className={`
                    mx-auto container
                    px-6 py-3
                    flex items-center justify-between
                    text-xs
                    backdrop-blur-md
                    border-t
                    ${theme.border}
                    ${theme.text}
                `}
            >

                {/* Left */}
                <div className="text-center">

                    <span className="text-gray-400">
                        Challenge by{" "}
                    </span>

                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${theme.accent} hover:underline`}
                    >
                        Frontend Mentor
                    </a>

                    <span className="text-gray-400">
                        {" "}Coded by{" "}
                    </span>

                    <a
                        href="https://github.com/sumaiyakawsar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${theme.accent} hover:underline`}
                    >
                        Sumaiya Kawsar
                    </a>

                </div>

                {/* Socials */}
                <div className="flex items-center gap-3">
                    {socials.map(({ icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className={`
                                text-gray-400
                                transition-all
                                duration-200
                                hover:scale-110
                                ${theme.accent}
                            `}
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}