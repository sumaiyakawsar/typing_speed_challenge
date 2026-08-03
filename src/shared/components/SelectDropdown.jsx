import { FaChevronDown, FaChevronUp, FaCheck } from "react-icons/fa";

const SelectDropdown = ({
    value, options, onChange, theme,
    icon: Icon,  placeholder = "Select",
    renderOption, isOpen, setIsOpen, onOptionHover,
}) => {
    const selectedOption = options.find(option => option.value === value);

    return (
        <div className="relative">
            {/* Trigger */}
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(prev => !prev)}
                className={`
                    flex items-center gap-2
                    px-4 py-2
                    rounded-lg
                    transition
                    ${theme.button}
                `}
            >

                {Icon && (<Icon className={theme.icon} />)}
                <span className={theme.text}> { selectedOption?.label ?? placeholder }   </span>
                { isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} /> }
            </button>


            {/* Menu */}

            {
                isOpen && (

                    <div
                        className={`
                            absolute
                            top-full right-0
                            mt-2
                            z-50
                            w-52
                            rounded-lg
                            border
                            shadow-xl  
                            backdrop-blur-sm
                            ${theme.panel}
                            ${theme.border}
                        `}
                    >

                        {
                            options.map(option => {

                                const selected =
                                    option.value === value;


                                return (

                                    <button
                                        key={option.value}
                                        onMouseEnter={() => onOptionHover?.(option.value)}
                                        onMouseLeave={() => onOptionHover?.(null)}
                                        onClick={() => {
                                            onChange(option.value);
                                            setIsOpen(false);
                                        }}
                                        className={`
                                            flex items-center
                                            justify-between
                                            w-full
                                            px-3 py-2
                                            rounded-md
                                            transition

                                            ${selected
                                                ? theme.button
                                                : "hover:bg-white/5"
                                            }
                                        `}
                                    >


                                        {
                                            renderOption
                                                ? renderOption(option)
                                                :
                                                <span className={theme.text}>
                                                    {option.label}
                                                </span>
                                        }


                                        {
                                            selected &&
                                            <FaCheck
                                                size={12}
                                                className={theme.icon}
                                            />
                                        }


                                    </button>

                                );

                            })
                        }

                    </div>

                )
            }

        </div>
    );
};


export default SelectDropdown;