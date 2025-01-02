import React, { useState } from "react";
import Header from './Header/Header'
import './index.css'
import Main from './Main/Main'
import Suggested from './Sugg/Sugg'
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
    {!user ? (
      <>
        <Signup onSignupSuccess={setUser} />
        <Login onLoginSuccess={setUser} />
      </>
    ) : (
      <div className="content">
      <Header />
      <Main />
      <Suggested />
    </div>    )}
  </div>
  )
}

export default App
