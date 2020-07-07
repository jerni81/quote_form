import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function QtButton() {
  const classes = useStyles();

  return (
    <div className="main">
      <h3>B.I.I. insurance you didn't know you needed</h3>
      <div className={classes.root}>
        <Link to="/form">
          <Button variant="contained" className="button">
            <Typography
              variant="headline"
              className={classes.title}
              align="center"
            >
              Get Quote Now!
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
}
