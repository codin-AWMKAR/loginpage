import React from "react";
import "./Profile.css"; // Make sure to adjust the path to your CSS file
import marydoe from "../assets/Ellipse 114.png";
import camera from "../assets/Group 1585.png";
import PageTransition from '../PageTransition'; // Adjust the path

const Profile = () => {
  return (
   <PageTransition>
    <div className="profile-card">
      <div className="navbar">
        <div className="heading4">Account Settings</div>
      </div>
      <div className="photo">
        <img src={marydoe} alt="User" className='"userimage' />
        <img src={camera} alt="Camera" className="camera-icon" />
      </div>

      <div className="name">Mary Doe</div>
      <div className="email">Marry@Gmail.Com</div>

      <p className="paragraph4">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
    </PageTransition>
    
  );
};

export default Profile;
