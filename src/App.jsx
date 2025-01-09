import React, { useState } from "react";
import Header from "./Header/Header";
import "./index.css";
import Main from "./Main/Main";
import Suggested from "./Sugg/Sugg";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  const handleAuthSuccess = (user) => {
    console.log("Authenticated user:", user);
  };
  return (
    <div>
      {!user ? (
        <>
          <Login onAuthSuccess={handleAuthSuccess} />
        </>
      ) : (
        <div className="content">
          <Header />
          <Main />
          <Suggested />
        </div>
      )}
    </div>
  );
}

export default App;
