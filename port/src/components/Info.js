import React from "react";
import Pic from "./pic";
import Adress from "./Adress";
import LeftSkills from "./LeftSkills";
import Languages from "./Languages";
import Education from "./Education";
import resumeData from "../resumeData.json";
const Info = props => {
  return (
    <div>
      <div
        className="w3-container w3-card-2 w3-white w3-margin-bottom"
        style={{ display: "inline-block", width: "50%" }}
      >
        <div className="w3-row-padding">
          <Pic />
          <Adress />
          <Education edu={props.data.edu} />
        </div>
      </div>
      <div
        className="w3-container w3-card-2 w3-white w3-margin-bottom"
        style={{ float: "right", width: "50%" }}
      >
        <div className="w3-row-padding">
          <LeftSkills skills={props.data.skills} />
          <Languages languages={props.data.languages} />
        </div>
      </div>
    </div>
  );
};
export default Info;
