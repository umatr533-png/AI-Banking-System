function Transfer() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Transfer Money</h1>

      <input
        type="text"
        placeholder="Account Number"
        style={{ padding: "10px", width: "300px" }}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Amount"
        style={{ padding: "10px", width: "300px" }}
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
        Transfer
      </button>
    </div>
  );
}

export default Transfer;