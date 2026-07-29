import ConfettiEffect from "./Confetti";
import { FaCheck } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import TypingHistoryChart from "./TypingHistoryChart";
import { useRef } from "react";
import { toPng } from "html-to-image";
import { useTheme } from "../../theme/hooks/useTheme";


export default function ResultModal({
    wpm,
    accuracy,
    correctChars,
    errorChars,
    restartTest,
    resultType,
    history
}) {

    const cardRef = useRef(null);

    const { theme } = useTheme();


    const handleShare = async () => {
        if (!cardRef.current) return;

        try {
            const dataUrl = await toPng(
                cardRef.current,
                { cacheBust: true }
            );

            const link = document.createElement("a");
            link.download = "typing-result.png";
            link.href = dataUrl;
            link.click();

        } catch (err) {
            console.error(
                "Failed to generate shareable image",
                err
            );
        }
    };


    const isHighScore = resultType === "highscore";
    const isBaseline = resultType === "baseline";

    const Icon = isHighScore
        ? LuPartyPopper
        : FaCheck;

    const STYLE_MAP = {
        baseline: {
            bg: "bg-green-500/20",
            inner: "bg-green-500",
            shadow: "shadow-[0_0_40px_rgba(34,197,94,0.35)]"
        },
        highscore: {
            bg: "bg-amber-500/20",
            inner: "bg-amber-400",
            shadow: "shadow-[0_0_40px_rgba(245,158,11,0.35)]"
        },
        normal: {
            bg: "bg-green-500/20",
            inner: "bg-green-500",
            shadow: "shadow-[0_0_40px_rgba(34,197,94,0.35)]"
        }
    };

    const TITLE_MAP = {
        baseline: "Baseline Established!",
        highscore: "High Score Smashed!",
        normal: "Test Complete"
    };


    const SUBTITLE_MAP = {
        baseline:
            "You've set your starting point. Now let's improve.",
        highscore:
            "You're getting faster. That was incredible typing.",
        normal:
            "Solid run. Keep pushing to beat your high score."
    };

    const iconStyles = STYLE_MAP[resultType] || STYLE_MAP.normal;

    const { bg: iconBg, inner: iconInner, shadow: iconShadow } = iconStyles;




    const resultTitle =
        TITLE_MAP[resultType] ??
        TITLE_MAP.normal;


    const resultSubtitle =
        SUBTITLE_MAP[resultType] ??
        SUBTITLE_MAP.normal;



    const ctaText =
        isBaseline || isHighScore
            ? "Beat This Score ↻"
            : "Go Again ↻";




    return (


        <div
            className="
        fixed inset-0
        bg-black/80
        backdrop-blur-sm
        flex
        flex-col
        items-center
        justify-center
        z-99
        px-4
    "
        >
            <div
                className="
                w-full
                max-w-lg
                my-auto
                flex
                flex-col
                items-center
            "
            >
                <div
                    ref={cardRef}
                    className="    text-center max-w-lg w-full px-6"
                >

                    {/* Icon */}
                    <div className={`mx-auto w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-3 md:mb-6 ${iconBg} ${iconShadow}`}>
                        <div className={`w-10 h-10  md:w-16 md:h-16 rounded-full  ${iconInner} flex items-center justify-center`}>
                            <Icon className="text-black text-3xl" />
                        </div>
                    </div>

                    {/* Title */}

                    <h2 className={`text-2xl md:text-4xl font-bold ${theme.text} mb-1`}> {resultTitle} </h2>

                    {/* Subtitle */}
                    <p className="text-gray-400 mb-4 md:mb-10 text-sm md:text-base"> {resultSubtitle} </p>

                    {/* Stats */}
                    <div className="flex gap-2 md:gap-6 justify-center mb-4 md:mb-10">
                        <StatBox
                            label="WPM"
                            value={wpm}
                            theme={theme}
                        />


                        <StatBox
                            label="Accuracy"
                            value={`${accuracy}%`}
                            theme={theme}
                            green={accuracy === 100}
                            red={accuracy < 100}
                        />

                        <CharacterStat
                            correct={correctChars}
                            errors={errorChars}
                            theme={theme}
                        />
                    </div>

                    <div className="my-3 md:my-6 w-full h-32 md:h-52">
                        <TypingHistoryChart history={history} />
                    </div>

                    {isHighScore && <ConfettiEffect />}
                </div>



                {/* CTA */}
                <div className="flex justify-center gap-4 mt-4 w-full max-w-lg">

                    <button
                        onClick={restartTest} className={`px-5 py-2 md:px-8 md:py-3 rounded-xl font-semibold cursor-pointer transition shadow-lg ${theme.button} ${theme.text}`}
                    >
                        {ctaText}
                    </button>

                    <button
                        onClick={handleShare}
                        className={`
                        px-4 py-2 md:px-6
                        rounded-lg
                        font-semibold
                        cursor-pointer
                        transition

                        ${theme.button}
                        ${theme.accent}
                    `}
                    >
                        Share
                    </button>

                </div>

            </div>
        </div>

    );
}


function StatBox({ label, value, theme, red, green }) {
    return (
        <div className={`bg-white/5 border ${theme.border} px-3 py-3 md:px-6 md:py-5 rounded-xl min-w-24 md:min-w-32.5`}        >
            <p className="text-sm text-gray-400 mb-1"> {label} </p>
            <p className={`
                    text-2xl font-bold
                    ${red
                    ? "text-red-400"
                    : green
                        ? "text-green-400"
                        : theme.text
                }`}
            >
                {value}
            </p>
        </div>
    );
}

function CharacterStat({ correct, errors, theme }) {
    return (
        <div className={`bg-white/5 border ${theme.border} px-3 py-3 md:px-6 md:py-5 rounded-xl min-w-24 md:min-w-32.5`} >
            <p className="text-sm text-gray-400 mb-1"> Characters</p>
            <p className="text-2xl font-bold">
                <span className="text-green-400"> {correct} </span>
                <span className="text-gray-500 mx-1"> / </span>
                <span className="text-red-400"> {errors}  </span>
            </p>
        </div>
    );
}