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
        checked={props.checked}
      />
      <input
        type="text"
        placeholder="Time spent on task"
        name={props.day + props.id}
        onChange={event => props.hoursChange(event, props.day + props.id)}
        value={props.hours}
      />
      <button type="submit" onClick={() => props.submit(props.id)}>
        Add hours
      </button>
    </div>
  );
};

export default Checkbox;
