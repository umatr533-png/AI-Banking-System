import { useState, useContext } from "react";
import { BankContext } from "../context/BankContext";
import "../styles/Form.css";

function Deposit() {
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

  const handleDeposit = () => {
    const depositAmount = Number(amount);

    if (depositAmount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    if (depositAmount > 50000) {
      alert("⚠ High Value Deposit Detected");

      setFraudScore(fraudScore + 10);

      setAlerts([
        ...alerts,
        `⚠ High Deposit ₹${depositAmount}`,
      ]);
    }

    setBalance(balance + depositAmount);

    setTransactions([
      ...transactions,
      {
        type: "Deposit",
        amount: depositAmount,
        date: new Date().toLocaleString(),
      },
    ]);

    alert("Deposit Successful");
    setAmount("");
  };

  return (
    <div className="form-page">
      <h1>Deposit Money</h1>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleDeposit}>
        Deposit
      </button>
    </div>
  );
}

export default Deposit;