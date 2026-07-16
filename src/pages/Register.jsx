function Register() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          className="input-field"
        />

        <input
          type="email"
          placeholder="Email"
          className="input-field"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="input-field"
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="input-field"
        />

        <button className="login-btn">
          Create Account
        </button>

      </div>
    </div>
  );
}

export default Register;