import React, { useState } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom";
import usePageMetadata from "../usePageMetadata";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);

  usePageMetadata({
    title: "Welcome | Shubham Mathur",
    description:
      "Loading Shubham Mathur's portfolio with projects, experience, and contact details.",
    path: "/splash",
  });
  setTimeout(() => setRedirect(true), 1000);

  return redirect ? (
    <Navigate to="/home" replace />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
}

export default Splash;
