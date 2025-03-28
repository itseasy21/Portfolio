import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  return (
    <section className="software-skills-section">
      <div className="software-skills-main-div">
        <h3 className="skills-heading">Technical Skills</h3>
        <p className="skills-description">
          Technologies and tools I've worked with as a Full Stack Developer
        </p>
        <ul className="dev-icons" aria-label="Technology skills list">
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-${logo.skillName}`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li
                  className="software-skill-inline"
                  name={logo.skillName}
                  aria-label={logo.skillName}
                >
                  <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline="false"
                    role="img"
                    aria-label={`${logo.skillName} icon`}
                  ></span>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default SoftwareSkill;
