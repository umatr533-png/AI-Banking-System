import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

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

        <button
          className="login-btn"
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>
        <Link to="/register">
  <button className="login-btn">
    Create New Account
  </button>
</Link>

        <div className="register-link">
          Don't have an account?
        </div>

      </div>
    </div>
  );
}

export default Login;