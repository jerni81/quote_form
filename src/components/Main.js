import React, { useState } from "react";
import QtButton from "./Main/QtButton";
import { Switch, Route, Link } from "react-router-dom";
import Form from "./Main/Form";
import Form2 from "./Main/Form2";
import Form3 from "./Main/Form3";
import Quote from "./Main/Quote";

function Main() {
  const [quote, setQuote] = useState({});
  console.log("this is Main quote", quote);

  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={QtButton} />
        <Route
          path="/form"
          render={(props) => (
            <Form {...props} setQuote={setQuote} quote={quote} />
          )}
        />
        <Route
          path="/form2"
          render={(props) => (
            <Form2 {...props} setQuote={setQuote} quote={quote} />
          )}
        />
        <Route
          path="/form3"
          render={(props) => (
            <Form3 {...props} setQuote={setQuote} quote={quote} />
          )}
        />
        <Route path="/quote" component={Quote} />
      </Switch>
    </div>
  );
}

export default Main;
