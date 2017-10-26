import React from "react";
import Nav from "./Nav";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";

const Project = props => {
  return (
    <div className="w3-container w3-margin-top" style={{}}>
      <Nav />
      <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
        <WorkExperience work={props.data.work} />
      </div>
      <Projects projects={props.data.projects} />
    </div>
  );
};
export default Project;
