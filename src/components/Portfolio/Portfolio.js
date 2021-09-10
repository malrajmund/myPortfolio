import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Project from "./Projects/Project";
import fotosoft from "../Resources/img/fotosoft.png";
import fotorental from "../Resources/img/fotorental.png";
import fotosoftSite from "../Resources/img/fotosoftSite.PNG";
import fotorentalSite from "../Resources/img/fotorentalSite.PNG";

const useStyles = makeStyles((theme) => ({
  titleGrid: {
    width: "100%",
    height: "80vh",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      marginTop: "200%",
    },
    [theme.breakpoints.only("md")]: {
      paddingLeft: "20%",
    },
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
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      float: "left",
    },
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
    [theme.breakpoints.down("md")]: {
      float: "left",
      marginLeft: "10%",
      textAlign: "center",
    },
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
      <Grid item xs={12} sm={12} md={12} lg={6} xl={8}>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
          className={classes.infoContainer}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.title}
          >
            <div className={classes.titleDiv}>
              RECENT PROJECTS
              <hr className={classes.underline}></hr>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
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
                source={"https://github.com/malrajmund/foto-rental"}
                site={fotorentalSite}
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
                source={"https://github.com/malrajmund/FotoSoft"}
                site={fotosoftSite}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}></Grid>
    </Grid>
  );
};

export default Portfolio;
