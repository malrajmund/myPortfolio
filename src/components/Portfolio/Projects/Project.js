import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    marginTop: "20px",
    marginBottom: "50px",
    //marginLeft: "25%",
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
    fontSize: "16px",
  },
  techContainer: {
    marginBottom: "15px",
  },
  site: {
    maxWidth: "600px",
    borderRadius: "5px",
    width: "600px",
    height: "300px",
    marginLeft: "300px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  siteGradient: {
    background: theme.palette.gradient,
    opacity: ".6",
    position: "absolute",
    borderRadius: "5px",
    width: "600px",
    height: "300px",
    marginLeft: "300px",
    animation: `$showGradient 800ms forwards`,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    "&:hover": {
      cursor: "pointer",
      animation: `$hideGradient 800ms forwards`,
    },
  },
  "@keyframes hideGradient": {
    "0%": {
      opacity: ".6",
    },
    "100%": {
      opacity: "0",
    },
  },
  "@keyframes showGradient": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: ".6",
    },
  },
  projectItem: {
    [theme.breakpoints.only("xl")]: {
      position: "absolute",
      zIndex: "10",
      maxWidth: "25%",
    },
    [theme.breakpoints.only("lg")]: {
      position: "absolute",
      zIndex: "10",
      maxWidth: "25%",
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
      alignItems='center'
      justifyContent='center'
      className={classes.projectContainer}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={7}
        xl={7}
        className={classes.projectItem}
      >
        <Grid
          container
          direction='row'
          alignItems='flex-start'
          justifyContent='flex-start'
        >
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <img src={image} alt={"foto"} className={classes.img}></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={12} xl={12}>
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
                      xl={6}
                      className={classes.tech}
                    >
                      <ArrowRightIcon color='secondary' />
                      {tech}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <a
                  href={demo}
                  target='_blank'
                  rel='noreferrer noopener'
                  className={classes.ref}
                >
                  LIVE
                </a>{" "}
                <a
                  href={source}
                  target='_blank'
                  rel='noreferrer noopener'
                  className={classes.ref}
                >
                  SOURCE
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
        <a href={demo} target='_blank' rel='noreferrer noopener'>
          <div className={classes.siteGradient}></div>
          <img src={site} alt={"foto"} className={classes.site}></img>
        </a>
      </Grid>
    </Grid>
  );
};

export default Project;
