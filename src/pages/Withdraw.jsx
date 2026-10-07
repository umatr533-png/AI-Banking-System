import { useState, useContext } from "react";
import { BankContext } from "../context/BankContext";
import "../styles/Form.css";

function Withdraw() {
  const [amount, setAmount] = useState("");

  const {
    balance,
    setBalance,
    transactions,
    setTransactions,
    fraudScore,
    setFraudScore,
    alerts,
    setAlerts,
  } = useContext(BankContext);

  const handleWithdraw = () => {
    const withdrawAmount = Number(amount);

    if (withdrawAmount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    if (withdrawAmount > balance) {
      alert("Insufficient Balance");
      return;
    }

    if (withdrawAmount > 50000) {
      alert("⚠ High Value Withdrawal Detected");

      setFraudScore(fraudScore + 10);

      setAlerts([
        ...alerts,
        `⚠ High Withdrawal ₹${withdrawAmount}`,
      ]);
    }

    const withdrawCount = transactions.filter(
      (t) => t.type === "Withdraw"
    ).length;

    if (withdrawCount >= 3) {
      setFraudScore((prev) => prev + 20);

      setAlerts([
        ...alerts,
        "⚠ Multiple Withdrawals Detected",
      ]);
    }

    setBalance(balance - withdrawAmount);

    setTransactions([
      ...transactions,
      {
        type: "Withdraw",
        amount: withdrawAmount,
        date: new Date().toLocaleString(),
      },
    ]);

    alert("Withdrawal Successful");
    setAmount("");
  };

  return (
    <div className="form-page">
      <h1>Withdraw Money</h1>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleWithdraw}>
        Withdraw
      </button>
    </div>
  );
}

export default Withdraw;