import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Profile() {
  return (
    <div className="profile-container">
      <img
        className="profile-image"
        src="https://img.pikbest.com/ai/illus_our/20230424/d62c8221f3569d206e0d6e0bf901ce48.jpg!w700wp"
        alt="Profile"
      />
      <h1 className="profile-name">Thanakrit Siriphol</h1>
      <p className="profile-role">Fullstack Developer</p>
      <p className="profile-description">
        Hello my name is Bom , my destination is fullstack-Dev
      </p>
      <div className="profile-buttons">
        <a href="#projects" className="btn">View Projects</a>
        <Link to="/contact" className="btn-outline">Contact Me</Link>
      </div>
    </div>
  );
}

export default Profile;