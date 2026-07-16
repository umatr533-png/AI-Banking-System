function Deposit() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Deposit Money</h1>

      <input
        type="number"
        placeholder="Enter Amount"
        style={{
          padding: "10px",
          width: "300px",
          marginTop: "20px",
        }}
      />

      <br /><br />

      <button
        style={{
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Deposit
      </button>
    </div>
  );
}

export default Deposit;