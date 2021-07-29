import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  option: {
    textAlign: "left",
    verticalAlign: "middle",
    fontWeight: "bold",
    fontSize: "15px",
    marginTop: "22px",
    color: theme.palette.tertiary.main,
    display: "inline-block",
    "&:hover": {
      color: theme.palette.dark.main,
      cursor: "pointer",
      textDecoration: "underline 2px",
      textDecorationColor: theme.palette.secondary.main,
    },
  },
}));

const NavOption = (props) => {
  const classes = useStyles();
  return <span className={classes.option}>{props.name}</span>;
};

export default NavOption;
