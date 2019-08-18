import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Graph.css";

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const Graph = function Graph() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`/api/data`);
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData(data);
  }, []);

  const dummyData = [
    { task: "Practice React", timesCompleted: 2 },
    { task: "Clean Litterbox", timesCompleted: 4 }
  ];
  

  return (
    <div className="chart">
    <h3>This is a static chart, dynamic charts coming soon...</h3>
      <VictoryChart
        domainPadding={50}
        style={{ parent: { maxWidth: "50%", maxHeight: "50%" } }}
      >
        <VictoryAxis tickValues={["Practice React", "Clean Litterbox"]}/>
        <VictoryAxis dependentAxis tickValues={[2,4]} tickFormat={t => `${Math.round(t)} days`} />
        <VictoryBar data={dummyData} x={"task"} y={"timesCompleted"} />
      </VictoryChart>
    </div>
  );
};

export default Graph;
