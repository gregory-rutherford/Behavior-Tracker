import React, { useState, useEffect } from "react";
import Form from "../../Components/Form/Form";
import Checkbox from "../../Components/Checkbox/Checkbox";
import DeleteBtn from "../../Components/DeleteBtn/DeleteBtn";

const Chart = function Chart() {
  const [taskName, setTaskName] = useState("");
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(null);

  //submit a new task
  const handleTaskSubmit = event => {
    event.preventDefault();
    console.log(taskName);
    const inputs = { taskName: taskName };
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(inputs)
    };
    fetch("http://localhost:3030/api/data", options)
      .then(res =>
        res
          .json()
          .then(res => setData([...data, res]))
          .then(res => console.log(res))
      )
      .catch(err => {
        console.log("request failed" + err);
      });
  };

  //getting input from task form
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
    console.log("hello this is working, you've passed me properly gregory");
    const { name, checked } = event.target;
    console.log(event.target);
    console.log(name, checked)
    switch (name) {
      case "monday":
        setChecked(checked);
        break;
        default:
          break;
    }
  };

  // const handleCheckboxChange = event => {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const day = target.day;

  //   switch (day) {
  //     case "checked":
  //       setChecked(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const deleteTask = id => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:3030/api/data/" + id, options)
      .then(res =>
        res
          .json()
          .then(fetchData(data))
          .then(res => console.log(res))
      )
      .catch(err => {
        console.log("request failed" + err);
      });
  };

  //on this click setchecked to whatever the day and boolean value is
  const updateTask = id => {
    // set the input to the checked state array.
    // const input = { monday: true };
    console.log(id);
    console.log(checked);
    // console.log(day);
    // console.log(value);
    // const options = {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(input)
    // };

    // fetch("http://localhost:3030/api/data/" + id, options)
    //   .then(res => res.json()
    //   .then(res => console.log(res)))
    //   .then(fetchData(data))
    //   .then(setChecked([]))
    //   .catch(err => {
    //     console.log("request failed" + err);
    //   });
  };

  //pulls any data from the DB and places it in state.
  const fetchData = async () => {
    const response = await fetch(`http://localhost:3030/api/data`);
    const json = await response.json();
    setData(json);
  };
  useEffect(() => {
    fetchData(data);
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
            {console.log(item)}
            <tr>
              <th>{item.taskName}</th>
              <td className="monday">
                <Checkbox
                  onChange={() => updateTask(item._id)}
                  onClick={(event) => handleCheckboxChange(event)}
                  dbChecked={item.monday}
                  day="monday"
                  name={item.taskName}
                />
              </td>
              <td className="tuesday">
                <Checkbox checked={item.tuesday} />
              </td>
              <td className="wednesday">
                <Checkbox checked={item.wednesday} />
              </td>
              <td className="thursday">
                <Checkbox checked={item.thursday} />
              </td>
              <td className="friday">
                <Checkbox checked={item.friday} />
              </td>
              <td className="saturday">
                <Checkbox checked={item.saturday} />
              </td>
              <td className="sunday">
                <Checkbox checked={item.sunday} />
              </td>
              <DeleteBtn onClick={() => deleteTask(item._id)} />
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Chart;
