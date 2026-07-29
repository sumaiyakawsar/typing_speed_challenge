import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const HistoryChart = ({ data }) => {
    if (!data.length) return <p>No data yet</p>;

    const chartData = data.map(d => ({
        date: new Date(d.date).toLocaleDateString(),
        wpm: d.wpm,
        accuracy: d.accuracy
    }));

    return (
        <div className="h-64 mt-6">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="wpm" stroke="#60a5fa" />
                    <Line type="monotone" dataKey="accuracy" stroke="#34d399" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HistoryChart;
