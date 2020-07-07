import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Form3(props) {
  const classes = useStyles();
  const [terms, setTerms] = useState({});

  const handleChange = (event) => {
    props.setQuote({ ...props.quote, terms });
  };
  console.log("form3 quote", props.quote);

  return (
    <div className="form">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Months</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={terms.months}
          onChange={(event) => {
            event.preventDefault();
            setTerms({ ...terms, months: event.target.vaule });
          }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Coverage %</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={terms.percent}
          onChange={(event) => {
            event.preventDefault();
            setTerms({ ...terms, percent: event.target.vaule });
          }}
        >
          <MenuItem value={50}>50%</MenuItem>
          <MenuItem value={75}>75%</MenuItem>
          <MenuItem value={100}>100%</MenuItem>
        </Select>
      </FormControl>
      <Link to="/quote">
        <Button variant="contained" onClick={handleChange}>
          <Typography
            variant="headline"
            className={classes.title}
            align="center"
          >
            Finish
          </Typography>
        </Button>
      </Link>
    </div>
  );
}
