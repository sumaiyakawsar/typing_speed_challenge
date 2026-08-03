import Button from "../../../shared/components/Button";
import { useTheme } from "../../theme/hooks/useTheme";

export default function StartButton({ startTest }) {

    const { theme } = useTheme();

    return (
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">

            <div className="pointer-events-auto text-center">
                <Button
                    variant="primary"
                    onClick={(e) => {
                        e.stopPropagation();
                        startTest();
                    }}
                >
                    Start Typing Test
                </Button>

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