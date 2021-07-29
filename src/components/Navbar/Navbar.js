import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import NavOption from "./NavOption";
import NavIcon from "./NavIcon";
import { Grid } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    //marginBottom: "20px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: "bold",
    fontSize: "22px",
    paddingTop: "15px",
  },
  titleGrid: {
    textAlign: "left",
    verticalAlign: "middle",
  },
  optionGrid: {
    maxWidth: "200px",
  },
  icon: {
    maxWidth: "4em",
  },
  mediaGrid: {
    background: theme.palette.secondary.main,
    width: "100%",
    height: "100%",
  },
  media: {
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: "15px",
    marginTop: "22px",
    marginRight: "20px",
    color: theme.palette.primary.main,
    maxWidth: "100px",
  },
  mediaIcon: {
    cursor: "pointer",
  },
  appBar: {
    display: "flex",
    alignItems: "center",
  },
}));

const navOptions = ["Home", "About", "Portfolio", "Contact"];

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        color='primary'
        elevation={0}
        className={classes.appBar}
      >
        <Grid
          container
          direction='row'
          alignItems='flex-start'
          wrap='nowrap'
          justifyContent='flex-start'
        >
          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Grid
              container
              direction='row'
              alignItems='flex-start'
              wrap='nowrap'
              justifyContent='flex-start'
            >
              <Grid
                item
                xs={1}
                sm={1}
                md={1}
                lg={1}
                xl={1}
                className={classes.icon}
              >
                <NavIcon />
              </Grid>
              <Grid
                item
                xs={2}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                className={classes.titleGrid}
              >
                <Typography className={classes.title}>Rajmund</Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                md={9}
                lg={9}
                xl={9}
                className={classes.titleGrid}
              >
                <Grid
                  container
                  direction='row'
                  alignItems='flex-start'
                  wrap='nowrap'
                  justifyContent='center'
                >
                  {navOptions.map((name, i) => (
                    <Grid
                      item
                      xs={3}
                      sm={3}
                      md={3}
                      lg={3}
                      xl={3}
                      className={classes.optionGrid}
                      key={i}
                    >
                      <NavOption key={i} name={name} />
                    </Grid>
                  ))}
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
            className={classes.mediaGrid}
          >
            <Grid
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
              wrap='nowrap'
            >
              <Grid item lg={4} xl={4} className={classes.media}>
                <GitHubIcon className={classes.mediaIcon} />
              </Grid>
              <Grid item lg={4} xl={4} className={classes.media}>
                <LinkedInIcon className={classes.mediaIcon} />
              </Grid>
              <Grid item lg={4} xl={4} className={classes.media}>
                <Button
                  variant='outlined'
                  color='primary'
                  className={classes.mediaIcon}
                  style={{ borderRadius: "0 10px 0 10px" }}
                >
                  Contact
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Navbar;
