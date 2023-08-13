import React from "react";
import "./Home.css"; // Make sure to adjust the path to your CSS file
import { Link } from "react-router-dom";
import PageTransition from "../PageTransition"; // Adjust the path

const Home = () => {
  return (
    <PageTransition>
      <div className="page">
        <div className="container1">
          <div className="heading1">
            <h1>Welcome to PopX</h1>
          </div>

          <div className="paragraph1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>

          <Link to="/createaccount">
            <button className="button1">Create Account</button>
          </Link>
          <Link to="/login">
            <button className="button2">Already Registered? Login</button>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
