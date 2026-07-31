import { TbCircleLetterE, TbCircleLetterM, TbCircleLetterH } from "react-icons/tb";
import { FiBook, FiMusic, FiCode } from "react-icons/fi";
import { MdOutlineTimer } from "react-icons/md";
import { PiTextTLight } from "react-icons/pi";


export const difficultyOptions = [
    {
        id: "easy",
        icon: <TbCircleLetterE className="text-lg"/>
    },
    {
        id: "medium",
        icon: <TbCircleLetterM className="text-lg"/>
    },
    {
        id: "hard",
        icon: <TbCircleLetterH className="text-lg"/>
    }
];


export const categoryOptions = [
    {
        id: "quotes",
        icon: <FiBook className="text-lg"/>
    },
    {
        id: "lyrics",
        icon: <FiMusic className="text-lg"/>
    },
    {
        id: "code",
        icon: <FiCode className="text-lg"/>
    }
];


export const modeOptions = [
    {
        id: "timed",
        icon: <MdOutlineTimer className="text-lg"/>
    },
    {
        id: "passage",
        icon: <PiTextTLight className="text-lg"/>
    }
];


export const durationOptions = [15, 30, 60, 120];