import React, { Component } from "react";
import VerticalTimeline from "./verticalTimeLine/VerticalTimeline";
import VerticalTimelineElement from "./verticalTimeLine/VerticalTimelineElement";

import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import SchoolIcon from "@material-ui/icons/School";
import "./verticalTimeLine/main.css";
import "./verticalTimeLine/VerticalTimeline.css";
import "./verticalTimeLine/VerticalTimelineElement.css";

export default class WorkExperience extends Component {
  render() {
    return (
      <section id="section-b">
        <div className="heading">
          <h2>Work experience & Education</h2>
          <p> My previous jobs & my qualificications</p>
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="6/2014 – present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Front End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Morgan Stanley, New York, NY (Contractor)
            </h4>
            <p>
              Implemented Angular2+/Restful web application from both server and
              client side.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="3/2014 – 6/201"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Architect/Front End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Door 3 Business Applications Inc., New York, NY (Contractor)
            </h4>
            <p>
              Implemented Aether Store Dashboard Application client side using
              AngularJS and Restful API.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="8/2013 - 1/2014"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Department of Sanitation, New York, NY (Contractor)
            </h4>
            <p>System improvement analysis, System security risk analysis</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="5/2012 - 7/2013"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Front End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bank of New York Mellon, Jersey City, NJ (Contractor)
            </h4>
            <p>
              JavaScript and CSS code upgrade latest version and firm standard
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="1995"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Certificate of Brokerage Operations
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              New York Institute of Finance, New York
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="1992"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              M.E. Mechanical Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Florida Atlantic University, Boca Raton, FL
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="1988"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Masters of Production Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dalian Railway University, Dalian, China
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </section>
    );
  }
}
