import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  titleGrid: {
    width: "100%",
    height: "80vh",
    backgroundColor: theme.palette.primary.main,
    //marginTop: "5%",
  },
  bar: {
    width: "30%",
    backgroundColor: theme.palette.secondary.main,
    height: "10px",
    borderRadius: "0 0 0 5px",
    float: "right",
  },
  title: {
    fontSize: "30px",
    fontWeight: "600",
    marginBottom: "50px",
    marginTop: "50px",
    color: theme.palette.tertiary.main,
  },
  infoContainer: {
    wordWrap: "break-word",
  },
  info: {
    marginLeft: "25%",
  },
  text: {
    textAlign: "justify",
    textJustify: "inter-word",
    fontWeight: "500",
    fontSize: "19px",
  },
  underline: {
    borderTop: "2px solid",
    borderColor: theme.palette.secondary.main,
    width: "300px",
    margin: "2px 0 0 2px",
    borderRadius: "5px 0 5px 0",
  },
  img: {
    maxWidth: "250px",
    borderRadius: "20px 0px 20px 0px",
    marginRight: "30%",
    //position: "absolute",
  },
  imgContainer: {
    marginLeft: "50px",
    marginTop: "5%",
    /*"&:before": {
      position: "absolute",
      content: "''",
      display: "inline-block",
      background: theme.palette.primary.main,
      border: "5px solid",
      borderColor: theme.palette.secondary.main,
      borderRadius: "20px 0px 20px 0px",
      width: "240px",
      height: "400px",
      color: "black",
      fontSize: "20px",
      marginTop: "10px",
      marginLeft: "10px",
    },*/
  },
  technologyList: {
    fontSize: "17px",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      alignItems='flex-start'
      justifyContent='flex-start'
      className={classes.titleGrid}
      wrap='nowrap'
    ></Grid>
  );
};

export default Contact;
