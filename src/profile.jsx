import React, { useEffect, useState } from "react";
import { fetchUserProfile, logout } from "./auth";

const Profile = ({ user }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await fetchUserProfile(user.uid);
      setProfile(profileData);
    };
    fetchProfile();
  }, [user]);

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {profile.fullName}!</h1>
      <p>Email: {profile.email}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Profile;
