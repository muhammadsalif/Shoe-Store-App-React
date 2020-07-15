import React from "react";
import SimpleSlider from "./slider/Slider";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    backgroundColor: "#3F51B5",
    position: "absolute",
    zIndex: "1",
    left: "80%",
    top: "18%",
    padding: "8px 25px 8px 25px",
    color: "white",
    "&:hover": {
      backgroundColor: "#DC004E",
    },
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Link to="/Product">
          <Button variant="contained" className={classes.button}>
            Our Products
          </Button>
        </Link>
        <SimpleSlider></SimpleSlider>
      </div>
    </>
  );
};
