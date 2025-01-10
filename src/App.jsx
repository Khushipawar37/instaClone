import React, { useState,useEffect } from "react";
import Header from "./Header/Header";
import "./index.css";
import Main from "./Main/Main";
import Suggested from "./Sugg/Sugg";
import Login from "./Login";
import AuthPage from "./Authpage";
import Profile from "./Prof/profile";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { auth } from "./firebaseConfig"; 


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState(null); // Start with no view

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setCurrentView("profile"); // Default to profile page after login
      } else {
        setUser(null);
        setCurrentView(null); // Reset view when logged out
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleHomeClick = () => {
    setCurrentView("home");
  };

  const handleProfileClick = () => {
    setCurrentView("profile");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!user ? (
        <AuthPage onAuthSuccess={(userData) => setUser(userData)} />
      ) : (
        <>
          <Header onHomeClick={handleHomeClick} onProfileClick={handleProfileClick} />
          {currentView === "home" && (
            <div className="content">
              <Header />
              <Main />
              <Suggested />
            </div>
          )}
          {currentView === "profile" && <Profile user={user} />}
        </>
      )}
    </div>
  );
}


export default App;