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
            date="9/2019 – 2/2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
            Full Stack Web Develope
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
            Bank of America, New York, NY (Contractor)
            </h4>
            <p>
              Implemented a ReactJs/Express web application from scratch.
            </p>
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> React</span>
              </div>
              <div class="tech-div">
                <span class="tech-span"> Node</span>
              </div>
              <div class="tech-div">
                <span class="tech-span"> Express</span>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="6/2014 – 7/2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
            Full Stack Web Develope
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Morgan Stanley, New York, NY (Contractor)
            </h4>
            <p>
              Implemented Angular2+/Restful web application from both server and
              client side.
            </p>
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> Angular</span>
              </div>

              <div class="tech-div">
                <span class="tech-span"> React</span>
              </div>

              <div class="tech-div">
                <span class="tech-span"> Java</span>
              </div>
              <div class="tech-div">
                <span class="tech-span"> Spring</span>
              </div>
            </div>
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
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> Angular</span>
              </div>
            </div>
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

            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> Java</span>
              </div>
            </div>
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
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> DOJO</span>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="8/2010-12/2011 "
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rogers, Brampton, Ontario (Contractor)
            </h4>
            <p>
              Designed and implemented Price Plan Consumer Self Service web page
              using JQuery
            </p>
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> jQuery</span>
              </div>
              <div class="tech-div">
                <span class="tech-span"> Java</span>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11/2009-8/2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Front End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              AMDOCS, Toronto, Ontario (Contractor)
            </h4>
            <p>
              Designed and implemented Price Plan Consumer Self Service web page
              using JQuery
            </p>
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> jQuery</span>
              </div>
              <div class="tech-div">
                <span class="tech-span"> Java</span>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="12/2008-5/2009"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Application Consultant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              CIBC World Market, Toronto, Ontario (Employee)
            </h4>
            <p>Improved and supported CIBC Work Market Stock Loan System</p>
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> Smart Client</span>
              </div>
              <div class="tech-div">
                <span class="tech-span"> Java</span>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11/2007-10/2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Goldman Sachs, New York, NY (Contractor)
            </h4>
            <p>Test Driven Web Based High Performance Risk System Framework</p>
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> Java</span>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="06/2005-09/2007"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Citigroup, New York, NY (Contractor)
            </h4>
            <p>
              Implemented a gateway system connect Reuters RTFX online FX
              trading system and Citigroups internal trading system
            </p>
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> Java</span>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/2004-05/2005"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Merrill Lynch, NY (Contractor)
            </h4>
            <p>
              Merrill Lynch automatic stock trading system.design and
              implementation
            </p>
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> Java</span>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="05/2001-04/2004"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">
              RBC Capital Markets, Toronto, Ontario (Employee)
            </h4>
            <p>
              Lead designer, implementer and supporter of an email based order
              entry system
            </p>
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> C++</span>
              </div>
              <div class="tech-div">
                <span class="tech-span"> Java</span>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="01/2001-04/2001"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Sr. Software Developer/Architect
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Nubase Technologies Inc., Toronto, Ontario (Employee)
            </h4>
            <p>
              Lead designer, implementer and supporter of an email based order
              entry system
            </p>
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> Java</span>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="08/1999-12/2000"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Sr. Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Blockade System Corporation, Toronto, Ontario (Employee)
            </h4>
            <p>
              Design and implemented both web based and voice based password
              reset system
            </p>
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> C++</span>
              </div>
              <div class="tech-div">
                <span class="tech-span"> Java</span>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="02/1996-07/1999"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              System Analyst/ Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Automated Securities Clearance Ltd., Weehawken, NJ (Employee)
            </h4>
            <p>Original author of BRASS Network System (BNET)</p>
            <div class="tech-section">
              <div class="tech-div">
                <span class="tech-span"> C++</span>
              </div>
            </div>
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
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </section>
    );
  }
}
