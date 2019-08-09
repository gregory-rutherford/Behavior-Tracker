import React, { useState, useEffect } from "react";
import Form from "../../Components/Form/Form";
import Checkbox from "../../Components/Checkbox/Checkbox";
import DeleteBtn from "../../Components/DeleteBtn/DeleteBtn";

const Chart = function Chart() {
  const [taskName, setTaskName] = useState("");
  const [data, setData] = useState([]);
  const [hours, setHours] = useState("");
  const [returnedHours, setReturnedHours] = useState("");

  //submit a new task
  const handleTaskSubmit = event => {
    event.preventDefault();
    console.log(taskName);
    const inputs = { taskName: taskName };
    const options = {
      headers: {
        "Content-Type": "application/json"
      },
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

  const handleHoursChange = (event, dayId) => {
    const { name, value } = event.target;
    switch (name) {
      case dayId:
        setHours(value);
        break;
      default:
        break;
    }
  };

  //submit hours 
  const submitHours = id => {
    const input = {
      hours: hours
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    };
    fetch(`http://localhost:3030/api/data/${id}`, options)
    .then(res => res.json())
    .then(fetchData(data))
  };

  //get hours
  
  const getHours = id => {
    fetch(`http://localhost:3030/api/data/${id}`)
    .then(res => res.json())
    .then(res => setReturnedHours(res))
    .catch(err => (console.log(err)));
  };

  // const handleCheckboxChange = event => {
  //   const { name, checked } = event.target;
  //   console.log(name, checked);
  //   switch (name) {
  //     case "monday":
  //       setChecked(checked);
  //       break;
  //     case "tuesday":
  //       setChecked(checked);
  //       break;
  //     case "wednesday":
  //       setChecked(checked);
  //       break;
  //     case "thursday":
  //       setChecked(checked);
  //       break;
  //     case "friday":
  //       setChecked(checked);
  //       break;
  //     case "saturday":
  //       setChecked(checked);
  //       break;
  //     case "sunday":
  //       setChecked(checked);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const updateTask = (id, day, value) => {
    const input = {
      [day]: value
    };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    };
    fetch(`http://localhost:3030/api/data/${id}`, options)
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

  //delete a particular task
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
                  onChange={() =>
                    updateTask(item._id, "monday", !item.monday)
                  }
                  // onClick={event => handleCheckboxChange(event)}
                  dbChecked={item.monday}
                  day="monday"
                  taskName={item.taskName}
                  id={item._id}
                  hoursChange={handleHoursChange}
                  submit={submitHours}
                />
                <p onClick={() => getHours(item.hours)}>hey{returnedHours}</p>
              </td>
              <td className="tuesday">
                <Checkbox
                  dbChecked={item.tuesday}
                  onChange={() =>
                    updateTask(item._id, "tuesday", !item.tuesday)
                  }
                  // onClick={event => handleCheckboxChange(event)}
                  taskName={item.taskName}
                  id={item._id}
                  hoursChange={handleHoursChange}
                />
              </td>
              <td className="wednesday">
                <Checkbox
                  dbChecked={item.wednesday}
                  onChange={() =>
                    updateTask(item._id, "wednesday", !item.wednesday)
                  }
                  // onClick={event => handleCheckboxChange(event)}
                  taskName={item.taskName}
                  id={item._id}
                  hoursChange={handleHoursChange}
                />
              </td>
              <td className="thursday">
                <Checkbox
                  dbChecked={item.thursday}
                  onChange={() =>
                    updateTask(item._id, "thursday", !item.thursday)
                  }
                  // onClick={event => handleCheckboxChange(event)}
                  taskName={item.taskName}
                  id={item._id}
                  hoursChange={handleHoursChange}
                />
              </td>
              <td className="friday">
                <Checkbox
                  dbChecked={item.friday}
                  onChange={() =>
                    updateTask(item._id, "friday", !item.friday)
                  }
                  // onClick={event => handleCheckboxChange(event)}
                  taskName={item.taskName}
                  id={item._id}
                  hoursChange={handleHoursChange}
                />
              </td>
              <td className="saturday">
                <Checkbox
                  dbChecked={item.saturday}
                  onChange={() =>
                    updateTask(item._id, "saturday", !item.saturday)
                  }
                  // onClick={event => handleCheckboxChange(event)}
                  taskName={item.taskName}
                  id={item._id}
                  hoursChange={handleHoursChange}
                />
              </td>
              <td className="sunday">
                <Checkbox
                  dbChecked={item.sunday}
                  onChange={() =>
                    updateTask(item._id, "sunday", !item.sunday)
                  }
                  // onClick={event => handleCheckboxChange(event)}
                  taskName={item.taskName}
                  id={item._id}
                  hoursChange={handleHoursChange}
                />
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
