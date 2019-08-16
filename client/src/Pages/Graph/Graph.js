import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Graph.css";

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const Graph = function Graph() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:3030/api/data`);
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData(data);
  }, []);

  const dummyData = [
    { week: "week1", timesCompleted: 2 },
    { week: "week2", timesCompleted: 4 }
  ];
  

  return (
    <div className="chart">
      {console.log(data)}
      {data.map(item => (
        <VictoryChart domainPadding={2} theme={VictoryTheme.material}>
          <VictoryAxis tickValues={[item.taskName]} />
          <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 100} hours`)} />
          <VictoryBar data={dummyData} x={"week"} y={"timesCompleted"} />
        </VictoryChart>
        
      ))}
    </div>
  );
};

export default Graph;
