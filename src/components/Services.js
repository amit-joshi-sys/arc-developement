import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";

import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    marginTop: "10rem",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
      marginTop: "6rem",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "0.8rem",
  },
  icon: {
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 15,
    marginTop: "0.6rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
  },
}));

const Services = (props) => {
  const { setValue, setSelectedMenuItem } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid container direction="column">
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5rem",
            marginTop: matchesSM ? "1rem" : "2rem",
          }}
        >
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="h4"
            gutterBottom
          >
            Services
          </Typography>
        </Grid>
        <Grid item>
          {" "}
          {/* ---- ios/android block start ---- */}
          <Grid
            container
            className={classes.serviceContainer}
            justify={matchesSM ? "center" : "flex-end"}
            style={{ marginTop: matchesSM ? "2rem" : "5rem" }}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
                width: matchesSM ? undefined : "35rem",
              }}
            >
              <Typography variant="h4">iOS/Android App Developement</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate Your Web Experience or Create a Standalone App
                {matchesSM ? null : <br />}With Either Mobile Platform.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  setValue(1);
                  setSelectedMenuItem(2);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid
              item
              style={{
                marginRight: matchesSM ? 0 : "5rem",
              }}
            >
              <img
                src={mobileIcon}
                alt="mobile apps icon"
                className={classes.icon}
                style={{ width: "20rem" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/* ---- custom software block start ---- */}
          <Grid
            container
            className={classes.serviceContainer}
            justify={matchesSM ? "center" : undefined}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5rem",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Custom Software Developement</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete Digital Solutions, From Investigation to{" "}
                <span className={classes.specialText}>Celebration.</span>
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  setValue(1);
                  setSelectedMenuItem(1);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                src={customSoftwareIcon}
                alt="custom software icon"
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {" "}
          {/* ---- websites block start ---- */}
          <Grid
            container
            className={classes.serviceContainer}
            justify={matchesSM ? "center" : "flex-end"}
            style={{ marginBottom: matchesSM ? "2rem" : "5rem" }}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
                width: matchesSM ? undefined : "35rem",
              }}
            >
              <Typography variant="h4">Website Developement</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized For Search Engines, Built For Speed.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/websites"
                onClick={() => {
                  setValue(1);
                  setSelectedMenuItem(3);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid
              item
              style={{
                marginRight: matchesSM ? 0 : "5rem",
              }}
            >
              <img
                src={websitesIcon}
                alt="website icon"
                className={classes.icon}
                style={{ width: "20rem" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
