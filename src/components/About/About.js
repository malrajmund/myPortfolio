import React from "react";
import { Grid, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles((theme) => ({
  titleGrid: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    marginTop: "5%",
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
    //marginLeft: "25%",
    //marginTop: "-30%",
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
    >
      <Grid item md={6} lg={6} xl={6} className={classes.info}>
        <Grid
          container
          alignItems='flex-end'
          justifyContent='flex-start'
          className={classes.infoContainer}
        >
          <Grid item md={12} lg={12} xl={12} className={classes.title}>
            WHO AM I?
            <hr className={classes.underline}></hr>
          </Grid>
          <Grid item md={12} lg={12} xl={6} className={classes.text}>
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
                  <List>
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
                  <List>
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
          <Grid item md={12} lg={12} xl={12} className={classes.title}></Grid>
        </Grid>
      </Grid>
      <Grid item xl={6}></Grid>
    </Grid>
  );
};

export default About;
