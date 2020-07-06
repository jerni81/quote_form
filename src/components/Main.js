import React from "react";
import QtButton from "./Main/QtButton";
import { Switch, Route, Link } from "react-router-dom";
import Form from "./Main/Form";

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={QtButton} />
        <Route path="/form" component={Form} />
      </Switch>
      {/* <Link to="/form">
        <QtButton />
      </Link> */}
    </div>
  );
}

export default Main;
