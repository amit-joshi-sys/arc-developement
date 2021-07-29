import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Grid,
  useMediaQuery,
  Typography,
  Hidden,
  IconButton,
} from "@material-ui/core";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import integrationAnimation from "../animations/integrationAnimation/data.json";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      paddingTop: "1rem",
    },
  },
  heading: {
    maxWidth: "40rem",
  },
  arrowContainer: {
    marginTop: "0.7rem",
  },
}));

const MobileApps = (props) => {
  const { setSelectedMenuItem, setValue } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item container justify={matchesMD ? "center" : "space-between"}>
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowContainer}
              style={{ marginRight: "1rem", marginLeft: "-3.5rem" }}
            >
              <IconButton
                style={{ backgroundColor: "transparent" }}
                component={Link}
                to="/customsoftware"
                onClick={() => setSelectedMenuItem(1)}
              >
                <img src={backArrow} alt="back to custom software page" />
              </IconButton>
            </Grid>
          </Hidden>

          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                iOS/Android App Developement
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Mobile apps allow you to take your goals on the go.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Whether you want an app for your customers, employees, or
                yourself, we can build cross-platform native solutions for any
                part of your business process. This opens up to a whole new
                world of possibilities by taking advantage of phone features
                like camera, GPS, push notifications and more.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Convenience. Connection.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowContainer}
              style={{ marginRight: "-3.5rem" }}
            >
              <IconButton
                style={{ backgroundColor: "transparent" }}
                component={Link}
                to="/websites"
                onClick={() => setSelectedMenuItem(3)}
              >
                <img
                  src={forwardArrow}
                  alt="forward to website developement page"
                />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          style={{ marginTop: "10rem", marginBottom: "10rem" }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesMD ? "center" : undefined}
              >
                Integration
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Our technology enables an innate interconnection between web and
                mobile applications, putting everything you need right in one
                convenient place.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                This allows you to extend your reach, reinvent interactions, and
                develope a stronger relationship with your users than ever
                before.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Lottie
              options={defaultOptions}
              isStopped={matchesMD ? true : false}
              style={{ maxWidth: "17rem" }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            align={matchesMD ? "center" : "right"}
          >
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesMD ? "center" : "right"}
              >
                Simultaneous Platform Support
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "right"}
              >
                Our cutting-edge developement process allows us to create apps
                for iPhone, Android, and tablets - all at the same time.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "right"}
              >
                This significantly reduces costs and create a more unified brand
                experience across all devices.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          style={{ marginBottom: "10rem" }}
        >
          <Grid item container direction="column" alignItems="center" md>
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Extend Functionality
              </Typography>
            </Grid>
            <Grid item>
              <img src={swiss} alt="swiss knief" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            md
            style={{
              marginTop: matchesMD ? "5rem" : 0,
              marginBottom: matchesMD ? "5rem" : 0,
            }}
          >
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Extend Access
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={access}
                alt="tear-one-off sign"
                style={{ maxWidth: matchesSM ? "20rem" : "25rem" }}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" alignItems="center" md>
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Increase EngageMent
              </Typography>
            </Grid>
            <Grid item>
              <img src={engagement} alt="app with notification" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} />
    </>
  );
};

export default MobileApps;
