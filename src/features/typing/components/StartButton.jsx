import { useTheme } from "../../theme/hooks/useTheme";

export default function StartButton({ startTest }) {

    const { theme } = useTheme();


    return (
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">

            <div className="pointer-events-auto text-center">

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        startTest();
                    }}
                    className={`
                        px-6 py-3
                        rounded-lg
                        font-semibold
                        shadow-xl
                        cursor-pointer
                        transition-all
                        duration-300
                        hover:scale-105

                        ${theme.button}
                        ${theme.text}
 ${theme.focus}
                        focus:outline-none
                    `}
                >
                    Start Typing Test
                </button>


                <p
                    className={`
                        mt-3
                        text-sm
                        opacity-70
                        ${theme.text}
                    `}
                >
                    Or click the text and start typing
                </p>

            </div>

        </div>
    );
}