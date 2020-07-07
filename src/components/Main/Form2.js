import React from "react";
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

export default function Form2() {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      className="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        defaultValue="$"
        className="formField"
        label="Year 1 Profit"
        variant="filled"
      />
      <TextField
        id="standard-basic"
        className="formField"
        label="Year 2 Profit"
        variant="filled"
      />
      <TextField
        id="standard-basic"
        className="formField"
        label="Year 3 Profit"
        variant="filled"
      />
      <Link to="/form3">
        <Button variant="contained">
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
