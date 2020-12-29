import React, { Component } from "react";
import "../css/Teacher.css";

export default class Student extends Component {
  handleClick = () => {
    const { updateActive, screenNumber } = this.props;
    updateActive(0);
  };
  handleLoginClick = () => {
    const { updateActive, screenNumber } = this.props;
    updateActive(5);
  };
  handleSignupClick = () => {
    const { updateActive, screenNumber } = this.props;
    updateActive(6);
  };

  componentDidMount() {
    var clickButton = document.getElementById("back-button");
    clickButton.onclick = this.handleClick;
    var loginButton = document.getElementById("login-button");
    loginButton.onclick = this.handleLoginClick;
    var signup = document.getElementById("signup-button");
    signup.onclick = this.handleSignupClick;
  }
  render() {
    return (
      <div className="main-container">
        <p id="heading">WELCOME TO TEACHERS PAGE</p>
        <div className="buttons-container">
          <button id="login-button">Login</button>
          <button id="signup-button">Signup</button>
          <button id="back-button">Go back</button>
        </div>
      </div>
    );
  }
}
