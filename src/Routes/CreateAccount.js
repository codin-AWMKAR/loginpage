import React from "react";
import "./CreateAccount.css"; // Make sure to adjust the path to your CSS file
import { Link } from "react-router-dom";
import PageTransition from "../PageTransition"; // Adjust the path

const CreateAccount = () => {
  return (
    <PageTransition>
      <div className="newContainer">
        <h1 className="newHeading">Create your PopX account</h1>
        <div className="newFormFieldContainer">
          <label className="newFormLabel">
            Full Name <span className="mandatory">*</span>
          </label>
          <input
            className="newFormField"
            type="text"
            placeholder="Enter Your Full Name"
            defaultValue="Mary Doe"
          />
        </div>

        <div className="newFormFieldContainer">
          <label className="newFormLabel">
            Phone number <span className="mandatory">*</span>
          </label>
          <input
            className="newFormField"
            type="text"
            placeholder="Enter your phone number"
            defaultValue="Mary Doe"
          />
        </div>

        <div className="newFormFieldContainer">
          <label className="newFormLabel">
            Email Address <span className="mandatory">*</span>
          </label>
          <input
            className="newFormField"
            type="text"
            placeholder="Enter your email"
            defaultValue="Mary Doe"
          />
        </div>

        <div className="newFormFieldContainer">
          <label className="newFormLabel">
            Password <span className="mandatory">*</span>
          </label>
          <input
            className="newFormField"
            type="text"
            placeholder="Enter your password"
            defaultValue="Mary Doe"
          />
        </div>

        <div className="newFormFieldContainer">
          <label className="newFormLabel">Company name</label>
          <input
            className="newFormField"
            type="Companyname"
            placeholder="Enter your Company Name"
            defaultValue="Mary Doe"
          />
        </div>

        <div className="newFormFieldContainer">
          <label className="newFormLabel">
            Are you an agency?<span className="mandatory">*</span>
          </label>
          <div className="newRadioContainer">
            <input
              className="newRadio"
              type="radio"
              name="agency"
              value="yes"
            />{" "}
            Yes
            <input
              className="newRadio"
              type="radio"
              name="agency"
              value="no"
            />{" "}
            No
          </div>
        </div>
        <Link to="/profile">
          <button className="newLoginButton">Create Account</button>
        </Link>
      </div>
    </PageTransition>
  );
};

export default CreateAccount;
