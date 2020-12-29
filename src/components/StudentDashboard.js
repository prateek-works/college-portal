import React, { Component } from "react";
import "../css/StudentDashboard.css";

export default class StudentDashboard extends Component {
  handleClick = () => {
    const { updateActive, screenNumber } = this.props;
    updateActive(1);
  };

  componentDidMount() {
    var clickButton = document.getElementById("logout");
    clickButton.onclick = this.handleClick;
  }
  render() {
    return (
      <div id="screen">
        <p id="logout">Logout</p>
        <div id="buttons">
          <button> Submitted Assignments</button>
          <button> Upcoming Assignments</button>
        </div>
      </div>
    );
  }
}
