import React from "react";

const HoursForm = props => {
    return (
      <div>
        <input
          type="text"
          placeholder="Approximate hours this week"
          name={props.taskName + props.id}
          onChange={event => props.hoursChange(event, props.taskName + props.id)}
          value={props.hours}
          size="28"
          required
        />
        <button type="submit" onClick={() => props.submit(props.id)}>
          Add hours
        </button>
      </div>
    );
};

export default HoursForm;