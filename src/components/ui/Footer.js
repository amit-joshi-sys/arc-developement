import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25rem",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "20rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  gridItem: {
    margin: "3rem",
  },
  link: {
    color: "#fafafa",
    fontFamily: "Arial",
    fontSize: "0.9rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  icon: {
    height: "2.6rem",
    width: "2.6rem",
    [theme.breakpoints.down("md")]: {
      height: "2rem",
      width: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "1.5rem",
      width: "1.5rem",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-5rem",
    right: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-3.5rem",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "-4rem",
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const { setValue, setSelectedMenuItem } = props;
  return (
    <>
      <footer className={classes.footer}>
        <Hidden mdDown>
          <Grid container justify="center" className={classes.mainContainer}>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(0)}
                  to="/"
                >
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => {
                    setValue(1);
                    setSelectedMenuItem(0);
                  }}
                  to="/services"
                >
                  Services
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => {
                    setValue(1);
                    setSelectedMenuItem(1);
                  }}
                  to="/customsoftware"
                >
                  Custom Software Developement
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => {
                    setValue(1);
                    setSelectedMenuItem(2);
                  }}
                  to="/mobileapps"
                >
                  iOS/Android App developement
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => {
                    setValue(1);
                    setSelectedMenuItem(3);
                  }}
                  to="/websites"
                >
                  Website Developement
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(2)}
                  to="/revolution"
                >
                  The Revolution
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(2)}
                  to="/revolution"
                >
                  Vision
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(2)}
                  to="/revolution"
                >
                  Technology
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(2)}
                  to="/revolution"
                >
                  Process
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(3)}
                  to="/about"
                >
                  About Us
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(3)}
                  to="/about"
                >
                  History
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(3)}
                  to="/about"
                >
                  Team
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(4)}
                  to="/contact"
                >
                  Contact Us
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <img
          src={footerAdornment}
          alt="black decorative slash"
          className={classes.adornment}
        />
        <Grid
          container
          className={classes.socialContainer}
          justify="flex-end"
          spacing={2}
        >
          <Grid
            item
            component={"a"}
            href="https://www.facebook.com/joshiamit892/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={facebook} alt="facebook link" className={classes.icon} />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.linkedin.com/in/amit-joshi-495111188/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin link" className={classes.icon} />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.instagram.com/joshiamit782/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={instagram}
              alt="instagram link"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
