import React from "react";

const Checkbox = props => {
  return (
    <div>
      <input
        name={props.day}
        defaultChecked={props.dbChecked}
        onChange={props.onChange}
        type="checkbox"
        checked={props.checked}
      />
    </div>
  );
};

export default Checkbox;
