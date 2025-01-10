import React from 'react';
import './Profile.css';
import profImg from '../prof.png';

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-container">
          <img 
            src={profImg}
            alt="Profile" 
            className="profile-image" 
          />
        </div>
        
        <div className="profile-info">
          <div className="profile-top">
            <h2 className="username">{user?.email?.split('@')[0] || 'username'}</h2>
            <div className="profile-actions">
              <button className="edit-profile-btn">Edit profile</button>
              <button className="view-archive-btn">View archive</button>
              <button className="settings-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="profile-stats">
            <div className="stat">
              <span className="stat-number">0</span> posts
            </div>
            <div className="stat">
              <span className="stat-number">237</span> followers
            </div>
            <div className="stat">
              <span className="stat-number">197</span> following
            </div>
          </div>

          <div className="profile-bio">
            <h1 className="full-name">{user?.profile?.fullName || 'Name'}</h1>
          </div>
        </div>
      </div>

      <div className="profile-highlights">
        <div className="highlight new">
          <div className="highlight-image">
            <span className="plus">+</span>
          </div>
          <span className="highlight-text">New</span>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-tabs">
          <button className="tab-btn active">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M4 0h4a4 4 0 014 4v4a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4zm0 2a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V4a2 2 0 00-2-2H4z"/>
            </svg>
            POSTS
          </button>
          <button className="tab-btn">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M10.5 1.5h-9v9h9v-9zM11 0H1a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V1a1 1 0 00-1-1z"/>
            </svg>
            SAVED
          </button>
          <button className="tab-btn">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h.615v-.589a1.59 1.59 0 00-.465-1.124L12 0 9.927 2.073a1.59 1.59 0 00-.465 1.124v.589h.615c.42 0 .824-.166 1.124-.465z"/>
            </svg>
            TAGGED
          </button>
        </div>

        <div className="no-posts">
          <p>No posts added</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

