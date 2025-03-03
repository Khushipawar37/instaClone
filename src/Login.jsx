import React, { useState } from "react";
import { login } from "./auth";
import './auth.css';

const Login = ({ onLoginSuccess, switchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const user = await login(email, password);
      onLoginSuccess(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="logo-container">
          <div className="logo_head">Instagram</div>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Phone number, username, or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button
            type="submit"
            disabled={loading || !email || !password}
            className={`auth-button ${loading ? 'loading' : ''}`}
          >
            {loading ? "Please wait..." : "Log in"}
          </button>
        </form>
      </div>
      <div className="auth-switch-card">
        <p>
          Don't have an account?{" "}
          <button onClick={switchToSignup} className="switch-button">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
