import { Component } from "react";
import "../css/App.css";
import Home from "./Home";
import StudentLogin from "./StudentLogin";
import StudentSignup from "./StudentSignup";
import TeacherLogin from "./TeacherLogin";
import TeacherSignup from "./TeacherSignup";
import Student from "./Student";
import Teacher from "./Teacher";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";

export default class App extends Component {
  state = {
    screenNumber: 0,
  };
  constructor() {
    super();
  }

  updateActive = (screenNum) => {
    this.setState({ screenNumber: screenNum });
  };
  render() {
    const { screenNumber } = this.state;

    return (
      <div className="App">
        {screenNumber == 0 && (
          <Home screenNumber={screenNumber} updateActive={this.updateActive} />
        )}
        {screenNumber == 1 && (
          <Student
            screenNumber={screenNumber}
            updateActive={this.updateActive}
          />
        )}
        {screenNumber == 2 && (
          <Teacher
            screenNumber={screenNumber}
            updateActive={this.updateActive}
          />
        )}
        {screenNumber == 3 && (
          <StudentLogin
            screenNumber={screenNumber}
            updateActive={this.updateActive}
          />
        )}
        {screenNumber == 4 && (
          <StudentSignup
            screenNumber={screenNumber}
            updateActive={this.updateActive}
          />
        )}
        {screenNumber == 5 && (
          <TeacherLogin
            screenNumber={screenNumber}
            updateActive={this.updateActive}
          />
        )}
        {screenNumber == 6 && (
          <TeacherSignup
            screenNumber={screenNumber}
            updateActive={this.updateActive}
          />
        )}
        {screenNumber == 7 && (
          <StudentDashboard
            screenNumber={screenNumber}
            updateActive={this.updateActive}
          />
        )}
        {screenNumber == 8 && (
          <TeacherDashboard
            screenNumber={screenNumber}
            updateActive={this.updateActive}
          />
        )}
      </div>
    );
  }
}
