import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import documentAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";
import roots from "../assets/root.svg";
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
  itemContainer: {
    maxWidth: "40rem",
  },
}));

const CustomSoftware = (props) => {
  const { setValue, setSelectedMenuItem } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const documentOptions = {
    loop: true,
    autoplay: true,
    animationData: documentAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
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
                to="/services"
                onClick={() => setSelectedMenuItem(0)}
              >
                <img src={backArrow} alt="back to services page" />
              </IconButton>
            </Grid>
          </Hidden>

          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Custom Software Developement
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Whether we're replacing old software or inventing new solutions,
                Arc developement is here to help your business tackle
                technology.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Using regular commercial software leaves you with a lot of stuff
                yoy don't need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Our customer solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                We create exactly what you want it.
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
                to="/mobileapps"
                onClick={() => setSelectedMenuItem(2)}
              >
                <img
                  src={forwardArrow}
                  alt="forward to iOS/android app developement page"
                />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          justify="center"
          style={{ marginTop: "10rem", marginBottom: "15rem" }}
        >
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{ maxWidth: "40rem" }}
          >
            <Grid item>
              <Typography variant="h4" style={{ marginBottom: "1rem" }}>
                Save Energy
              </Typography>
            </Grid>
            <Grid item>
              <img src={lightbulb} alt="light bulb" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{
              maxWidth: "40rem",
              marginTop: matchesSM ? "5rem" : 0,
              marginBottom: matchesSM ? "5rem" : 0,
            }}
          >
            <Grid item>
              <Typography variant="h4" style={{ marginBottom: "1rem" }}>
                Save Time
              </Typography>
            </Grid>
            <Grid item>
              <img src={stopwatch} alt="stopwatch" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{ maxWidth: "40rem" }}
          >
            <Grid item>
              <Typography variant="h4" style={{ marginBottom: "1rem" }}>
                Save Money
              </Typography>
            </Grid>
            <Grid item>
              <img src={cash} alt="cash" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="space-between"
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            className={classes.itemContainer}
            md
            style={{ marginBottom: matchesMD ? "8rem" : undefined }}
          >
            <Grid item container direction="column" md>
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesSM ? "center" : undefined}
                >
                  Digital Documents & Data
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Billions are spent annually on the purchasing, printing and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottomline as well.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication, and help the
                  Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={documentOptions}
                style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            className={classes.itemContainer}
            md
            style={{ marginBottom: matchesMD ? "8rem" : undefined }}
          >
            <Grid item md>
              <Lottie
                options={scaleOptions}
                style={{ maxHeight: 260, maxWidth: 280 }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                  Scale
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : "right"}
                >
                  Whether you're a large brand, just getting started, or taking
                  off right now, our application architecture ensure pain-free
                  growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{
            marginTop: matchesSM ? "4rem" : "10rem",
            marginBottom: "10rem",
          }}
        >
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <img
                src={roots}
                alt="tree with roots extending out"
                height={matchesSM ? "230rem" : "450rem"}
                width={matchesSM ? "230rem" : "450rem"}
              />
            </Grid>
            <Grid item className={classes.itemContainer}>
              <Typography variant="h4" align="center">
                Root-Cause Analysis
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Many problem are merely symptoms of larger, underlying issues.
              </Typography>
              <Typography variant="body1" paragraph align="center">
                We can help you thoroghly examine all areas of your business to
                develope a holistic plan for the most effective implementation
                of technology.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="space-between"
          style={{ marginBottom: "7rem" }}
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            className={classes.itemContainer}
            md
            style={{ marginBottom: matchesMD ? "8rem" : undefined }}
          >
            <Grid item container direction="column" md>
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesSM ? "center" : undefined}
                >
                  Automation
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Why waste time when you don't have to.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your bussiness, not busy work.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={automationOptions}
                style={{ maxHeight: 290, maxWidth: 280 }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            className={classes.itemContainer}
            md
            style={{
              marginBottom: matchesMD ? "8rem" : undefined,
            }}
          >
            <Grid item md>
              <Lottie
                options={uxOptions}
                style={{ maxHeight: 310, maxWidth: 155 }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                  User Experience Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : "right"}
                >
                  A good design that isn't usable isn't a good design.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : "right"}
                >
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : "right"}
                >
                  By prioritizing users and the real ways they interact with
                  technology we're able to develope unique, personable
                  experiences that solve problems than create new one.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} />
    </>
  );
};

export default CustomSoftware;
