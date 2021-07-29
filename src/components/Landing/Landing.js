import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import image from "../img/face.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  aboutGrid: {
    background: theme.palette.secondary.main,
    width: "100%",
    height: "100vh",
  },
  titleGrid: {
    width: "100%",
    height: "100vh",
  },
  headerContainer: {
    height: "100%",
  },
  header: {
    marginTop: "150px",
    padding: "15% 0 0 0",
    fontWeight: "600",
    textAlign: "left",
    color: theme.palette.tertiary.main,
  },
  subheader: {
    fontWeight: "700",
    fontSize: "20px",
    margin: "0",
    paddingLeft: "4px",
    color: theme.palette.dark.main,
    animation: `$appear 2000ms`,
  },
  name: {
    fontSize: "50px",
    fontWeight: "600",
    color: theme.palette.secondary.main,
    animation: `$fromTop 1000ms`,
  },
  afterName: {
    fontSize: "19px",
    marginTop: "20px",
    paddingLeft: "4px",
    animation: `$appear 2000ms`,
  },
  button: {
    marginTop: "30px",
    marginLeft: "20px",
  },
  blocks: {
    marginTop: "15em",
  },
  firstBlock: {
    backgroundColor: theme.palette.secondary.main,
    width: "1250px",
    position: "absolute",
    height: "60px",
    animation: `$firstBlockMoving 10s infinite`,
    borderRadius: "0 10px 0 0",
  },
  secondBlock: {
    backgroundColor: theme.palette.dark.main,
    width: "1000px",
    height: "50px",
    position: "absolute",
    animation: `$secondBlockMoving 10s infinite`,
    borderRadius: "0 10px 0 0",
  },
  scrollText: {
    marginLeft: "500px",
    color: theme.palette.primary.main,
  },
  imageDiv: {
    backgroundColor: theme.palette.primary.main,
    textAlign: "center",
    width: "300px",
    height: "450px",
    marginLeft: "25%",
    marginTop: "20%",
  },
  image: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    border: "1px solid black",
    marginLeft: "-40px",
    marginTop: "40px",
  },
  "@keyframes fromTop": {
    "0%": {
      opacity: 0,
      transform: "translateY(-500%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes appear": {
    "0%": {
      opacity: 0,
      transform: "translateX(-500%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  "@keyframes firstBlockMoving": {
    "0%": {
      transform: "translateX(-50%)",
    },
    "50%": {
      transform: "translateX(-70%)",
    },
    "100%": {
      transform: "translateX(-50%)",
    },
  },
  "@keyframes secondBlockMoving": {
    "0%": {
      transform: "translateX(-50%)",
    },
    "50%": {
      transform: "translateX(-55%)",
    },
    "100%": {
      transform: "translateX(-50%)",
    },
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      alignItems='flex-start'
      wrap='nowrap'
      justifyContent='flex-start'
    >
      <Grid
        item
        xs={8}
        sm={8}
        md={8}
        lg={8}
        xl={8}
        className={classes.titleGrid}
      >
        <Grid
          container
          spacing={0}
          alignItems='center'
          justifyContent='center'
          direction='column'
          className={classes.headerContainer}
        >
          <Grid item lg={12} xl={12} className={classes.header}>
            <Grid
              container
              direction='column'
              alignItems='flex-start'
              justifyContent='center'
              spacing={0}
            >
              <Grid item lg={12} xl={12} className={classes.subheader}>
                HELLO, I'M A
              </Grid>
              <Grid item lg={12} xl={12} className={classes.name}>
                JUNIOR FRONTEND DEVELOPER
              </Grid>
              <Grid item lg={12} xl={12} className={classes.afterName}>
                Hi, my name is Rajmund Malec. Come and check my portfolio!
              </Grid>
              <Grid item lg={12} xl={12} className={classes.button}>
                <Button
                  variant='contained'
                  color='secondary'
                  style={{ borderRadius: "0 10px 0 10px" }}
                >
                  VIEW PORTFOLIO
                </Button>
              </Grid>
              <Grid item lg={12} xl={12} className={classes.blocks}>
                <Grid
                  container
                  direction='column'
                  alignItems='flex-start'
                  justifyContent='center'
                  spacing={3}
                >
                  <Grid item lg={12} xl={12}>
                    <div className={classes.firstBlock}></div>
                  </Grid>
                  <Grid item lg={12} xl={12}>
                    <div className={classes.secondBlock}>
                      <p className={classes.scrollText}>
                        Scroll down to explore.
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={4}
        sm={4}
        md={4}
        lg={4}
        xl={4}
        className={classes.aboutGrid}
      >
        <div className={classes.imageDiv}>
          <img src={image} className={classes.image} alt='My face :O'></img>
          <p style={{ color: "white" }}>It's me &#128513;</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default Landing;
