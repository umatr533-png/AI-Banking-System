import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";
import { BankContext } from "../context/BankContext";

function AnalyticsChart() {
  const { transactions } = useContext(BankContext);

  const totalDeposits = transactions
    .filter((t) => t.type === "Deposit")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalWithdrawals = transactions
    .filter((t) => t.type === "Withdraw")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalTransfers = transactions
    .filter((t) => t.type === "Transfer")
    .reduce((sum, t) => sum + t.amount, 0);

  const data = [
    { name: "Deposits", value: totalDeposits },
    { name: "Withdrawals", value: totalWithdrawals },
    { name: "Transfers", value: totalTransfers },
  ];

  const COLORS = ["#22c55e", "#ef4444", "#3b82f6"];

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "30px",
      }}
    >
      <h2>Transaction Analytics</h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;