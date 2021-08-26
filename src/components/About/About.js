import React from "react";
import { Grid, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Face from "../Resources/img/face.png";

const useStyles = makeStyles((theme) => ({
  titleGrid: {
    width: "100%",
    height: "80vh",
    backgroundColor: theme.palette.primary.main,
    //marginTop: "5%",
  },
  bar: {
    width: "30%",
    background: theme.palette.gradient,
    height: "10px",
    borderRadius: "0 0 0 5px",
    float: "right",
  },
  title: {
    fontSize: "40px",
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
    background: theme.palette.gradient,
    width: "300px",
    height: "2px",
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

const About = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      alignItems='flex-start'
      justifyContent='flex-start'
      className={classes.titleGrid}
      wrap='nowrap'
    >
      <Grid item md={6} lg={6} xl={4} className={classes.info}>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
          className={classes.infoContainer}
        >
          <Grid item md={12} lg={12} xl={12} className={classes.title}>
            WHO AM I?
            <hr className={classes.underline}></hr>
          </Grid>
          <Grid item md={12} lg={12} xl={12} className={classes.text}>
            <p>
              Hi! My name is Rajmund. I am a Web Developer and fresh IT
              engineer. My interest in web development started back in early
              2020, when I was asked to create my own website at the university.
              <br />
              <div>I felt in love with it - and thats stays to this day.</div>
            </p>
            <p>My technologies I've been working with lately:</p>
            <p>
              <Grid container direction='row'>
                <Grid item xl={6}>
                  <List className={classes.technologyList}>
                    <ListItem>
                      <ArrowRightIcon color='secondary' />
                      JavaScript (ES6+)
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon color='secondary' />
                      React
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon color='secondary' />
                      Node.js
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xl={6}>
                  <List className={classes.technologyList}>
                    <ListItem>
                      <ArrowRightIcon color='secondary' />
                      Express.js
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon color='secondary' />
                      Redux
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon color='secondary' />
                      MongoDB
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={6} className={classes.imgContainer}>
        <img src={Face} alt='my face :)' className={classes.img}></img>
      </Grid>
    </Grid>
  );
};

export default About;
