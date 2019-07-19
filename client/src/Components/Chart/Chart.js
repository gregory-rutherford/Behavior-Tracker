import React, { useState } from "react";

const Chart = function Chart() {
  const [taskName, setTaskName] = useState("");

  const handleTaskSubmit = event => {
    event.preventDefault();
    // axios call to api
    alert(`${taskName}`);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case "taskName":
        setTaskName(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <form>
        <p>Task: {taskName}</p>
        <input
          type="text"
          placeholder="Your Task"
          name="taskName"
          value={taskName}
          onChange={handleInputChange}
        />
        <button onClick={(event) => handleTaskSubmit(event)}>Submit</button>
      </form>
    </div>
  );
};

export default Chart;
