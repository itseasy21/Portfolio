import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";

function Header(props) {
  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${theme.name === "light" ? "#F7D774" : "#646464"}`,
    },
  });

  const link = settings.isSplash ? "/splash" : "home";

  function changeTheme() {
    const newTheme = theme.name === "light" ? "dark" : "light";
    props.setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  const icon =
    theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <NavLink to={link} className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                className="homei"
                to="/home"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  borderRadius: 5,
                  color: theme.text,
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec"
                to="/education"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  borderRadius: 5,
                  color: theme.text,
                })}
              >
                Education and Certifications
              </NavLink>
            </li>
            <li>
              <NavLink
                className="exp"
                to="/experience"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  borderRadius: 5,
                  color: theme.text,
                })}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                className="proj"
                to="/projects"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  borderRadius: 5,
                  color: theme.text,
                })}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="contact"
                to="/contact"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  borderRadius: 5,
                  color: theme.text,
                })}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
          <button
            {...styles}
            className="icon-button"
            onClick={changeTheme}
            aria-label="Toggle theme"
          >
            {icon}
          </button>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
