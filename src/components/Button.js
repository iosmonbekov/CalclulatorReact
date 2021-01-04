import React from "react";

const Button = (props) => {
  return (
    <button className="btn btn-secondary" onClick={props.click}>
      {props.text}
    </button>
  );
};

export default Button;
