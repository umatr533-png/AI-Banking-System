import Sidebar from "../components/Sidebar";
import AnalyticsChart from "../components/AnalyticsChart";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import "../styles/Sidebar.css";
import { useContext, useEffect } from "react";
import { BankContext } from "../context/BankContext";

function Dashboard() {
  useEffect(() => {
    fetch("http://localhost:8080/api/test")
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  const {
    balance,
    fraudScore,
    alerts,
    transactions,
  } = useContext(BankContext);

  const totalDeposits = transactions
    .filter((t) => t.type === "Deposit")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalWithdrawals = transactions
    .filter((t) => t.type === "Withdraw")
    .reduce((sum, t) => sum + t.amount, 0);

  const recentTransactions = [...transactions]
    .reverse()
    .slice(0, 5); 

  const suspiciousTransactions = transactions.filter(
  (t) => t.amount > 50000
).length;
let aiMessage = "";
let aiColor = "";

if (fraudScore <= 20) {
  aiMessage = "✅ No suspicious activity detected.";
  aiColor = "green";
} else if (fraudScore <= 50) {
  aiMessage =
    "⚠ Medium Risk. Monitor this account and verify customer identity.";
  aiColor = "orange";
} else {
  aiMessage =
    "🚨 High Risk! Block large transactions and notify the administrator immediately.";
  aiColor = "red";
}

  let riskLevel = "Low";

  if (fraudScore >= 20) {
    riskLevel = "Medium";
  }

  if (fraudScore >= 50) {
    riskLevel = "High";
  }

  return (
    <>
      <Sidebar />

      <div className="dashboard-content">
        <div className="navbar">
          <h2>AI Banking System</h2>
          <button>Logout</button>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Current Balance</h3>
            <h1>₹{balance.toLocaleString()}</h1>
          </div>

          <div className="card">
            <h3>Total Deposits</h3>
            <h1>₹{totalDeposits.toLocaleString()}</h1>
          </div>

          <div className="card">
            <h3>Total Withdrawals</h3>
            <h1>₹{totalWithdrawals.toLocaleString()}</h1>
          </div>

          <div className="card">
            <h3>Fraud Risk Score</h3>
            <h1>{fraudScore}%</h1>
          </div>

          <div className="card">
            <h3>Risk Level</h3>
            <h1>{riskLevel}</h1>
          </div>
        </div>
        <div className="card">
            <h3>Suspicious Transactions</h3>
            <h1>{suspiciousTransactions}</h1>
        </div>

        <div className="alerts-card">
          <h2>Fraud Alerts</h2>

          {alerts.length === 0 ? (
            <p>No Fraud Alerts</p>
          ) : (
            alerts.map((alert, index) => (
              <p key={index}>{alert}</p>
            ))
          )}
        </div>
        <div className="ai-card">
          <h2>🤖 AI Recommendation</h2>

          <p style={{ color: aiColor }}>
            {aiMessage}
          </p>

          <ul>
            <li>✔ Monitor account activity</li>
            <li>✔ Verify customer identity</li>
            <li>✔ Enable OTP for every transfer</li>
            <li>✔ Generate fraud reports</li>
          </ul>
        </div>
        <AnalyticsChart />
        <div className="recent-card">
  <h2>🕒 Recent Transactions</h2>

  {recentTransactions.length === 0 ? (
    <p>No Transactions Yet</p>
  ) : (
    <table className="recent-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {recentTransactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.type}</td>
            <td>₹{transaction.amount}</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>

        <div className="actions">
          <Link to="/deposit">
            <button className="action-btn">Deposit</button>
          </Link>

          <Link to="/withdraw">
            <button className="action-btn">Withdraw</button>
          </Link>

          <Link to="/transfer">
            <button className="action-btn">Transfer</button>
          </Link>

          <Link to="/history">
            <button className="action-btn">History</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dashboard;