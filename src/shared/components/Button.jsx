import clsx from "clsx";
import { useTheme } from "../../features/theme/hooks/useTheme";

export default function Button({
    children,
    variant = "icon",
    active = false,
    rounded = "lg",
    size = "md",
    border = true,
    shadow = false,
    className = "",
    ...props
}) {
    const { theme } = useTheme();

    const sizes = {
        sm: {
            icon: "p-2",
            button: "px-4 py-2",
        },
        md: {
            icon: "p-3",
            button: "px-6 py-3",
        },
        lg: {
            icon: "p-4",
            button: "px-8 py-4",
        },
    };

    return (
        <button
            {...props}
            className={clsx(
                "transition-all duration-300",
                "cursor-pointer",
                "hover:scale-105",
                "focus:outline-none",

                rounded === "full" ? "rounded-full" : "rounded-lg",

                border && theme.border,
                shadow && "shadow-lg shadow-black/40",

                variant === "icon"
                    ? [
                        "flex items-center justify-center",
                        sizes[size].icon,
                    ]
                    : [
                        "font-semibold",
                        sizes[size].button,
                    ],

                variant === "primary"
                    ? [
                        theme.button,
                        theme.text,
                        theme.focus,
                        theme.shadow,
                    ]
                    : active
                        ? [
                            theme.accent,
                            theme.shadow,
                        ]
                        : [
                            "bg-white/5",
                            theme.text,
                        ],

                className
            )}
        >
            {children}
        </button>
    );
}