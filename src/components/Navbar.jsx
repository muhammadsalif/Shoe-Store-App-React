import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  container: {
    paddingLeft: "5rem",
  },
  link: {
    color: "white ",
    textDecoration: "none",
    fontSize: "1.5rem",
    padding: "0.5rem 1rem 0.5rem 1rem",
    transition: "0.5s linear",
    marginRight: "1rem",
    borderRadius: "30%",
    "&:hover": {
      backgroundColor: "#0A82D2",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.container}>
          <div>
            <Link to="/" className={classes.link}>
              Home
            </Link>

            <Link to="/about" className={classes.link}>
              About
            </Link>

            <Link to="/product" className={classes.link}>
              Products
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
