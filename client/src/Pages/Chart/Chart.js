import React, { useState, useEffect } from "react";
import Form from "../../Components/Form/Form";
import Checkbox from "../../Components/Checkbox/Checkbox";
import DeleteBtn from "../../Components/DeleteBtn/DeleteBtn";

const Chart = function Chart() {
  const [taskName, setTaskName] = useState("");
  const [data, setData] = useState([]);
  const [uniqueId, setUniqueId] = useState(0);
  const [checked, setChecked] = useState(null);

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


  // needs to grab data from db and adjust checkbox checked value whether true or false

  //im thinking about this wrong. onclick needs to send a put request and update the returned data i.e. monday: false to monday:true,
  //then it should handle change thanks to setData with useEffect
  //then the map will update the checked attr with by placing item.monday in the attr 

  //need it to show the check if true or display empty box if false.


  // const handleCheckboxChange = event => {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;

  //   console.log(target + "1st console log");
  //   console.log(value + "2nd console log");


  //   switch (name) {
  //     case "checked":
  //       setChecked(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const updateTask = id => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },

    };

    fetch("http://localhost:3030/api/data" + id, options)
      .then(res => res.json()
      .then(res => console.log(res)))
      .catch(err => {
        console.log("request failed" + err);
      });
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


  const fetchData = async () => {
    const response = await fetch(`http://localhost:3030/api/data`);
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData(data);
  }, [data]);

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
                <Checkbox click={updateTask} checked={item.monday} change={handleCheckboxChange}/>
              </td>
              <td className="tuesday">
                <Checkbox checked={item.tuesday} change={handleCheckboxChange}/>
              </td>
              <td className="wednesday">
                <Checkbox  checked={item.wednesday}/>
              </td>
              <td className="thursday">
                <Checkbox checked={item.thursday} />
              </td>
              <td className="friday">
                <Checkbox  checked={item.friday}/>
              </td>
              <td className="saturday">
                <Checkbox checked={item.saturday} />
              </td>
              <td className="sunday">
                <Checkbox  checked={item.sunday}/>
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
