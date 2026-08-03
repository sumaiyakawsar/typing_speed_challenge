import { FaPalette } from "react-icons/fa";
import SelectDropdown from "../../../shared/components/SelectDropdown";
import { useTheme } from "../hooks/useTheme";

const ThemeSelector = ({ open, setOpen }) => {
    const { currentTheme, setCurrentTheme, themes, theme, setPreviewTheme, colorMode } = useTheme();

    const options = Object.keys(themes).map(name => ({
        value: name,
        label: themes[name].name,
    }));

    return (

        <SelectDropdown
            value={currentTheme}
            options={options}
            theme={theme}
            icon={FaPalette}
            isOpen={open}
            setIsOpen={setOpen}
            onChange={(name) => {
                setCurrentTheme(name);
                setPreviewTheme?.(null);
                setOpen(false);
            }}
            onOptionHover={setPreviewTheme}
            onMenuClose={() => setPreviewTheme(null)}
            renderOption={(option) => {
                const itemTheme =
                    themes[option.value][colorMode];

                return (
                    <div className="flex items-center gap-3">
                        <div
                            className={`
                        w-4 h-4
                        rounded-full
                        bg-linear-to-r
                        ${itemTheme.primary}
                    `}
                        />

                        <span className={theme.text}>
                            {option.label}
                        </span>
                    </div>
                );
            }}
        />
    );


};


export default ThemeSelector;