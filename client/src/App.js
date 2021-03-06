import React from 'react';
import Nav from "./Components/Nav/Nav";
import Wrapper from "./Components/Wrapper/Wrapper";
import Chart from "./Pages/Chart/Chart";
import Splash from "./Pages/Splash/Splash";
import Graph from "./Pages/Graph/Graph";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="page">
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Splash} />
          <Route exact path="/charts" component={Chart} />
          <Route exact path="/graphs" component={Graph} />
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
