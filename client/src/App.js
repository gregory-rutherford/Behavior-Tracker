import React from 'react';
import Nav from "./Components/Nav/Nav";
import Chart from "./Components/Chart/Chart";
import Splash from "./Components/Splash/Splash";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path = "/" component={Splash} />
          <Route exact path = "/charts" component={Chart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
