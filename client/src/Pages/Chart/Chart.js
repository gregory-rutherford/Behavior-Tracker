import React, { useState, useEffect } from "react";
import Form from "../../Components/Form/Form";
import Checkbox from "../../Components/Checkbox/Checkbox";
import DeleteBtn from "../../Components/DeleteBtn/DeleteBtn";
import HoursForm from "../../Components/HoursForm/HoursForm";
import "./Chart.css";

const Chart = function Chart() {
  const [taskName, setTaskName] = useState("");
  const [data, setData] = useState([]);
  const [hours, setHours] = useState("");

  //-------------FORM HANDLING -----------------
  //getting input from task form
  const onChange = event => {
    const { value } = event.target;
    setTaskName(value);
    };
  

  const handleHoursChange = (event, taskNameId) => {
    const { name, value } = event.target;
    switch (name) {
      case taskNameId:
        setHours(value);
        break;
      default:
        break;
    }
  };
  //----------------------------------------

  //--------------FETCH CALLS --------------
  //submit a new task
  const handleTaskSubmit = event => {
    event.preventDefault();
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
      setTaskName("");
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
      .then(res =>
        res
          .json()
          .then(fetchData(data))
          .then(res => console.log(res))
      )
      .catch(err => console.log(err));
  };

  //get hours
  const getHours = id => {
    fetch(`http://localhost:3030/api/data/${id}`)
      .then(res => res.json())
      .catch(err => console.log(err));
  };

  //update a task with boolean value from input select
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
  //-----------------------------------------------------

  //-------------useEffect Global data set----------------
  //pulls any data from the DB and places it in state.
  const fetchData = async () => {
    const response = await fetch(`http://localhost:3030/api/data`);
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData(data);
  }, []);

  //--------------------------------------------------------

  //-----------Post all data to pastTask, clear all current week ----------
  


  return (
    <div className="behvChart">
      <Form onChange={onChange} submit={handleTaskSubmit} value={taskName} />
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
            <th>Hours</th>
          </tr>
        </thead>
        {data.map(item => (
          <tbody key={item._id}>
            <tr>
              <th>{item.taskName}</th>
              <td className="monday">
                <Checkbox
                  onChange={() =>
                    updateTask(item._id, "monday", !item.monday)
                  }
                  dbChecked={item.monday}
                  day="monday"
                  taskName={item.taskName}
                  id={item._id}
                  submit={submitHours}
                />
                {/* <p onClick={() => getHours(item._id)}>hey}</p> */}
              </td>
              <td className="tuesday">
                <Checkbox
                  dbChecked={item.tuesday}
                  onChange={() =>
                    updateTask(item._id, "tuesday", !item.tuesday)
                  }
                  taskName={item.taskName}
                  id={item._id}
                  day="tuesday"
                />
              </td>
              <td className="wednesday">
                <Checkbox
                  dbChecked={item.wednesday}
                  onChange={() =>
                    updateTask(item._id, "wednesday", !item.wednesday)
                  }
                  taskName={item.taskName}
                  id={item._id}
                  day="wednesday"
                />
              </td>
              <td className="thursday">
                <Checkbox
                  dbChecked={item.thursday}
                  onChange={() =>
                    updateTask(item._id, "thursday", !item.thursday)
                  }
                  taskName={item.taskName}
                  id={item._id}
                  day="thursday"
                />
              </td>
              <td className="friday">
                <Checkbox
                  dbChecked={item.friday}
                  onChange={() =>
                    updateTask(item._id, "friday", !item.friday)
                  }
                  taskName={item.taskName}
                  id={item._id}
                  day="friday"
                />
              </td>
              <td className="saturday">
                <Checkbox
                  dbChecked={item.saturday}
                  onChange={() =>
                    updateTask(item._id, "saturday", !item.saturday)
                  }
                  taskName={item.taskName}
                  id={item._id}
                  day="saturday"
                />
              </td>
              <td className="sunday">
                <Checkbox
                  dbChecked={item.sunday}
                  onChange={() =>
                    updateTask(item._id, "sunday", !item.sunday)
                  }
                  taskName={item.taskName}
                  id={item._id}
                  day="sunday"
                />
              </td>
              <DeleteBtn onClick={() => deleteTask(item._id)} />
              {/* <button onClick={() => getHours(item._id)}>test</button> } */}
              {item.hours === undefined ? <HoursForm
                hoursChange={handleHoursChange}
                submit={submitHours}
                id={item._id}
                taskName={item.taskName}
              /> : <p>{item.hours.hours} hours logged this week</p>}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Chart;
