import ConfettiEffect from "./Confetti";
import { FaCheck } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";

export default function ResultModal({
    wpm,
    accuracy,
    correctChars,
    errorChars,
    restartTest,
    isFirstTest,
    isHighScore
}) {

    // Explicitly handle all three cases
    // Determine icon and colors 
    let Icon, iconBg, iconInner, iconShadow;

    if (isFirstTest) {
        // Baseline — always tick, ignore high score
        Icon = FaCheck;
        iconBg = "bg-green-500/20";
        iconInner = "bg-green-500";
        iconShadow = "shadow-[0_0_40px_rgba(34,197,94,0.35)]";
    } else if (isHighScore) {
        // Only real high scores get party popper
        Icon = LuPartyPopper;
        iconBg = "bg-amber-500/20";
        iconInner = "bg-amber-400";
        iconShadow = "shadow-[0_0_40px_rgba(245,158,11,0.35)]";
    } else {
        // Normal run
        Icon = FaCheck;
        iconBg = "bg-green-500/20";
        iconInner = "bg-green-500";
        iconShadow = "shadow-[0_0_40px_rgba(34,197,94,0.35)]";
    }



    const resultTitle = isFirstTest
        ? "Baseline Established!"
        : isHighScore
            ? "High Score Smashed!"
            : "Test Complete";

    const resultSubtitle = isFirstTest
        ? "You've set your starting point. Now let's improve."
        : isHighScore
            ? "You're getting faster. That was incredible typing."
            : "Solid run. Keep pushing to beat your high score.";
    const ctaText = isFirstTest || isHighScore
        ? "Beat This Score ↻"
        : "Go Again ↻";

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center max-w-lg w-full px-6">

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

                {/* CTA */}
                <button
                    onClick={restartTest}
                    className="bg-white text-black px-8 py-3 rounded-xl font-semibold
  hover:bg-gray-200 transition shadow-lg"
                >
                    {ctaText}
                </button>
                {!isFirstTest && isHighScore && <ConfettiEffect />}

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
