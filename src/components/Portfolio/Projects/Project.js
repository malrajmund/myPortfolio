import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    marginTop: "20px",
    marginBottom: "50px",
    marginLeft: "25%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%",
      paddingLeft: "15px",
    },
  },
  img: {
    borderRadius: "100%",
    maxWidth: "60px",
    //maxHeight: "60px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    background: theme.palette.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "5px",
  },
  date: {
    color: theme.palette.tertiary.main,
    marginBottom: "5px",
  },
  description: {
    marginBottom: "15px",
    color: "white",
    textAlign: "justify",
    textJustify: "inter-word",
    fontWeight: "500",
    fontSize: "17px",
    backgroundColor: theme.palette.dark.main,
    borderRadius: "5px",
    padding: "10px 30px 10px 30px",
  },
  ref: {
    marginBottom: "15px",
    marginRight: "20px",
    color: theme.palette.tertiary.main,
    fontWeight: "700",
    textDecoration: "none",
  },
  tech: {
    fontWeight: "bold",
    verticalAlign: "middle",
    display: "inline-flex",
    color: theme.palette.dark.main,
  },
  techContainer: {
    marginBottom: "15px",
  },
  site: {
    maxWidth: "600px",

    borderRadius: "5px",
  },
  siteContainer: {
    maxWidth: "600px",
    width: "100%",
    height: "100%",
    background: theme.palette.gradient,
    opacity: ".6",
    position: "absolute",
    borderRadius: "5px",
    "&:hover": {
      display: "none",
      cursor: "pointer",
    },
  },
}));

const Project = ({
  image,
  years,
  title,
  description,
  technologies,
  demo,
  source,
  site,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      alignItems='flex-start'
      justifyContent='flex-start'
      className={classes.projectContainer}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={7}>
        <Grid
          container
          direction='row'
          alignItems='flex-start'
          justifyContent='flex-start'
        >
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <img src={image} alt={"foto"} className={classes.img}></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
            <Grid
              container
              direction='row'
              alignItems='flex-start'
              justifyContent='flex-start'
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
                {title}
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.date}
              >
                {years}
              </Grid>
              <Grid
                item
                xs={11}
                sm={11}
                md={12}
                lg={12}
                xl={12}
                className={classes.description}
              >
                {description}
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.techContainer}
              >
                <Grid
                  container
                  direction='row'
                  alignItems='flex-start'
                  justifyContent='flex-start'
                >
                  {technologies.map((tech, index) => (
                    <Grid
                      key={index}
                      item
                      xs={6}
                      sm={6}
                      md={3}
                      lg={3}
                      xl={3}
                      className={classes.tech}
                    >
                      <ArrowRightIcon color='secondary' />
                      {tech}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <a href={demo} className={classes.ref}>
                  DEMO
                </a>{" "}
                <a href={source} className={classes.ref}>
                  SOURCE
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
        <div
          className={classes.siteContainer}
          style={{ width: "600px", height: "300px", marginLeft: "30px" }}
        ></div>
        <img
          src={site}
          alt={"foto"}
          className={classes.site}
          style={{ width: "600px", height: "300px", marginLeft: "30px" }}
        ></img>
      </Grid>
    </Grid>
  );
};

export default Project;
