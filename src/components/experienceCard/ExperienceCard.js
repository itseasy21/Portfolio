import React, { useState, useEffect } from "react";
import "./ExperienceCard.css";
import LazyImage from "../LazyImage";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  const [logoSrc, setLogoSrc] = useState(null);

  useEffect(() => {
    // Use a simpler approach to load images
    try {
      // Create a direct URL to the image
      const imageUrl = new URL(
        `../../assests/images/${experience["logo_path"]}`,
        import.meta.url
      ).href;
      setLogoSrc(imageUrl);
    } catch (error) {
      console.error("Error loading image:", error);
    }
  }, [experience]);

  function NewlineText(text) {
    const newText = text
      .split("\n")
      .map((str, index) => <p key={index}>{str}</p>);
    return newText;
  }

  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience["color"]}`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div className="experience-card-logo-div">
        {logoSrc && (
          <LazyImage
            className="experience-card-logo"
            src={logoSrc}
            alt={experience["company"]}
          />
        )}
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: theme.text }}>
              {experience["title"]}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              <a
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience["company"]}
              </a>
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              {experience["duration"]}
            </p>
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              {experience["location"]}
            </p>
          </div>
        </div>
        <div
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          {NewlineText(experience["description"])}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
