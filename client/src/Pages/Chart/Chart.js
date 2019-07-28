import React, { useState, useEffect } from "react";
import Form from "../../Components/Form/Form";
import Checkbox from "../../Components/Checkbox/Checkbox";

const Chart = function Chart() {
  const [taskName, setTaskName] = useState("");
  const [data, setData] = useState([]);
  const [uniqueId, setUniqueId] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleTaskSubmit = event => {
    // storeId();
    event.preventDefault();
    let increase = uniqueId + 1;
    setUniqueId(increase);
    console.log(taskName);
    const inputs = { taskName: taskName, storageId: uniqueId };
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(inputs)
    };
    fetch("http://localhost:3030/api/data", options)
      .then(res => res.json().then(res => console.log(res)))
      .catch(err => {
        console.log("request failed" + err);
      });
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

  const handleCheckboxChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    switch (name) {
      case "checked":
        setChecked(value);
        break;
      default:
        break;
    }
  };

  const deleteTask = id => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:3030/api/data/" + id, options)
      .then(res => res.json()
      .then(res => console.log(res)))
      .catch(err => {
        console.log("request failed" + err);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3030/api/data");
      const json = await result.json();
      console.log(json);
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Form change={handleInputChange} submit={handleTaskSubmit} />
      <table>
        <thead>
          <tr>
            <th />
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        {data.map(item => (
          <tbody key={item._id}>
            <tr>
              <th>{item.taskName}</th>
              <td className="monday" data-attr={item.monday} id={item._id}>
                <Checkbox check={checked} onChange={handleCheckboxChange} />
                <button onClick={() => deleteTask(item._id)}>
                  click me to delete
                </button>
              </td>
              <td className="tuesday" />
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Chart;
