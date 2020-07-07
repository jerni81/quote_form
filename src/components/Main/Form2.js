import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Form2(props) {
  const classes = useStyles();
  const [profits, setProfits] = useState({
    year1: null,
    year2: null,
    year3: null,
  });

  const handleChange = (event) => {
    props.setQuote({ ...props.quote, profits });
  };

  return (
    <form
      className={classes.root}
      className="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        className="formField"
        label="Year 1 Profit"
        variant="filled"
        onChange={(event) =>
          setProfits({ ...profits, year1: event.target.value })
        }
      />
      <TextField
        id="standard-basic"
        className="formField"
        label="Year 2 Profit"
        variant="filled"
        onChange={(event) =>
          setProfits({ ...profits, year2: event.target.value })
        }
      />
      <TextField
        id="standard-basic"
        className="formField"
        label="Year 3 Profit"
        variant="filled"
        onChange={(event) =>
          setProfits({ ...profits, year2: event.target.value })
        }
      />
      <Link to="/form3">
        <Button variant="contained" onClick={handleChange}>
          <Typography
            variant="headline"
            className={classes.title}
            align="center"
          >
            Next
          </Typography>
        </Button>
      </Link>
    </form>
  );
}
