import React from "react";

const Checkbox = props => {
  return (
    <div>
      <input
        name={props.day}
        defaultChecked={props.dbChecked}
        onChange={props.onChange}
        onClick={props.onClick}
        type="checkbox"
        day={props.day}
      />
      <input type="text"
      placeholder="Time spent on task"
       />
    </div>
  );
};

export default Checkbox;
