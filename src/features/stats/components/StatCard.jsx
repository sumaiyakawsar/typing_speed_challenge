const StatCard = ({ icon, label, value, theme, valueClassName }) => {

    return (
        <div className="relative group">
            <div className={`absolute -inset-1 ${theme.glow} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000`}></div>

            <div
                className={`relative flex items-center gap-3 p-2 ${theme.bg} rounded-xl ${theme.border}`}
            >

                {icon}

                <div className="text-center">
                    <p className={`text-xs ${theme.text}/80 opacity-80`}> {label} </p>
                    <p
                        className={`text-lg font-bold tracking-wider ${valueClassName ?? "text-white"
                            }`}
                    >
                        {value}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StatCard;