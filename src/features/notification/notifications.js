import { toast } from "sonner";

export const notifications = {
    historyCleared: () =>
        toast.success("History cleared."),

    exported: () =>
        toast.success("History exported."),

    shareSuccess: () =>
        toast.success("Image downloaded."),

    shareError: () =>
        toast.error("Couldn't generate image."),

    soundOn: () =>
        toast.success("Sound enabled."),

    soundOff: () =>
        toast.info("Sound muted."),

    newHighScore: () =>
        toast.success("🎉 New Personal Best!"),

    themeChanged: (name) =>
        toast.success(`Theme changed to ${name}`),

    darkMode: () =>
        toast.success("Dark mode enabled."),

    lightMode: () =>
        toast.success("Light mode enabled."),



    difficultyChanged: (difficulty) =>
        toast.info(`Difficulty set to ${difficulty}.`),

    categoryChanged: (category) =>
        toast.info(`Category set to ${category}.`),

    modeChanged: (mode) =>
        toast.info(`Mode set to ${mode}.`),

    durationChanged: (duration) =>
        toast.info(`Test duration set to ${duration} seconds.`),

    testRestarted: () =>
        toast.success("Typing test restarted."),
    testStarted: () =>
        toast.success("Typing test started."),

    heatmapToggled: (enabled) =>
        toast.info(
            enabled
                ? "Keyboard heatmap enabled."
                : "Keyboard heatmap hidden."
        ),
};