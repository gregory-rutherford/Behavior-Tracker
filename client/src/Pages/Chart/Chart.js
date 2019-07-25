import React, { useState, useEffect } from "react";
import Form from "../../Components/Form/Form";
import { set } from "mongoose";


 const Chart = function Chart() {
        const [taskName, setTaskName] = useState("");
        const [data, setData] = useState({ returned: [] });


        // const [userId, setUserId] = useState(0);

        // const storeId = () => {
        //   let key = "uniqueId";
        //   setUserId(userId + 1);
        //   localStorage.setItem(key, userId);
        // };

        const handleTaskSubmit = event => {
          // storeId();
          event.preventDefault();
          console.log(taskName);
          // axios call to api
          const inputs = { taskName: taskName, storageId: 5 };
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

        useEffect(() => {
          const fetchData = async () => {
            const result = await fetch(
              "http://localhost:3030/api/data"
            )
            .then(res=>res.json());
            setData(result);
          };
          fetchData();
        }, []);



        return (
          <div>
          <Form 
            change={handleInputChange}
            submit={handleTaskSubmit}
          />
            {/* {data.returned.map(item => ( */}
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
                <tbody>
                  <tr>
                    <th>
                    </th>
                    <td className="monday">
                      <p>stuff goes here </p>
                    </td>
                    <td className="tuesday">
                      <p>stuff goes here</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            {/* ))} */}
          </div>
        );
      };;

export default Chart;
