import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function TypingHistoryChart({ history }) {
    if (!history || history.length === 0) return <p className="text-gray-400">No history data</p>;

    return (
        <div style={{ width: "100%", height: 200 }}>
            <ResponsiveContainer>
                <LineChart data={history}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="time" label={{ value: "Seconds", position: "insideBottomRight", offset: -5 }} />
                    <YAxis yAxisId="left" orientation="left" stroke="#00FF00" />
                    <YAxis yAxisId="right" orientation="right" stroke="#FF0000" />
                    <Tooltip />
                    <Line yAxisId="left" type="monotone" dataKey="wpm" stroke="#00FF00" strokeWidth={2} dot={false} />
                    <Line yAxisId="right" type="monotone" dataKey="accuracy" stroke="#FF0000" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
