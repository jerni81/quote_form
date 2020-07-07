import React, { useState }from "react";
import QtButton from "./Main/QtButton";
import { Switch, Route, Link } from "react-router-dom";
import Form from "./Main/Form";
import Form2 from "./Main/Form2";
import Form3 from "./Main/Form3";
import Quote from "./Main/Quote"

function Main() {
  const [quote, setQuote] = useState({})
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={QtButton} />
        <Route path="/form" component={Form} />
        <Route path="/form2" component={Form2} />
        <Route path="/form3" component={Form3} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </div>
  );
}

export default Main;
