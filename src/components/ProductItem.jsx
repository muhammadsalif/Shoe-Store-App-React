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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "20rem",
    transition: "0.3s linear",
    "&:hover": {
      backgroundColor: "#3F51B5",
      color: "white",
      cursor: "pointer",
      width: "51%",
      height: "21rem",
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
        <h2>{Shoes[id].name}</h2>
        <img className={classes.image} src={Shoes[id].img} alt="" />
        <h2>{Shoes[id].price}</h2>
      </Paper>
    </div>
  );
}
