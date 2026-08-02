const StatCard = ({ icon, label, value, theme, valueClassName }) => {

    return (
        <div className="relative group">
            <div className={`relative flex items-center gap-3 p-2`}>

                {icon}
                <div className="text-center">
                    <p className={`text-xs ${theme.text}/80 opacity-80`}> {label} </p>
                    <p className={`text-lg font-bold tracking-wider ${valueClassName ?? `${theme.textSecondary}`}`}>
                        {value}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StatCard;