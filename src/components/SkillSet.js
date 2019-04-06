import React, { Component } from "react";
import BubbleChart from "./bubbleChart/BubbleChart";

class SkillSet extends Component {
  state = {
    width: 600,
    height: 600
  };

  handleWindowResize = () => {
    let width = Math.min(window.innerWidth - 20, 600);
    let height = Math.min(width, 600);
    this.setState({
      width: width,
      height: height
    });
  };

  componentDidMount() {
    this.handleWindowResize();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  render() {
    return (
      <section id="section-a">
        <h1>Technical Skills</h1>
        <p>I can say i’m quite good at</p>
        <BubbleChart
          width={this.state.width}
          height={this.state.height}
          fontFamily="Arial"
          data={[
            {
              label: "Java",
              value: 3
            },
            {
              label: "HTML5",
              value: 3
            },
            {
              label: "Angular",
              value: 8
            },

            {
              label: "React",
              value: 8
            },

            {
              label: "D3 / Highcharts",
              value: 5
            },

            {
              label: "Restful Web Service",
              value: 5
            },

            {
              label: "Sybase / Oracle",
              value: 4
            },
            {
              label: "Git",
              value: 3
            }
          ]}
        />
      </section>
    );
  }
}

export default SkillSet;
