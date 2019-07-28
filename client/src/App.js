import React from 'react';
import Nav from "./Components/Nav/Nav";
import Wrapper from "./Components/Wrapper/Wrapper";
import Chart from "./Pages/Chart/Chart";
import Splash from "./Pages/Splash/Splash";
import {BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Splash} />
          <Route exact path="/charts" component={Chart} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
