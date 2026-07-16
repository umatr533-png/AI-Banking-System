import "../styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>AI Banking System</h1>

        <p>Secure & Smart Banking</p>

        <input
          type="email"
          placeholder="Enter Email"
          className="input-field"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="input-field"
        />

        <button className="login-btn">
          Login
        </button>

        <div className="register-link">
          Don't have an account?
        </div>

      </div>
    </div>
  );
}

export default Login;