import React from "react";
import "./NavStyle.css";

const Nav = () => {
  return (
    <div className="container">
      <nav>
        <p className="title">
          Behavior Tracker<span> &#x2611;</span>
        </p>
        <a className="link-item" href="/charts">
          Charts
        </a>
        <p className="line"> | </p>
        <a className="link-item" href="/graphs">
          Graphs
        </a>
      </nav>
    </div>
  );
};

export default Nav;
