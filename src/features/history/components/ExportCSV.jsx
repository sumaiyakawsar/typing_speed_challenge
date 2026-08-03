import Button from "../../../shared/components/Button";
import { notifications } from "../../notification/notifications";
import { FaFileCsv } from "react-icons/fa6";

const ExportCSV = ({ data, difficulty, category, mode }) => {
    const exportCSV = () => {
        if (!data.length) return;

        const csvFields = {
            "Date": "date",
            "WPM": "wpm",
            "Accuracy": "accuracy",
            "Net WPM": "netWPM",
            "Difficulty": "difficulty",
            "Mode": "mode",
            "Duration": "duration",
            "Category": "category"
        };

        const headers = Object.keys(csvFields).join(",");

        const rows = data.map(item =>
            Object.values(csvFields)
                .map(field => {
                    if (field === "date") {
                        return new Date(item[field])
                            .toISOString()
                            .replace("T", " ")
                            .slice(0, 19);
                    }

                    return item[field];
                })
                .join(",")
        );

        const csv = [headers, ...rows].join("\n");
        const blob = new Blob([csv], { type: "text/csv" });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);

        const filename = [
            "typing-history",
            difficulty !== "all" ? difficulty : null,
            mode !== "all" ? mode : null,
            category !== "all" ? category : null
        ]
            .filter(Boolean)
            .join("-");


        link.download = `${filename || "typing-history"}.csv`;

     
        link.click();
        notifications.exported();
    };

    return (

        <Button
            type="button"
            title={`Export ${difficulty !== "all" ? difficulty : ""} ${mode !== "all" ? mode : ""} ${category !== "all" ? category : ""} history as CSV`}
            aria-label={`Export ${difficulty !== "all" ? difficulty : ""} ${mode !== "all" ? mode : ""} ${category !== "all" ? category : ""} history as CSV`}

            onClick={exportCSV}
        >
            <FaFileCsv />
        </Button>


    );
};

export default ExportCSV;
