import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useContext, useState } from "react";
import { BankContext } from "../context/BankContext";
import "../styles/Form.css";

function History() {
  const { transactions } = useContext(BankContext);
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.type.toLowerCase().includes(search.toLowerCase())
  );

  // Export PDF Function
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("AI Banking System", 14, 15);

    doc.setFontSize(14);
    doc.text("Transaction History", 14, 25);

    autoTable(doc, {
      startY: 35,
      head: [["Type", "Amount", "Date"]],
      body: filteredTransactions.map((t) => [
        t.type,
        `₹${t.amount}`,
        t.date,
      ]),
    });

    doc.save("Transaction_History.pdf");
  };

  return (
    <div className="form-page">
      <h1>Transaction History</h1>

      <input
        type="text"
        placeholder="Search Deposit / Withdraw / Transfer"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={exportPDF}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        📄 Export PDF
      </button>
      <button
    onClick={exportExcel}
    style={{
      marginLeft: "10px",
      marginBottom: "20px",
      padding: "10px 20px",
      background: "green",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    📊 Export Excel
  </button>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.length === 0 ? (
            <tr>
              <td colSpan="3">No Transactions Found</td>
            </tr>
          ) : (
            filteredTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.type}</td>
                <td>₹{transaction.amount}</td>
                <td>{transaction.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default History;