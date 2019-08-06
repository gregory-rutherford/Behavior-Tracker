import React from "react";

const Form = (props) => {


    return (
      <form>
        <input
          type="text"
          placeholder="Add a new task"
          name="taskName"
          value={props.taskName}
          onChange={props.change}
        />
        <button type="submit" onClick={props.submit}>Submit Task</button>
      </form>
    );
}

export default Form;