import React from "react";

const Form = (props) => {


    return (
      <form>
        <p>Task: {props.taskName}</p>
        <input
          type="text"
          placeholder="Your Task"
          name="taskName"
          value={props.taskName}
          onChange={props.change}
        />
        <button type="submit" onClick={props.submit}>Submit</button>
      </form>
    );
}

export default Form;