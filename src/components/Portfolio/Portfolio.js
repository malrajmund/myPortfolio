import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Project from "./Projects/Project";
import fotosoft from "../Resources/img/fotosoft.png";
import fotorental from "../Resources/img/fotorental.png";

const useStyles = makeStyles((theme) => ({
  titleGrid: {
    width: "100%",
    height: "80vh",
    backgroundColor: theme.palette.primary.main,
  },
  bar: {
    width: "30%",
    backgroundColor: theme.palette.dark.main,
    height: "10px",
    borderRadius: "0 0 5px 0",
    float: "left",
  },
  title: {
    fontSize: "40px",
    fontWeight: "600",
    marginBottom: "50px",
    color: theme.palette.tertiary.main,
    float: "right",
  },
  infoContainer: {
    //paddingLeft: "25%",
    wordWrap: "break-word",
  },
  underline: {
    background: theme.palette.gradient,
    width: "300px",
    height: "2px",
    margin: "2px 0 0 2px",
    borderRadius: "5px 0 5px 0",
  },
  titleDiv: {
    float: "right",
  },
  projectContainer: {
    float: "right",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      alignItems='flex-start'
      justifyContent='flex-start'
      className={classes.titleGrid}
    >
      <Grid item md={6} lg={6} xl={8}>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
          className={classes.infoContainer}
        >
          <Grid item md={12} lg={12} xl={12} className={classes.title}>
            <div className={classes.titleDiv}>
              RECENT PROJECTS
              <hr className={classes.underline}></hr>
            </div>
          </Grid>
          <Grid item md={12} lg={12} xl={8}>
            {" "}
            <div className={classes.projectContainer}>
              <Project
                image={fotorental}
                years={"August 2020 - March 2021"}
                title={"FotoRental"}
                description={
                  "Project created as part of engineering work. It allows you to rent photographic equipment for someone and rent it from someone. It's hosted on heroku so take a couple of seconds to load 😉."
                }
                technologies={["React", "Redux", "MongoDB", "Express.js"]}
                demo={"https://fotorental.herokuapp.com/"}
                source={"google.com"}
              />
              <Project
                image={fotosoft}
                years={"April 2021 - now"}
                title={"FotoSoft"}
                description={
                  "Web application whose allow owner of FotoSoft create his wholesale price list of his web shop. The website is aimed at customers who want to buy more products rather than single camera."
                }
                technologies={["React", "Redux", "MongoDB", "Express.js"]}
                demo={"https://k2info.com.pl"}
                source={"google.com"}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} lg={6} xl={6}></Grid>
    </Grid>
  );
};

export default Portfolio;
