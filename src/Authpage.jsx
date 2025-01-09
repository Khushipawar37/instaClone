import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import './auth.css';

const AuthPage = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-wrapper">
      {isLogin ? (
        <Login
          onLoginSuccess={onAuthSuccess}
          switchToSignup={() => setIsLogin(false)}
        />
      ) : (
        <Signup
          onSignupSuccess={onAuthSuccess}
          switchToLogin={() => setIsLogin(true)}
        />
      )}
    </div>
  );
};

export default AuthPage;

