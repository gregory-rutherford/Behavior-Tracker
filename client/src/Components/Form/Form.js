import React from "react";
import "./form.css";

const Form = (props) => {


    return (
      <form className="taskForm">
      <label>Task Entry</label>
        <input
          type="text"
          placeholder="Add a new task"
          name="taskName"
          value={props.value}
          onChange={props.onChange}
          required
        />
        <button type="submit" onClick={props.submit}>
          &#43;
        </button>
      </form>
    );
}

export default Form;