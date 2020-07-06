import React from "react";
import QtButton from "./Main/QtButton";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Main() {
  return (
    <Router>
      <div className="main">
        <Link to="/form">
          <QtButton />
        </Link>
      </div>
    </Router>
  );
}

export default Main;
