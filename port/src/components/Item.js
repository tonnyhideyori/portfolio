import React from "react";

const Item = props => {
  return (
    <div className="w3-container">
      <h5 className="w3-opacity">
        <b>{props.workItem.position}</b>
      </h5>
      <h6 className="w3-text-red">
        <i className="fa fa-calendar fa-fw w3-margin-right" />
        {props.workItem.timeLine}
      </h6>
      <p>{props.workItem.summary}</p>
      <hr />
    </div>
  );
};
export default Item;
