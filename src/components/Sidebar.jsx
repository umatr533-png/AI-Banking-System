import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>AI Banking</h2>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/deposit">Deposit</Link>
      <Link to="/withdraw">Withdraw</Link>
      <Link to="/transfer">Transfer</Link>
      <Link to="/history">History</Link>
    </div>
  );
}

export default Sidebar;