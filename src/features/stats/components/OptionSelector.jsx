const OptionSelector = ({icon, label, options, value, onChange, theme, variant = "default"}) => {
    const isMobile = variant === "mobile";

    return (
        <div
            className={
                isMobile
                    ? "flex flex-col gap-2 flex-1 min-w-30"
                    : "flex flex-col gap-1"
            }
        >

            <span className={`text-xs ${theme.textSecondary} opacity-60 font-mono flex items-center gap-1`}>
                {icon} {label}
            </span>


            <div className={` flex rounded-lg overflow-hidden border ${theme.border}`}
            >
                {options.map(option => {
                    const id = option.id ?? option;
                    return (
                        <button
                            key={id}
                            onClick={() => onChange(id)}
                            disabled={value === id}
                            title={String(id).toUpperCase()}
                            className={` flex-1 py-2 px-3 flex items-center justify-center text-sm transition-all font-medium font-mono duration-200   gap-2  
                            ${value === id
                                    ? `${theme.button} ${theme.text} shadow-lg ${theme.shadow} cursor-not-allowed`
                                    : `${theme.textSecondary} cursor-pointer hover:${theme.text} hover:${theme.highlight}`
                                }
                            `}
                        >
                            {option.icon ?? `${option}s`}
                        </button>
                    )
                })}
            </div>
        </div>
    )

}

export default OptionSelector;