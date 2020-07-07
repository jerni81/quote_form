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

export default function Form(props) {
  const classes = useStyles();

  const [names, setName] = useState({ fName: null, lName: null, bName: null });

  const handleChange = (event) => {
    props.setQuote({ ...props.quote, names });
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
        label="First Name"
        variant="filled"
        onChange={(event) => setName({ ...names, fName: event.target.value })}
      />
      <TextField
        id="standard-basic"
        className="formField"
        label="Last Name"
        variant="filled"
        onChange={(event) => setName({ ...names, lName: event.target.value })}
      />
      <TextField
        id="standard-basic"
        className="formField"
        label="Buisness Name"
        variant="filled"
        onChange={(event) => setName({ ...names, bName: event.target.value })}
      />
      <Link to="/form2">
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
