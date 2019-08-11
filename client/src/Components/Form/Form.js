import React from "react";

const Form = (props) => {


    return (
      <form className="taskForm">
        <input
          type="text"
          placeholder="Add a new task"
          name="taskName"
          value={props.value}
          onChange={props.onChange}
          size="14"
          required
        />
        <button type="submit" onClick={props.submit}>
          &#43;
        </button>
      </form>
    );
}

export default Form;