import React, { Component } from "react";
import "../css/Login.css";

export default class TeacherLogin extends Component {
  handleClick = () => {
    const { updateActive, screenNumber } = this.props;
    updateActive(2);
  };
  handleSubmit = () => {
    const { updateActive, screenNumber } = this.props;
    updateActive(8);
  };

  componentDidMount() {
    var clickButton = document.getElementById("go-back");
    clickButton.onclick = this.handleClick;
    var submitButton = document.getElementById("submit-button");
    submitButton.onclick = this.handleSubmit;
  }
  render() {
    return (
      <div id="screen">
        <form>
          <p>
            <h1> Teacher Login Page</h1>
          </p>
          <p id="email-container">
            email <input type="email" id="email"></input>
          </p>
          <p id="password-container">
            password<input type="password" id="password"></input>
          </p>
          <input type="Submit" value="Submit" id="submit-button"></input>
          <p>
            <button id="go-back">Go back</button>
          </p>
        </form>
      </div>
    );
  }
}
