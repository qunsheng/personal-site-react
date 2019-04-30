import React, { Component } from "react";
import SkillSet from "./components/SkillSet";
import "./App.css";
import WorkExperience from "./components/WorkExperience";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="showcase" className="showcase-container">
          <div className="bg-image" />
          <div className="showcase-box" id="bluebox">
            <div className="showcase-sub-box">
              <img src={require("./images/qunsheng.jpeg")} alt="Quentin Chen" />
            </div>
            <div className="showcase-sub-box">
              <h1> Quentin Chen</h1>
              <p>
                Over 20 years IT experience. Former heart and soul of NASDAQ
                biggest trading engine. Original author of many Wall Street well
                known applications such as BRASS/BNET. Passionate about
                JavaScript and web application development.
              </p>
            </div>
          </div>
        </header>

        <SkillSet />
        <WorkExperience />
      </React.Fragment>
    );
  }
}

export default App;
