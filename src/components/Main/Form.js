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

export default function Form() {
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
        className="formField"
        label="First Name"
        variant="filled"
      />
      <TextField
        id="standard-basic"
        className="formField"
        label="Last Name"
        variant="filled"
      />
      <TextField
        id="standard-basic"
        className="formField"
        label="Buisness Name"
        variant="filled"
      />
      <Link to="/form2">
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
