import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

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
    { week: "week1", timesCompleted: 3 },
    { week: "week2", timesCompleted: 4 }
  ];

  return (
    <div>
      <h1>Your Weekly Charts</h1>
      <VictoryChart domainPadding={10}>
        <VictoryAxis tickValues={["Week 1", "Week 2"]} />
        <VictoryAxis dependentAxis tickFormat={x => `{x / 1}k`} />
        <VictoryBar data={dummyData} x={"week"} y={"timesCompleted"} />
      </VictoryChart>
    </div>
  );
};

export default Graph;
