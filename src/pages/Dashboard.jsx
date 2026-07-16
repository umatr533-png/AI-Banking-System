import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard">

      <div className="navbar">
        <h2>AI Banking System</h2>
        <button>Logout</button>
      </div>

      <div className="cards">

        <div className="card">
          <h3>Current Balance</h3>
          <h1>₹50,000</h1>
        </div>

        <div className="card">
          <h3>Total Deposits</h3>
          <h1>₹1,20,000</h1>
        </div>

        <div className="card">
          <h3>Total Withdrawals</h3>
          <h1>₹70,000</h1>
        </div>

        <div className="card">
          <h3>Fraud Risk Score</h3>
          <h1>3%</h1>
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

    </div>
    
  );
}

export default Dashboard;