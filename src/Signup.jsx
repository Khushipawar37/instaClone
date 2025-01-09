import React, { useState } from "react";
import { signup } from "./auth";
import "./login.css";
import './auth.css';

const Signup = ({ onSignupSuccess, switchToLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleSignup = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");
  
      try {
        const user = await signup(email, password, fullName);
        onSignupSuccess(user);
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
            <img src={InstagramLogo} alt="Instagram" className="instagram-logo" />
          </div>
  
          <form onSubmit={handleSignup} className="auth-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="auth-input"
              />
            </div>
  
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
              disabled={loading || !email || !password || !fullName}
              className={`auth-button ${loading ? 'loading' : ''}`}
            >
              {loading ? "Please wait..." : "Sign up"}
            </button>
          </form>
        </div>
  
        <div className="auth-switch-card">
          <p>
            Have an account?{" "}
            <button onClick={switchToLogin} className="switch-button">
              Log in
            </button>
          </p>
        </div>
      </div>
    );
  };
  
  export default Signup;