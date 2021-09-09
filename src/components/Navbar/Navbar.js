import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import NavIcon from "./NavIcon";
import { Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    opacity: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: "bold",
    fontSize: "25px",
    paddingTop: "12px",
  },
  titleScrolled: {
    fontWeight: "bold",
    fontSize: "25px",
    paddingTop: "12px",
  },
  titleGrid: {
    textAlign: "left",
    verticalAlign: "middle",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
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
    //paddingTop: "15px",
    height: "80px",
    backgroundColor: theme.palette.primary.main,
    animation: `$showAppBar 400ms forwards`,
    [theme.breakpoints.down("sm")]: {
      height: "10%",
    },
  },
  "@keyframes showAppBar": {
    "0%": {
      transform: "translateY(-100%)",
      boxShadow: "0 3px 2px -2px gray",
    },
    "100%": {
      transform: "translateY(0%)",
      //boxShadow: "0 3px 2px -2px gray",
    },
  },
  scrolledAppBar: {
    display: "flex",
    alignItems: "center",
    paddingTop: "15px",
    height: "80px",
    backgroundColor: theme.palette.primary.main,
    animation: `$hideAppBar 400ms forwards`,
  },
  "@keyframes hideAppBar": {
    "0%": {
      transform: "translateY(0%)",
      boxShadow: "0 3px 2px -2px gray",
    },
    "100%": {
      transform: "translateY(-100%)",
      boxShadow: "0 3px 2px -2px gray",
    },
  },
  option: {
    textAlign: "left",
    verticalAlign: "middle",
    fontWeight: "bold",
    fontSize: "17px",
    marginTop: "22px",
    color: theme.palette.tertiary.main,
    display: "inline-block",
    "&:hover": {
      color: theme.palette.dark.main,
      cursor: "pointer",
      textDecoration: "underline 2px",
      textDecorationColor: theme.palette.gradient,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      marginTop: "50px",
      marginLeft: "5%",
      textAlign: "center",
    },
  },
  currentOption: {
    textAlign: "left",
    verticalAlign: "middle",
    fontWeight: "bold",
    fontSize: "17px",
    marginTop: "22px",
    color: theme.palette.secondary.main,
    background: theme.palette.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
    textDecorationColor: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.dark.main,
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      marginTop: "50px",
      marginLeft: "5%",
      textAlign: "center",
    },
  },
  menuIcon: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      marginTop: "5px",
      marginRight: "15px",
      display: "block",
      float: "right",
      minWidth: "50px",
      minHeight: "50px",
      zIndex: "10",
      position: "relative",
      "&:hover": {
        color: theme.palette.dark.main,
        cursor: "pointer",
      },
    },
  },
  menuContainer: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  menuContainerOpen: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
    "&::after": {
      content: '" "',
      display: "block",
      height: "100vh",
      width: "100vh",
      marginLeft: "-100px",
      position: "absolute",
      backdropFilter: "blur(3px)",
    },
  },
  menuOpen: {
    display: "block",
    height: "110vh",
    width: "500px",
    backgroundColor: "white",
    paddingTop: "100px",
    animation: `$showMenu 400ms forwards`,
    zIndex: "9",
    position: "absolute",
  },
  menuClosed: {
    display: "block",
    height: "110vh",
    width: "500px",
    backgroundColor: "white",
    paddingTop: "100px",
    zIndex: "9",
    position: "absolute",
    animation: `$hideMenu 400ms forwards`,
  },
  "@keyframes showMenu": {
    "0%": {
      transform: "translateX(100%)",
      boxShadow: "-5px 0 5px -5px #333",
    },
    "100%": {
      transform: "translateX(25%)",
      boxShadow: "-5px 0 5px -5px #333",
    },
  },
  "@keyframes hideMenu": {
    "0%": {
      transform: "translateX(25%)",
      boxShadow: "-5px 0 5px -5px #333",
    },
    "100%": {
      transform: "translateX(100%)",
      boxShadow: "-5px 0 5px -5px #333",
      display: "none",
    },
  },
}));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledHome, setScrolledHome] = useState(true);
  const [scrolledAbout, setScrolledAbout] = useState(false);
  const [scrolledPortfolio, setScrolledPortfolio] = useState(false);
  const [scrolledContact, setScrolledContact] = useState(false);
  const [scroll] = useState(window.scrollY);
  const [menuClicked, setMenuClicked] = useState(false);
  const classes = useStyles(scrolled);
  function vhToPixels(vh) {
    return Math.round(window.innerHeight / (100 / vh));
  }
  var previousScroll = 0;
  const handleScroll = () => {
    const offset = window.scrollY;
    setMenuClicked(false);
    if (previousScroll <= offset) {
      setScrolled(true);
      previousScroll = offset;
    } else {
      setScrolled(false);
      previousScroll = offset;
    }
    if (offset < vhToPixels(100) && offset < vhToPixels(200)) {
      setScrolledHome(true);
    } else {
      setScrolledHome(false);
    }
    if (offset >= vhToPixels(100) && offset < vhToPixels(160)) {
      setScrolledAbout(true);
    } else {
      setScrolledAbout(false);
    }
    if (offset >= vhToPixels(160) && offset < vhToPixels(240)) {
      setScrolledPortfolio(true);
    } else {
      setScrolledPortfolio(false);
    }
    if (offset >= vhToPixels(240) && offset < vhToPixels(400)) {
      setScrolledContact(true);
    } else {
      setScrolledContact(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [scroll]);
  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        color='primary'
        elevation={0}
        className={
          scrolled && menuClicked === false
            ? classes.scrolledAppBar
            : classes.appBar
        }
      >
        <Grid
          container
          direction='row'
          alignItems='flex-start'
          wrap='nowrap'
          justifyContent='flex-start'
        >
          <Grid item xs={12} sm={10} md={10} lg={10} xl={11}>
            <Grid
              container
              direction='row'
              alignItems='flex-start'
              wrap='nowrap'
              justifyContent='center'
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
                xl={1}
                className={classes.titleGrid}
              >
                <Typography
                  className={scrolled ? classes.titleScrolled : classes.title}
                ></Typography>
              </Grid>
              <Grid
                item
                xs={11}
                sm={11}
                md={11}
                lg={11}
                xl={11}
                className={
                  menuClicked
                    ? classes.menuContainerOpen
                    : classes.menuContainer
                }
              >
                <MenuIcon
                  className={classes.menuIcon}
                  onClick={(e) => setMenuClicked(!menuClicked)}
                />
                <div
                  className={
                    menuClicked ? classes.menuOpen : classes.menuClosed
                  }
                >
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <span
                        className={
                          scrolledHome ? classes.currentOption : classes.option
                        }
                        onClick={() =>
                          window.scrollTo({
                            top: vhToPixels(0),
                            behavior: "smooth",
                          })
                        }
                      >
                        Home
                      </span>
                    </li>
                    <li>
                      <span
                        className={
                          scrolledAbout ? classes.currentOption : classes.option
                        }
                        onClick={() =>
                          window.scrollTo({
                            top: vhToPixels(100),
                            behavior: "smooth",
                          })
                        }
                      >
                        About
                      </span>
                    </li>
                    <li>
                      <span
                        className={
                          scrolledPortfolio
                            ? classes.currentOption
                            : classes.option
                        }
                        onClick={() =>
                          window.scrollTo({
                            top: vhToPixels(160),
                            behavior: "smooth",
                          })
                        }
                      >
                        Portfolio
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span
                        className={
                          scrolledContact
                            ? classes.currentOption
                            : classes.option
                        }
                        onClick={() =>
                          window.scrollTo({
                            top: vhToPixels(300),
                            behavior: "smooth",
                          })
                        }
                      >
                        Contact
                      </span>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                md={9}
                lg={9}
                xl={10}
                className={classes.titleGrid}
              >
                <Grid
                  container
                  direction='row'
                  alignItems='flex-start'
                  wrap='nowrap'
                  justifyContent='center'
                >
                  <Grid
                    item
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    className={classes.optionGrid}
                  >
                    <span
                      className={
                        scrolledHome ? classes.currentOption : classes.option
                      }
                      onClick={() =>
                        window.scrollTo({
                          top: vhToPixels(0),
                          behavior: "smooth",
                        })
                      }
                    >
                      Home
                    </span>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    className={classes.optionGrid}
                  >
                    <span
                      className={
                        scrolledAbout ? classes.currentOption : classes.option
                      }
                      onClick={() =>
                        window.scrollTo({
                          top: vhToPixels(100),
                          behavior: "smooth",
                        })
                      }
                    >
                      About
                    </span>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    className={classes.optionGrid}
                  >
                    <span
                      className={
                        scrolledPortfolio
                          ? classes.currentOption
                          : classes.option
                      }
                      onClick={() =>
                        window.scrollTo({
                          top: vhToPixels(160),
                          behavior: "smooth",
                        })
                      }
                    >
                      Portfolio
                    </span>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    className={classes.optionGrid}
                  >
                    <span
                      className={
                        scrolledContact ? classes.currentOption : classes.option
                      }
                      onClick={() =>
                        window.scrollTo({
                          top: vhToPixels(300),
                          behavior: "smooth",
                        })
                      }
                    >
                      Contact
                    </span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Navbar;
