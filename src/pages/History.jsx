function History() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Transaction History</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>16-07-2026</td>
            <td>Deposit</td>
            <td>₹5000</td>
          </tr>

          <tr>
            <td>15-07-2026</td>
            <td>Withdraw</td>
            <td>₹2000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default History;