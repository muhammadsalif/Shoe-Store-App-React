import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Shoes from "../shoes.json";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "28rem",
    height: "20rem",
    textDecoration: "none",
    transition: "0.3s linear",
    "&:hover": {
      backgroundColor: "#3F51B5",
      color: "white",
      cursor: "pointer",
      width: "30rem",
      height: "21rem",
    },
  },
  image: {
    width: "40%",
    color: "red",
  },
}));

export function Product() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Object.keys(Shoes).map((keyName, ind) => {
        return (
          <Paper className={classes.paper} elevation={3} key={ind}>
            <Link className={classes.paper} to={`/product/${keyName}`}>
              <h2>{Shoes[keyName].name}</h2>
              <img className={classes.image} src={Shoes[keyName].img} alt="" />
            </Link>
          </Paper>
        );
      })}
    </div>
  );
}
