import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;
  const navigate = useNavigate();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <section
        className="greet-main"
        id="greeting"
        aria-labelledby="greeting-title"
      >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 id="greeting-title" className="greeting-text">
                {greeting.title}
              </h1>
              <h2
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </h2>
              <p className="greeting-description">
                Passionate about creating robust, scalable web applications
                using modern technologies. Specializing in full-stack
                development with expertise in React, Node.js, and cloud
                technologies.
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    navigate("/contact");
                  }}
                  aria-label="Contact Me"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud
              theme={theme}
              alt="Shubham Mathur - Developer Illustration"
            />
          </div>
        </div>
      </section>
    </Fade>
  );
}
