import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.main,
    background: theme.palette.dark.main,
    padding: "0px 7px 0px 7px",
    margin: "10px 0px 5px 20px",
    borderRadius: "0px 10px 0px 10px",
    fontSize: "30px",
    maxWidth: "25px",
    maxHeight: "40px",
  },
}));

const NavIcon = () => {
  const classes = useStyles();
  return <div className={classes.icon}>R.</div>;
};

export default NavIcon;
