export const themes = {
    // 🔴 Red
    fire: {
        name: "Fire",

        dark: {
            primary: "from-red-500 to-yellow-500",
            secondary: "from-yellow-500 to-orange-500",
            bg: "from-[#2c0b0e] to-[#1a0407]",
            panel: "bg-red-950/80 backdrop-blur-xl",

            text: "text-red-300",
            border: "border-red-500/20",
            accent: "text-red-400",
            textSecondary: "text-white",

            button: "bg-red-500/20 hover:bg-red-500/30 border-red-400/50",
            shadow: "shadow-red-500/20",
            icon: "text-red-300",

            keyBg: "rgba(239,68,68,0.08)",
            keyBorder: "#fb923c",
            keyShadow: "rgba(251,146,60,0.35)",
            keyText: "#fee2e2",

            glow: "from-red-500 to-yellow-500",
            highlight: "bg-red-500/10",
            caretColor: "bg-red-400/30",
            focus: "focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        },

        light: {
            primary: "from-red-500 to-orange-500",
            secondary: "from-orange-500 to-yellow-500",
            bg: "from-red-50 to-orange-100",
            panel: "bg-white/80 backdrop-blur-xl",

            text: "text-red-700",
            border: "border-red-300/60",
            accent: "text-red-600",
            textSecondary: "text-red-100",

            button: "bg-red-100 hover:bg-red-200 border-red-300",
            shadow: "shadow-red-500/20",
            icon: "text-red-600",

            keyBg: "rgba(239,68,68,0.12)",
            keyBorder: "#ef4444",
            keyShadow: "rgba(239,68,68,0.25)",
            keyText: "#7f1d1d",

            glow: "from-red-400 to-orange-400",
            highlight: "bg-red-100",
            caretColor: "bg-red-400/30",
            focus: "focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white"
        }
    },

    // 🟠 Orange
    sunset: {
        name: "Sunset",

        dark: {
            primary: "from-orange-500 to-pink-500",
            secondary: "from-pink-500 to-red-500",

            bg: "from-gray-900 to-[#1a0b2e]",
            panel: "bg-orange-950/70 backdrop-blur-xl",

            text: "text-orange-300",
            border: "border-orange-500/20",
            accent: "text-orange-400",
            textSecondary: "text-white",

            button: "bg-orange-500/20 hover:bg-orange-500/30 border-orange-400/50",
            shadow: "shadow-orange-500/20",
            icon: "text-orange-300",

            keyBg: "rgba(249,115,22,0.08)",
            keyBorder: "#fb923c",
            keyShadow: "rgba(251,146,60,0.35)",
            keyText: "#ffedd5",

            glow: "from-orange-500 to-pink-500",
            highlight: "bg-orange-500/10",
            caretColor: "bg-orange-400/30",
            focus:
                "focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        },

        light: {
            primary: "from-orange-500 to-pink-500",
            secondary: "from-pink-500 to-red-500",

            bg: "from-white to-orange-50",
            panel: "bg-white/80 backdrop-blur-xl",

            text: "text-orange-700",
            border: "border-orange-300",
            accent: "text-orange-600",
            textSecondary: "text-orange-100",

            button: "bg-orange-100 hover:bg-orange-200 border-orange-400",
            shadow: "shadow-orange-300/30",
            icon: "text-orange-700",

            keyBg: "rgba(249,115,22,0.08)",
            keyBorder: "#ea580c",
            keyShadow: "rgba(234,88,12,0.25)",
            keyText: "#7c2d12",

            glow: "from-orange-400 to-pink-400",
            highlight: "bg-orange-100",
            caretColor: "bg-orange-400/30",
            focus:
                "focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white"
        }
    },

    // 🟡 Yellow/Pink
    neon: {
        name: "Neon",

        dark: {
            primary: "from-pink-500 to-yellow-500",
            secondary: "from-yellow-500 to-pink-500",
            bg: "from-black to-gray-900",
            panel: "bg-black/80 backdrop-blur-xl",

            text: "text-pink-300",
            border: "border-pink-500/40",
            accent: "text-pink-400", textSecondary: "text-white",

            button: "bg-pink-500/20 hover:bg-pink-500/30 border-pink-400/50",
            shadow: "shadow-pink-500/40",
            icon: "text-pink-300",

            keyBg: "rgba(236,72,153,0.08)",
            keyBorder: "#f472b6",
            keyShadow: "rgba(244,114,182,0.4)",
            keyText: "#fce7f3",

            glow: "from-pink-500 to-yellow-500",
            highlight: "bg-pink-500/10",
            caretColor: "bg-pink-400/30",
            focus: "focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        },

        light: {
            primary: "from-pink-400 to-yellow-400",
            secondary: "from-yellow-400 to-pink-400",
            bg: "from-pink-50 to-yellow-50",
            panel: "bg-white/80 backdrop-blur-xl",

            text: "text-pink-700",
            border: "border-pink-300/60",
            accent: "text-pink-600", textSecondary: "text-pink-100",

            button: "bg-pink-100 hover:bg-pink-200 border-pink-300",
            shadow: "shadow-pink-400/30",
            icon: "text-pink-600",

            keyBg: "rgba(236,72,153,0.12)",
            keyBorder: "#ec4899",
            keyShadow: "rgba(236,72,153,0.25)",
            keyText: "#831843",

            glow: "from-pink-400 to-yellow-400",
            highlight: "bg-pink-100",
            caretColor: "bg-pink-400/30",
            focus: "focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-white"
        }
    },

    // 🟢 Green
    matrix: {
        name: "Matrix",

        dark: {
            primary: "from-green-500 to-emerald-500",
            secondary: "from-emerald-500 to-green-300",

            bg: "from-black to-gray-900",
            panel: "bg-black/80 backdrop-blur-xl",

            text: "text-green-400",
            border: "border-green-500/20",
            accent: "text-green-400",
            textSecondary: "text-white",

            button: "bg-green-500/10 hover:bg-green-500/20 border-green-400/50",
            shadow: "shadow-green-500/20",
            icon: "text-green-400",

            keyBg: "rgba(34,197,94,0.08)",
            keyBorder: "#4ade80",
            keyShadow: "rgba(74,222,128,0.35)",
            keyText: "#dcfce7",

            glow: "from-green-500 to-emerald-500",
            highlight: "bg-green-500/10",
            caretColor: "bg-green-400/30",
            focus:
                "focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        },

        light: {
            primary: "from-green-500 to-emerald-500",
            secondary: "from-emerald-500 to-green-300",

            bg: "from-white to-green-50",
            panel: "bg-white/80 backdrop-blur-xl",

            text: "text-green-700",
            border: "border-green-300",
            accent: "text-green-600",
            textSecondary: "text-green-100",
            button: "bg-green-100 hover:bg-green-200 border-green-400",
            shadow: "shadow-green-300/30",
            icon: "text-green-700",

            keyBg: "rgba(34,197,94,0.08)",
            keyBorder: "#16a34a",
            keyShadow: "rgba(22,163,74,0.25)",
            keyText: "#14532d",

            glow: "from-green-400 to-emerald-400",
            highlight: "bg-green-100",
            caretColor: "bg-green-400/30",
            focus:
                "focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white"
        }
    },

    // 🟢🩵 Green → Teal
    aurora: {
        name: "Aurora",

        dark: {
            primary: "from-green-400 to-teal-500",
            secondary: "from-teal-500 to-blue-400",
            bg: "from-[#0a1f1c] to-[#0d2b26]",
            panel: "bg-teal-950/80 backdrop-blur-xl",

            text: "text-teal-300",
            border: "border-teal-500/20",
            accent: "text-teal-400", textSecondary: "text-white",

            button: "bg-teal-500/20 hover:bg-teal-500/30 border-teal-400/50",
            shadow: "shadow-teal-500/20",
            icon: "text-teal-300",

            keyBg: "rgba(45,212,191,0.08)",
            keyBorder: "#5eead4",
            keyShadow: "rgba(94,234,212,0.35)",
            keyText: "#ccfbf1",

            glow: "from-green-400 to-teal-500",
            highlight: "bg-teal-500/10",
            caretColor: "bg-teal-400/30",
            focus: "focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        },

        light: {
            primary: "from-green-400 to-teal-400",
            secondary: "from-teal-400 to-blue-400",
            bg: "from-green-50 to-teal-100",
            panel: "bg-white/80 backdrop-blur-xl",

            text: "text-teal-700",
            border: "border-teal-300/60",
            accent: "text-teal-600", textSecondary: "text-teal-100",

            button: "bg-teal-100 hover:bg-teal-200 border-teal-300",
            shadow: "shadow-teal-500/20",
            icon: "text-teal-600",

            keyBg: "rgba(45,212,191,0.12)",
            keyBorder: "#14b8a6",
            keyShadow: "rgba(20,184,166,0.25)",
            keyText: "#134e4a",

            glow: "from-green-300 to-teal-400",
            highlight: "bg-teal-100",
            caretColor: "bg-teal-400/30",
            focus: "focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white"
        }
    },

    // 🔵 Blue
    ocean: {
        name: "Ocean",

        dark: {
            primary: "from-blue-500 to-teal-500",
            secondary: "from-teal-500 to-cyan-500",

            bg: "from-[#0a1929] to-[#001e3c]",
            panel: "bg-blue-950/80 backdrop-blur-xl",

            text: "text-blue-300",
            border: "border-blue-500/20",
            accent: "text-blue-400",
            textSecondary: "text-white",

            button: "bg-blue-500/20 hover:bg-blue-500/30 border-blue-400/50",
            shadow: "shadow-blue-500/20",
            icon: "text-blue-300",

            keyBg: "rgba(59,130,246,0.08)",
            keyBorder: "#38bdf8",
            keyShadow: "rgba(56,189,248,0.35)",
            keyText: "#dbeafe",

            glow: "from-blue-500 to-teal-500",
            highlight: "bg-blue-500/10",
            caretColor: "bg-blue-400/30",
            focus:
                "focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        },

        light: {
            primary: "from-blue-500 to-teal-500",
            secondary: "from-teal-500 to-cyan-500",

            bg: "from-white to-blue-50",
            panel: "bg-white/80 backdrop-blur-xl",

            text: "text-blue-700",
            border: "border-blue-300",
            accent: "text-blue-600",
            textSecondary: "text-blue-100",

            button: "bg-blue-100 hover:bg-blue-200 border-blue-400",
            shadow: "shadow-blue-300/30",
            icon: "text-blue-700",

            keyBg: "rgba(59,130,246,0.08)",
            keyBorder: "#2563eb",
            keyShadow: "rgba(37,99,235,0.25)",
            keyText: "#1e3a8a",

            glow: "from-blue-400 to-teal-400",
            highlight: "bg-blue-100",
            caretColor: "bg-blue-400/30",
            focus:
                "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
        }
    },

    // 🩵 Cyan
    arctic: {
        name: "Arctic",

        dark: {
            primary: "from-cyan-300 to-blue-300",
            secondary: "from-blue-300 to-cyan-100",
            bg: "from-[#0c1a2d] to-[#1e3a5f]",
            panel: "bg-black/80 backdrop-blur-xl",

            text: "text-cyan-200",
            border: "border-cyan-300/20",
            accent: "text-cyan-300",
            textSecondary: "text-white",

            button: "bg-cyan-500/20 hover:bg-cyan-500/30 border-cyan-300/50",
            shadow: "shadow-cyan-300/20",
            icon: "text-cyan-200",

            keyBg: "rgba(103,232,249,0.08)",
            keyBorder: "#67e8f9",
            keyShadow: "rgba(103,232,249,0.35)",
            keyText: "#ecfeff",

            glow: "from-cyan-300 to-blue-300",
            highlight: "bg-cyan-500/10",
            caretColor: "bg-cyan-400/30",
            focus: "focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-900"
        },

        light: {
            primary: "from-cyan-400 to-blue-400",
            secondary: "from-blue-400 to-cyan-300",
            bg: "from-cyan-50 to-blue-100",
            panel: "bg-white/80 backdrop-blur-xl",

            text: "text-cyan-700",
            border: "border-cyan-300/60",
            accent: "text-cyan-600",
            textSecondary: "text-cyan-100",

            button: "bg-cyan-100 hover:bg-cyan-200 border-cyan-300",
            shadow: "shadow-cyan-500/20",
            icon: "text-cyan-600",

            keyBg: "rgba(6,182,212,0.12)",
            keyBorder: "#06b6d4",
            keyShadow: "rgba(6,182,212,0.25)",
            keyText: "#164e63",

            glow: "from-cyan-300 to-blue-300",
            highlight: "bg-cyan-100", caretColor: "bg-cyan-400/30",
            focus: "focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-white"
        }
    },

    // 🩵 Cyan → Purple
    cyberpunk: {
        name: "Cyberpunk",

        dark: {
            primary: "from-cyan-500 to-purple-500",
            secondary: "from-purple-500 to-pink-500",

            bg: "from-[#0b0b0c] to-[#111]",
            panel: "bg-gray-900/80 backdrop-blur-xl",

            text: "text-cyan-300",
            border: "border-cyan-500/20",
            accent: "text-cyan-400",
            textSecondary: "text-white",
            button: "bg-cyan-500/20 hover:bg-cyan-500/30 border-cyan-400/50",
            shadow: "shadow-cyan-500/20",
            icon: "text-cyan-300",

            keyBg: "rgba(6,182,212,0.08)",
            keyBorder: "#22d3ee",
            keyShadow: "rgba(34,211,238,0.35)",
            keyText: "#cffafe",

            glow: "from-cyan-500 to-purple-500",
            highlight: "bg-cyan-500/10",
            caretColor: "bg-cyan-400/30",
            focus:
                "focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        },

        light: {
            primary: "from-cyan-500 to-purple-500",
            secondary: "from-purple-500 to-pink-500",

            bg: "from-white to-cyan-50",
            panel: "bg-white/80 backdrop-blur-xl",

            text: "text-cyan-700",
            border: "border-cyan-300",
            accent: "text-cyan-600",
            textSecondary: "text-cyan-100",

            button: "bg-cyan-100 hover:bg-cyan-200 border-cyan-400",
            shadow: "shadow-cyan-300/30",
            icon: "text-cyan-700",

            keyBg: "rgba(6,182,212,0.08)",
            keyBorder: "#0891b2",
            keyShadow: "rgba(8,145,178,0.25)",
            keyText: "#164e63",

            glow: "from-cyan-400 to-purple-400",
            highlight: "bg-cyan-100",
            caretColor: "bg-cyan-400/30",
            focus:
                "focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-white"
        }
    },

    // 🔷 Indigo
    midnight: {
        name: "Midnight",

        dark: {
            primary: "from-indigo-600 to-blue-800",
            secondary: "from-blue-800 to-indigo-900",
            bg: "from-[#0a0a0f] to-[#151522]",
            panel: "bg-indigo-950/80 backdrop-blur-xl",

            text: "text-indigo-300",
            border: "border-indigo-500/20",
            accent: "text-indigo-400",
            textSecondary: "text-white",

            button: "bg-indigo-500/20 hover:bg-indigo-500/30 border-indigo-400/50",
            shadow: "shadow-indigo-500/20",
            icon: "text-indigo-300",

            keyBg: "rgba(99,102,241,0.08)",
            keyBorder: "#818cf8",
            keyShadow: "rgba(129,140,248,0.35)",
            keyText: "#e0e7ff",

            glow: "from-indigo-600 to-blue-800",
            highlight: "bg-indigo-500/10",
            caretColor: "bg-indigo-400/30",
            focus: "focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        },

        light: {
            primary: "from-indigo-500 to-blue-500",
            secondary: "from-blue-500 to-indigo-500",
            bg: "from-indigo-50 to-blue-100",
            panel: "bg-white/80 backdrop-blur-xl",

            text: "text-indigo-700",
            border: "border-indigo-300/60",
            accent: "text-indigo-600",
            textSecondary: "text-indigo-100",

            button: "bg-indigo-100 hover:bg-indigo-200 border-indigo-300",
            shadow: "shadow-indigo-500/20",
            icon: "text-indigo-600",

            keyBg: "rgba(99,102,241,0.12)",
            keyBorder: "#6366f1",
            keyShadow: "rgba(99,102,241,0.25)",
            keyText: "#312e81",

            glow: "from-indigo-400 to-blue-400",
            highlight: "bg-indigo-100",
            caretColor: "bg-indigo-400/30",
            focus: "focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
        }
    },

    // 🟣 Purple
    purpleHaze: {
        name: "Purple Haze",

        dark: {
            primary: "from-purple-600 to-violet-600",
            secondary: "from-violet-600 to-fuchsia-600",
            bg: "from-[#1a0b2e] to-[#2d1060]",
            panel: "bg-purple-950/80 backdrop-blur-xl",

            text: "text-purple-300",
            border: "border-purple-500/20",
            accent: "text-purple-400",
            textSecondary: "text-white",

            button: "bg-purple-500/20 hover:bg-purple-500/30 border-purple-400/50",
            shadow: "shadow-purple-500/20",
            icon: "text-purple-300",

            keyBg: "rgba(168,85,247,0.08)",
            keyBorder: "#c084fc",
            keyShadow: "rgba(192,132,252,0.35)",
            keyText: "#f3e8ff",

            glow: "from-purple-600 to-violet-600",
            highlight: "bg-purple-500/10",
            caretColor: "bg-purple-400/30",
            focus: "focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        },

        light: {
            primary: "from-purple-500 to-violet-500",
            secondary: "from-violet-500 to-fuchsia-500",
            bg: "from-purple-50 to-violet-100",
            panel: "bg-white/80 backdrop-blur-xl",

            text: "text-purple-700",
            border: "border-purple-300/60",
            accent: "text-purple-600",
            textSecondary: "text-purple-100",

            button: "bg-purple-100 hover:bg-purple-200 border-purple-300",
            shadow: "shadow-purple-500/20",
            icon: "text-purple-600",

            keyBg: "rgba(168,85,247,0.12)",
            keyBorder: "#a855f7",
            keyShadow: "rgba(168,85,247,0.25)",
            keyText: "#581c87",

            glow: "from-purple-400 to-violet-400",
            highlight: "bg-purple-100",
            caretColor: "bg-purple-400/30",
            focus: "focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white"
        }
    },

    // 🩷 Pink
    candy: {
        name: "Candy",

        dark: {
            primary: "from-pink-400 to-rose-400",
            secondary: "from-rose-400 to-fuchsia-400",
            bg: "from-pink-950 to-rose-950",
            panel: "bg-black/80 backdrop-blur-xl",

            text: "text-pink-200",
            border: "border-pink-400/30",
            accent: "text-pink-300",
            textSecondary: "text-white",

            button: "bg-pink-500/20 hover:bg-pink-500/30 border-pink-400/50",
            shadow: "shadow-pink-500/30",
            icon: "text-pink-200",

            keyBg: "rgba(244,114,182,0.08)",
            keyBorder: "#f9a8d4",
            keyShadow: "rgba(249,168,212,0.35)",
            keyText: "#fdf2f8",

            glow: "from-pink-400 to-rose-400",
            highlight: "bg-pink-500/20",
            caretColor: "bg-pink-400/30",
            focus: "focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        },

        light: {
            primary: "from-pink-400 to-rose-400",
            secondary: "from-rose-400 to-fuchsia-400",
            bg: "from-pink-50 to-rose-100",
            panel: "bg-white/80 backdrop-blur-xl",

            text: "text-pink-700",
            border: "border-pink-300/60",
            accent: "text-pink-600",
            textSecondary: "text-pink-100",

            button: "bg-pink-100 hover:bg-pink-200 border-pink-300",
            shadow: "shadow-pink-400/30",
            icon: "text-pink-600",

            keyBg: "rgba(244,114,182,0.12)",
            keyBorder: "#ec4899",
            keyShadow: "rgba(236,72,153,0.25)",
            keyText: "#831843",

            glow: "from-pink-300 to-rose-300",
            highlight: "bg-pink-100",
            caretColor: "bg-pink-400/30",
            focus: "focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-white"
        }
    },

    // ⚫ Neutral
    monochrome: {
        name: "Monochrome",

        dark: {
            primary: "from-gray-300 to-gray-500",
            secondary: "from-gray-400 to-gray-600",
            bg: "from-gray-900 to-black",
            panel: "bg-black/80 backdrop-blur-xl",

            text: "text-gray-300",
            border: "border-gray-600/30",
            accent: "text-gray-400",
            textSecondary: "text-white",

            button: "bg-gray-700/30 hover:bg-gray-700/50 border-gray-600/50",
            shadow: "shadow-gray-500/20",
            icon: "text-gray-300",

            keyBg: "rgba(156,163,175,0.08)",
            keyBorder: "#d1d5db",
            keyShadow: "rgba(209,213,219,0.35)",
            keyText: "#f9fafb",

            glow: "from-gray-300 to-gray-500",
            highlight: "bg-gray-700/30",
            caretColor: "bg-gray-400/30",
            focus: "focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        },

        light: {
            primary: "from-gray-400 to-gray-600",
            secondary: "from-gray-300 to-gray-500",
            bg: "from-gray-50 to-gray-200",
            panel: "bg-white/80 backdrop-blur-xl",

            text: "text-gray-800",
            border: "border-gray-300",
            accent: "text-gray-700",
            textSecondary: "text-gray-100",

            button: "bg-gray-200 hover:bg-gray-300 border-gray-400",
            shadow: "shadow-gray-400/30",
            icon: "text-gray-700",

            keyBg: "rgba(107,114,128,0.12)",
            keyBorder: "#6b7280",
            keyShadow: "rgba(107,114,128,0.25)",
            keyText: "#111827",

            glow: "from-gray-400 to-gray-600",
            highlight: "bg-gray-200",
            caretColor: "bg-gray-400/30",
            focus: "focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white"
        }
    },
};