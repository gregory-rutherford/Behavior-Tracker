import React, { useState, useEffect } from "react";
import Form from "../../Components/Form/Form";
import Checkbox from "../../Components/Checkbox/Checkbox";
import DeleteBtn from "../../Components/DeleteBtn/DeleteBtn";

const Chart = function Chart() {
  const [taskName, setTaskName] = useState("");
  const [data, setData] = useState( [] );


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
      .then(res => res.json()
      .then(res => setData([...data, res]))
      .then(res => console.log(res)))
      .catch(err => {console.log("request failed" + err);
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


  // needs to grab data from db and adjust checkbox checked value whether true or false

  //im thinking about this wrong. onclick needs to send a put request and update the returned data i.e. monday: false to monday:true,
  //then it change with fetchData function
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

  
  const deleteTask = id => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:3030/api/data/" + id, options)
      .then(res => res.json()
      .then(fetchData(data))
      .then(res => console.log(res)))
      .catch(err => {
        console.log("request failed" + err);
      });
  };

  const updateTask = (id, key, value) => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf=8" },
      body: { key: value }
    };

    fetch("http://localhost:3030/api/data" + id, options)
      .then(res => res.json().then(res => console.log(res)))
      .then(fetchData(data))
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
  useEffect( () => {fetchData(data)}, [])

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
              <td className="monday" data-attr={item.monday} id={item._id}>
                <Checkbox  onClick={()=> updateTask(item._id, Object.key(item.monday), item.monday)}checked={item.monday} id={item._id} day="monday"/>
                {/* <Checkbox click={updateTask} id={item._id} checked={item.monday}/> */}
              </td>
              <td className="tuesday" data-attr={item.monday} id={item._id}>
                <Checkbox checked={item.tuesday} id={item._id} />
              </td>
              <td className="wednesday" data-attr={item.monday} id={item._id}>
                <Checkbox checked={item.wednesday} />
              </td>
              <td className="thursday" data-attr={item.monday} id={item._id}>
                <Checkbox checked={item.thursday} />
              </td>
              <td className="friday" data-attr={item.monday} id={item._id}>
                <Checkbox checked={item.friday} />
              </td>
              <td className="saturday" data-attr={item.monday} id={item._id}>
                <Checkbox checked={item.saturday} />
              </td>
              <td className="sunday" data-attr={item.monday} id={item._id}>
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
