import { notifications } from "../../notification/notifications";
import { FaFileCsv } from "react-icons/fa6";

const ExportCSV = ({ data, theme }) => {
      
    
    const exportCSV = () => {
        if (!data.length) return;

        const headers = Object.keys(data[0]).join(",");
        const rows = data.map(d => Object.values(d).join(","));

        const csv = [headers, ...rows].join("\n");
        const blob = new Blob([csv], { type: "text/csv" });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "typing-history.csv";
        link.click();
        notifications.exported();
    };

    return (
        <button
            onClick={exportCSV}
            className={`px-3 py-2 border ${theme.border} rounded-md ${theme.text} `}
        >
            <FaFileCsv />

        </button>
    );
};

export default ExportCSV;
