import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../Button/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  titleGrid: {
    width: "100%",
    height: "80vh",
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    fontSize: "40px",
    fontWeight: "600",
    color: theme.palette.tertiary.main,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  underline: {
    background: theme.palette.gradient,
    width: "300px",
    height: "2px",
    margin: "2px 0 0 2px",
    borderRadius: "5px 0 5px 0",
  },
  text: {
    textAlign: "center",
    textJustify: "inter-word",
    fontWeight: "500",
    fontSize: "19px",
    marginLeft: "40%",
    marginRight: "40%",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      justifyContent='center'
      className={classes.titleGrid}
      wrap='nowrap'
    >
      <Grid item md={6} lg={6} xl={12} className={classes.title}>
        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item xl={12}>
            CONTACT
          </Grid>
          <Grid
            item
            xl={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <hr className={classes.underline}></hr>
          </Grid>
          <Grid item md={12} lg={12} xl={12} className={classes.text}>
            <p>
              Want to cooperate?
              <br /> Let me know and contact via email! <br /> I will respond as
              fast as possible :).
            </p>
          </Grid>
          <Grid
            item
            xl={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              color='secondary'
              text='Send mail'
              onClick={() => {
                var link = "mailto:malrajmund@gmail.com";
                window.location.href = link;
              }}
              icon={<MailOutlineIcon />}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
