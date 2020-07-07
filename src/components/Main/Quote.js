import React from "react";

const Quote = (props) => {
  console.log(props.quote);
  // const [names, profits, terms] = props.quote

  const monthlyProfit = (a, b, c) => {
    return (Number(a) + Number(b) + Number(c)) / 36;
  };

  return (
    <div className="main">
      <h1>Quote</h1>
      <div className="quoteReceipt">
        <span>
          {props.quote.names.fName} {props.quote.names.lName}
        </span>
        <span>{props.quote.names.bName}</span>
        <span>
          Monthly Average:
          {monthlyProfit(
            props.quote.profits.year1,
            props.quote.profits.year2,
            props.quote.profits.year3
          )}
        </span>
      </div>
    </div>
  );
};

export default Quote;
