import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        title="GitHub Profile"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.gitlab}
        className="icon-button gitlab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitLab Profile"
        title="GitLab Profile"
      >
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        title="LinkedIn Profile"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email Contact"
        title="Email Contact"
      >
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.twitter}
        className="icon-button twitter"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter Profile"
        title="Twitter Profile"
      >
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Profile"
        title="Instagram Profile"
      >
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>
    </div>
  );
}
