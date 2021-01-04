import React from "react";

const Display = (props) => {
  return (
    <div className="display">
      <div className="problem">
        <div>{props.fnum}</div>
        <div>{props.op}</div>
        <div>{props.snum}</div>
      </div>
      <div className="answer">{props.answer}</div>
    </div>
  );
};

export default Display;
