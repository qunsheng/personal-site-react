import React, { Component } from "react";
import BubbleChart from "./bubbleChart/BubbleChart";

class SkillSet extends Component {
  render() {
    return (
      <section id="section-a">
        <h1 className="App-intro">Technical Skills</h1>
        <BubbleChart
          width={800}
          height={800}
          fontFamily="Arial"
          data={[
            {
              label: "Java",
              value: 5
            },
            {
              label: "HTML/HTML5",
              value: 5
            },
            {
              label: "Angular",
              value: 6
            },

            {
              label: "React",
              value: 3
            },

            {
              label: "Highcharts/D3",
              value: 4
            },

            {
              label: "JQuery",
              value: 5
            },

            {
              label: "Restful Web Service",
              value: 5
            },

            {
              label: "Sybase/Oracle",
              value: 5
            },
            {
              label: "Git",
              value: 5
            }
          ]}
        />
      </section>
    );
  }
}

export default SkillSet;
