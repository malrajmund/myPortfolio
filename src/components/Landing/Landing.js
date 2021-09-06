import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Button from "../Button/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      marginTop: "25%",
    },
  },
  aboutGrid: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  titleGrid: {
    width: "100%",
    height: "100vh",
  },
  headerContainer: {
    height: "100%",
    [theme.breakpoints.down("md")]: {
      marginTop: "10%",
      marginLeft: "20px",
    },
  },
  header: {
    marginTop: "50px",
    padding: "15% 0 0 0",
    fontWeight: "600",
    textAlign: "left",
    color: theme.palette.tertiary.main,
  },
  subheader: {
    fontWeight: "700",
    fontSize: "40px",
    marginLeft: "0",
    paddingLeft: "4px",
    background: theme.palette.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `$appear 2000ms`,
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
      paddingLeft: "2px",
      fontSize: "25px",
    },
  },
  name: {
    fontSize: "80px",
    fontWeight: "600",
    color: theme.palette.dark.main,
    animation: `$fromTop 1000ms`,
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
      marginLeft: "10px",
      fontSize: "40px",
    },
  },
  afterName: {
    fontSize: "40px",
    marginTop: "20px",
    paddingLeft: "4px",
    animation: `$appear 2000ms`,
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
      paddingLeft: "2px",
      fontSize: "25px",
      marginTop: "10px",
    },
  },
  button: {
    marginTop: "30px",
    marginLeft: "20px",
  },
  blocks: {
    marginTop: "15em",
  },
  firstBlock: {
    background: theme.palette.gradient,
    width: "1250px",
    position: "absolute",
    height: "60px",
    animation: `$firstBlockMoving 10s infinite`,
    borderRadius: "0 10px 0 0",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  secondBlock: {
    backgroundColor: theme.palette.dark.main,
    width: "1000px",
    height: "50px",
    position: "absolute",
    animation: `$secondBlockMoving 10s infinite`,
    borderRadius: "0 10px 0 0",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
  media: {
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: "15px",
    marginTop: "50px",
    color: theme.palette.primary.main,
    maxWidth: "100px",
  },
  mediaIcon: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.tertiary.main,
      cursor: "pointer",
    },
  },
  mediaBlock: {
    background: theme.palette.dark.main,
    paddingBottom: "50px",
    marginBottom: "10px",
    width: "2%",
    minHeight: "200px",
    borderRadius: "10px 0 0 0",
    position: "fixed",
  },
  arrowIcon: {
    fontSize: "18px",
    marginLeft: "10px",
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
  function vhToPixels(vh) {
    return Math.round(window.innerHeight / (100 / vh));
  }

  return (
    <Grid
      container
      direction='row'
      alignItems='flex-start'
      wrap='nowrap'
      justifyContent='flex-start'
      className={classes.root}
    >
      <Grid
        item
        xs={10}
        sm={10}
        md={10}
        lg={10}
        xl={10}
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
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.header}
          >
            <Grid
              container
              direction='column'
              alignItems='flex-start'
              justifyContent='center'
              spacing={0}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.subheader}
              >
                Hi, my name is
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.name}
              >
                Rajmund Malec.
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.afterName}
              >
                I'm a web developer. Come and check my portfolio!
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.button}
              >
                <Button
                  color='secondary'
                  text='View portfolio'
                  onClick={() =>
                    window.scrollTo({
                      top: vhToPixels(200),
                      behavior: "smooth",
                    })
                  }
                  icon={<ArrowForwardIcon className={classes.arrowIcon} />}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.blocks}
              >
                <Grid
                  container
                  direction='column'
                  alignItems='flex-start'
                  justifyContent='center'
                  spacing={3}
                >
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className={classes.firstBlock}></div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
        xs={2}
        sm={2}
        md={2}
        lg={2}
        xl={2}
        className={classes.aboutGrid}
      >
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='flex-end'
          spacing={0}
          style={{ height: "100%" }}
        >
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            style={{ marginBottom: "50px" }}
          >
            <div className={classes.mediaBlock}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.media}
              >
                <GitHubIcon className={classes.mediaIcon} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.media}
              >
                <LinkedInIcon className={classes.mediaIcon} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.media}
              >
                <FacebookIcon className={classes.mediaIcon} />
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
