import React from "react";

const Checkbox = props => {
  return (
    <input
      name={props.day}
      defaultChecked={props.dbChecked}
      onChange={props.onChange}
      onClick={props.onClick}
      type="checkbox"
      day={props.day}
    />
  );
};

export default Checkbox;
