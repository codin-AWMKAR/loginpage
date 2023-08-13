import React from "react";
import "./Login.css"; 
import { Link } from 'react-router-dom';
import PageTransition from '../PageTransition'; // Adjust the path

const Login = () => {
  return (
    <PageTransition>
    <div className="container3">
      <h1 className="heading3">Signin to your PopX account</h1>
      <p className="paragraphl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className="formFieldContainer3">
        <label className="formLabel3">Email Address</label>
        <input
          className="formField3"
          type="text"
          placeholder="Enter your email"
        />
      </div>
      <div className="formFieldContainer3">
        <div>
          <label className="formLabel3">Password</label>
        </div>

        <input
          className="formField3"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <Link to="/profile"><button className="loginButton3">Login</button></Link>
    </div>
   </PageTransition>
  );
};

export default Login;
