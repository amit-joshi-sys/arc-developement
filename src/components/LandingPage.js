import React from "react";
import Lottie from "react-lottie";
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
} from "@material-ui/core";
import ButtonArrow from "../components/ui/ButtonArrow";
import { useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";

import CallToAction from "./ui/CallToAction";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "1.5rem",
  },
  animation: {
    maxWidth: "30rem",
    minWidth: "20rem",
    marginTop: "2rem",
    marginLeft: "8%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "25rem",
    },
  },
  heroTextContainer: {
    minWidth: "21em",
    marginLeft: "0.8rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  buttonContainer: {
    marginTop: "1rem",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
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
  subtitle: {
    marginBottom: "0.8rem",
  },
  icon: {
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "7rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "4rem",
      paddingBottom: "4rem",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

const LandingPage = (props) => {
  const { setValue, setSelectedMenuItem } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          {" "}
          {/* ---- HEro Block start ---- */}
          <Grid container justify="flex-end" alignItems="center">
            <Grid sm item className={classes.heroTextContainer}>
              <Typography align="center" variant="h2">
                Bringing West Coast Technology
                <br />
                To The East
              </Typography>
              <Grid
                container
                justify="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.estimateButton}
                    component={Link}
                    to="/estimate"
                    onClick={() => setValue(null)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                    component={Link}
                    to="/revolution"
                    onClick={() => setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} width={"100%"} height={"100%"} />
            </Grid>
          </Grid>
        </Grid>{" "}
        {/* ---- HEro Block end ---- */}
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
          {/* ---- ios/android block start ---- */}
          <Grid
            container
            className={classes.serviceContainer}
            justify={matchesSM ? "center" : "flex-end"}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
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
            justify={matchesSM ? "center" : undefined}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5rem",
                textAlign: matchesSM ? "center" : undefined,
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
            <Grid item>
              <img
                src={websitesIcon}
                alt="website icon"
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/* revoltuion block */}
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ height: "50rem", marginTop: "10rem" }}
          >
            <Card className={classes.revolutionCard}>
              <CardContent style={{ textAlign: "center" }}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visionary insights coupled with cutting-edge technology is
                      a recipe of revoltuion.
                    </Typography>
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      component={Link}
                      to="/revolution"
                      onClick={() => setValue(2)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.blue}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>
        <Grid item>
          {/* information block */}
          <Grid container style={{ height: "50rem" }} alignItems="center">
            <Grid
              item
              container
              style={{
                position: "absolute",
                textAlign: matchesXS ? "center" : "inherit",
              }}
              direction={matchesXS ? "column" : "row"}
            >
              <Grid
                item
                sm
                style={{
                  marginLeft: matchesXS ? 0 : matchesSM ? "2rem" : "5rem",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "#fafafa" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's Get Personal
                  </Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      style={{ color: "#fafafa", borderColor: "#fafafa" }}
                      component={Link}
                      to="/about"
                      onClick={() => setValue(3)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="#fafafa" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : matchesSM ? "2rem" : "5rem",
                  textAlign: matchesXS ? "center" : "right",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "#fafafa" }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">Say Hello!</Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      style={{ color: "#fafafa", borderColor: "#fafafa" }}
                      component={Link}
                      to="/contact"
                      onClick={() => setValue(4)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="#fafafa" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div className={classes.infoBackground} />
          </Grid>
        </Grid>
        <Grid item>
          {/* call to action block */}
          <CallToAction setValue={setValue} />
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
