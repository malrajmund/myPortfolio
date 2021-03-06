import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    background: ({ color }) =>
      color === "primary"
        ? theme.palette.primary.main
        : theme.palette.dark.main,
    color: ({ color }) =>
      color === "primary"
        ? theme.palette.tertiary.main
        : color === "secondary"
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    border: "1px none",
    borderRadius: "0 10px 0 10px",
    padding: "7px 15px 7px 15px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: "16px",
    fontWeight: "600",
    transition: "all .5s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      animation: `$buttonHover 1000ms 1`,
      animationFillMode: "forwards",
      transition: "all .5s ease-in-out",
    },
  },
  "@keyframes buttonHover": {
    "0%": {
      borderRadius: "0 10px 0 10px",
    },
    "100%": {
      borderRadius: "10px 0 10px 0",
      background: theme.palette.gradient,
    },
  },
  icon: {
    margin: "5px 0 0 5px",
  },
}));

const Button = ({ color, text, icon, ...props }) => {
  const classes = useStyles({ color });
  return (
    <button className={classes.button} {...props}>
      {text}
      {icon ? <span className={classes.icon}>{icon}</span> : null}
    </button>
  );
};

export default Button;
