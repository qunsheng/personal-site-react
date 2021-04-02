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
    if (width !== this.state.width) {
      this.setState({
        width: width,
        height: height
      });
    }
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
              sublabel: "10+ Years",
              value: 3
            },
            {
              label: "React",
              sublabel: "3 Years",
              value: 8
            },
            {
              label: "Angular",
              sublabel: "6 Years",
              value: 3
            },

            {
              label: "Git",
              sublabel: "6 Years",
              value: 4
            },

            {
              label: "D3 / Highcharts",
              sublabel: "6 Years",
              value: 5
            },

            {
              label: "Restful Web Service",
              sublabel: "8 Years",
              value: 5
            },

            {
              label: "Sybase / Oracle",
              sublabel: "10+ Years",
              value: 4
            },
            {
              label: "JavaScript",
              sublabel: "10+ Years",
              value: 9
            }
          ]}
        />
      </section>
    );
  }
}

export default SkillSet;
