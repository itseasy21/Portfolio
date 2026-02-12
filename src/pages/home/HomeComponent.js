import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import usePageMetadata from "../usePageMetadata";

function Home(props) {
  usePageMetadata({
    title: "Shubham Mathur | Portfolio",
    description:
      "Full Stack Developer, Data Analytics & ETL Expert, and Blockchain Enthusiast.",
    path: "/",
  });

  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
