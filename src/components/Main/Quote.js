import React from "react";

const Quote = (props) => {
  console.log(props.quote);
  // const [names, profits, terms] = props.quote

  const monthlyProfit = (a, b, c) => {
    return ((Number(a) + Number(b) + Number(c)) / 36).toFixed(2);
  };

  const payment = (a, b, c) => {
    return ((a * b * c) / 12).toFixed(2);
  };

  if (props.quote.names === undefined) {
    return (
      <div>
        <h3>Please press home and start your qoute over.</h3>
      </div>
    );
  }

  return (
    <div className="main">
      <h1>Quote</h1>
      <div className="quoteReceipt">
        <span>
          <b>Name:</b> {props.quote.names.fName} {props.quote.names.lName}
        </span>
        <span>
          <b>Buisness:</b> {props.quote.names.bName}
        </span>
        <span>
          <b>AVG Monthly Profit:</b> $
          {monthlyProfit(
            props.quote.profits.year1,
            props.quote.profits.year2,
            props.quote.profits.year3
          )}
        </span>
        <span>
          <b>Months covered:</b> {props.quote.terms.months}
        </span>
        <span>
          <b>Percent of Coverage:</b> {props.quote.terms.percent * 100}%
        </span>
        <span>
          <b>Monthly Payment:</b> $
          {payment(
            monthlyProfit(
              props.quote.profits.year1,
              props.quote.profits.year2,
              props.quote.profits.year3
            ),
            props.quote.terms.months,
            props.quote.terms.percent
          )}
        </span>
      </div>
    </div>
  );
};

export default Quote;
