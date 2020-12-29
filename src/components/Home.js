import React, { Component } from "react";
import "../css/Home.css";

export default class Student extends Component {
  handleStudentClick = () => {
    const { updateActive, screenNumber } = this.props;
    updateActive(1);
  };
  handleTeacherClick = () => {
    const { updateActive, screenNumber } = this.props;
    updateActive(2);
  };

  componentDidMount() {
    var studentButton = document.getElementById("student-button");
    studentButton.onclick = this.handleStudentClick;
    var teacherButton = document.getElementById("teacher-button");
    teacherButton.onclick = this.handleTeacherClick;
  }

  render() {
    return (
      <div className="main-container">
        <div id="outer-area">
          <div id="heading-container">
            <p>Welcome to the College Portal</p>
          </div>
          <div id="buttons-container">
            <button id="student-button">STUDENT SECTION</button>
            <button id="teacher-button">TEACHER SECTION</button>
          </div>
        </div>
      </div>
    );
  }
}
