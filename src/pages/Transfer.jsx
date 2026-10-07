import { useState, useContext } from "react";
import { BankContext } from "../context/BankContext";
import "../styles/Form.css";

function Transfer() {
  const [account, setAccount] = useState("");
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

  const handleTransfer = () => {
    const transferAmount = Number(amount);

    if (!account) {
      alert("Enter Account Number");
      return;
    }

    if (transferAmount <= 0) {
      alert("Enter Valid Amount");
      return;
    }

    if (transferAmount > balance) {
      alert("Insufficient Balance");
      return;
    }

    if (transferAmount > 50000) {
      alert("⚠ High Value Transfer Detected");

      setFraudScore(fraudScore + 10);

      setAlerts([
        ...alerts,
        `⚠ High Transfer ₹${transferAmount}`,
      ]);
    }

    setBalance(balance - transferAmount);

    setTransactions([
      ...transactions,
      {
        type: "Transfer",
        amount: transferAmount,
        account: account,
        date: new Date().toLocaleString(),
      },
    ]);

    alert("Transfer Successful");

    setAccount("");
    setAmount("");
  };

  return (
    <div className="form-page">
      <h1>Transfer Money</h1>

      <input
        type="text"
        placeholder="Receiver Account Number"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleTransfer}>
        Transfer
      </button>
    </div>
  );
}

export default Transfer;