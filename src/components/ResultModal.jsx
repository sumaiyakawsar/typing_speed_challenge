import ConfettiEffect from "./Confetti";
import { FaCheck } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import TypingHistoryChart from "./TypingHistoryChart";
import { useRef } from "react";
import { toPng } from "html-to-image";

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

    const handleShare = async () => {
        if (!cardRef.current) return;

        try {
            const dataUrl = await toPng(cardRef.current, { cacheBust: true });
            const link = document.createElement("a");
            link.download = "typing-result.png";
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error("Failed to generate shareable image", err);
        }
    };

    const isBaseline = resultType === "baseline";
    const isHighScore = resultType === "highscore";

    const Icon = isHighScore ? LuPartyPopper : FaCheck;

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


    const iconStyles = STYLE_MAP[resultType] || STYLE_MAP.normal;

    const { bg: iconBg, inner: iconInner, shadow: iconShadow } = iconStyles;








    const TITLE_MAP = {
        baseline: "Baseline Established!",
        highscore: "High Score Smashed!",
        normal: "Test Complete"
    };

    const SUBTITLE_MAP = {
        baseline: "You've set your starting point. Now let's improve.",
        highscore: "You're getting faster. That was incredible typing.",
        normal: "Solid run. Keep pushing to beat your high score."
    };

    const resultTitle = TITLE_MAP[resultType] || TITLE_MAP.normal;
    const resultSubtitle = SUBTITLE_MAP[resultType] || SUBTITLE_MAP.normal;

    const ctaText =
        isBaseline || isHighScore
            ? "Beat This Score ↻"
            : "Go Again ↻";

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">


            <div ref={cardRef} className="text-center max-w-lg w-full px-6">

                {/* SUCCESS ICON */}

                <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 ${iconBg} ${iconShadow}`}>
                    <div className={`w-16 h-16 rounded-full ${iconInner} flex items-center justify-center`}>
                        <Icon className="text-black text-3xl" />
                    </div>
                </div>


                {/* TITLE */}
                <h2 className="text-4xl font-bold mb-2 text-white">
                    {resultTitle}
                </h2>

                {/* SUBTITLE */}
                <p className="text-gray-400 mb-10">
                    {resultSubtitle}
                </p>

                {/* STATS */}
                <div className="flex gap-6 justify-center mb-10">
                    <StatBox label="WPM" value={wpm} />

                    <StatBox
                        label="Accuracy"
                        value={`${accuracy}%`}
                        green={accuracy === 100}
                        red={accuracy < 100}
                    />

                    <CharacterStat
                        correct={correctChars}
                        errors={errorChars}
                    />
                </div>

                <div className="my-6 w-full h-52">
                    <TypingHistoryChart history={history} />
                </div>

                {resultType === "highscore" && <ConfettiEffect />}
            </div>

            <div className="flex justify-center gap-4 mt-4 w-full max-w-lg">
                {/* CTA */}
                <button
                    onClick={restartTest}
                    className="bg-white text-black px-8 py-3 rounded-xl font-semibold
  hover:bg-gray-200 transition shadow-lg cursor-pointer"
                >
                    {ctaText}
                </button>
                <button
                    onClick={handleShare}
                    className="bg-blue-500 cursor-pointer text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600"
                >
                    Share
                </button>
            </div>
        </div>
    );
}


function StatBox({ label, value, red, green }) {
    return (
        <div className="bg-white/5 border border-white/10 px-6 py-5 rounded-xl min-w-32.5">
            <p className="text-sm text-gray-400 mb-1">{label}</p>
            <p
                className={`text-2xl font-bold
          ${red ? "text-red-400" : green ? "text-green-400" : "text-white"}`}
            >
                {value}
            </p>
        </div>
    );
}

function CharacterStat({ correct, errors }) {
    return (
        <div className="bg-white/5 border border-white/10 px-6 py-5 rounded-xl min-w-32.5">
            <p className="text-sm text-gray-400 mb-1">Characters</p>
            <p className="text-2xl font-bold">
                <span className="text-green-400">{correct}</span>
                <span className="text-gray-500 mx-1">/</span>
                <span className="text-red-400">{errors}</span>
            </p>
        </div>
    );
}
