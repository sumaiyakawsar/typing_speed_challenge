import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


const CategoryDropdown = ({ category, setCategory }) => {
    const [open, setOpen] = useState(false);

    return (


        <div className="relative  flex-1">
            {/* Trigger */}
            <button
                onClick={() => setOpen(o => !o)}
                className="flex items-center  justify-center gap-2 px-4 py-1.5 w-full 
          rounded-md border border-white/10 text-white  
          hover:border-white/30 transition
          focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {category[0].toUpperCase() + category.slice(1)}
                <FaChevronDown size={14} className="opacity-70" />
            </button>

            {/* Menu */}
            {open && (
                <div
                    className="absolute top-full mb-2 w-full rounded-md
            bg-[#111] border border-white/10 shadow-lg z-50 mt-1"
                >
                    {["quotes", "lyrics", "code"].map(d => (
                        <button
                            key={d}
                            onClick={() => {
                                setCategory(d);
                                setOpen(false);
                            }}
                            className={`w-full flex items-center gap-2 px-3 py-2 text-left
                hover:bg-white/5 transition
                ${category === d ? "text-blue-400" : "text-gray-300"}`}
                        >
                            <span
                                className={`w-3 h-3 rounded-full border
                  ${category === d
                                        ? "border-blue-400 bg-blue-400"
                                        : "border-gray-500"}`}
                            />
                            {d[0].toUpperCase() + d.slice(1)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
export default CategoryDropdown;
