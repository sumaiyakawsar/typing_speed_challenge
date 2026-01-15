import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function ConfettiEffect() {
    const { width, height } = useWindowSize();

    return (
        <Confetti
            width={width}
            height={height}
            numberOfPieces={250}
            gravity={0.3}
            recycle={false}
        />
    );
}
