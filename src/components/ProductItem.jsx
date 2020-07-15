import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "../shoes.json";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  paper: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "20rem",
    transition: "0.3s linear",
    color: "black",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "70%",
  },
  button: {
    backgroundColor: "#3F51B5",
    padding: "5px",
    color: "white",
    transition: "0.3s ease-in-out",
    border: "none",
    fontSize: "2rem",
    "&:hover": {
      backgroundColor: "#DC004E",
      cursor: "pointer",
    },
  },
  image: {
    width: "40%",
    height: "12rem",
  },
}));

export function ProductItem() {
  const classes = useStyles();
  const { id } = useParams();
  if (!Shoes) return <h2> Product not found!!</h2>;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <img className={classes.image} src={Shoes[id].img} alt="" />
        <div className={classes.details}>
          <h2>{Shoes[id].name}</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            numquam, voluptates velit temporibus sit?
          </p>
          <hr />
          <button className={classes.button}>{Shoes[id].price}</button>
        </div>
      </Paper>
    </div>
  );
}
