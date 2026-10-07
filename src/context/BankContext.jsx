import { createContext, useState, useEffect } from "react";

export const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [balance, setBalance] = useState(() => {
    return Number(localStorage.getItem("balance")) || 50000;
  });

  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("transactions")) || [];
  });

  const [fraudScore, setFraudScore] = useState(() => {
    return Number(localStorage.getItem("fraudScore")) || 0;
  });

  const [alerts, setAlerts] = useState(() => {
    return JSON.parse(localStorage.getItem("alerts")) || [];
  });

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("fraudScore", fraudScore);
  }, [fraudScore]);

  useEffect(() => {
    localStorage.setItem(
      "alerts",
      JSON.stringify(alerts)
    );
  }, [alerts]);

  return (
    <BankContext.Provider
      value={{
        balance,
        setBalance,
        transactions,
        setTransactions,
        fraudScore,
        setFraudScore,
        alerts,
        setAlerts,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};