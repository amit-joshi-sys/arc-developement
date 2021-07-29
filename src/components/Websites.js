import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import forwardArrow from "../assets/forwardArrowDisabled.svg";
import backArrow from "../assets/backArrow.svg";
import analytics from "../assets/analytics.svg";
import ecommerce from "../assets/ecommerce.svg";
import outreach from "../assets/outreach.svg";
import seo from "../assets/seo.svg";
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

const Websites = (props) => {
  const { setSelectedMenuItem, setValue } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid container className={classes.mainContainer}>
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
                to="/mobileapps"
                onClick={() => setSelectedMenuItem(2)}
              >
                <img src={backArrow} alt="back iOS/android app page" />
              </IconButton>
            </Grid>
          </Hidden>

          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Website Developement
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Having a website is a necessity in today's business world. They
                give you one central, public location to let people know who you
                are, what you do, and why you are best at it.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                From simply having your hours posted to having a full fledged
                online store, making yourself as accesible as possible to users
                online drives growth and enables you to reach new customers.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowContainer}
              style={{ marginRight: "-3.5rem" }}
            >
              <IconButton style={{ backgroundColor: "transparent" }}>
                <img src={forwardArrow} alt="back to services" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          style={{ marginTop: "8rem" }}
        >
          <Grid item style={{ marginLeft: matchesMD ? 0 : "2rem" }}>
            <Typography variant="h2">Analytics</Typography>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            direction={matchesMD ? "column" : "row"}
          >
            <Grid item>
              <img
                src={analytics}
                alt="website analytics"
                style={{ maxWidth: 275, maxHeight: 275 }}
                md
              />
            </Grid>
            <Grid
              item
              md
              style={{
                maxWidth: "25rem",
                marginLeft: matchesMD ? 0 : "0.9rem",
              }}
            >
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Knowledge is power, and data is 21st Century gold. Analyzing
                this data can reveal hidden patterns and trends in your
                business, empowering you to make smarter decisions with
                measurable effects.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{ marginTop: "8rem" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h2">E-Commerce</Typography>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify={matchesMD ? "center" : "flex-end"}
            direction={matchesMD ? "column" : "row"}
          >
            <Grid item>
              <img
                src={ecommerce}
                alt="ecommerce website"
                style={{ maxWidth: 275, maxHeight: 275 }}
                md
              />
            </Grid>
            <Grid
              item
              md
              style={{ maxWidth: "25rem", marginLeft: matchesMD ? 0 : "2rem" }}
            >
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "inherit"}
              >
                It's no secret that people like to shop online.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "inherit"}
              >
                In 2017 over $2.3 trillion was spent in e-commerce, and it's
                time for your slice of that pie.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{ marginTop: "8rem" }}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item style={{ marginLeft: matchesMD ? 0 : "2rem" }}>
            <Typography variant="h2">Outreach</Typography>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            direction={matchesMD ? "column" : "row"}
          >
            <Grid item>
              <img
                src={outreach}
                alt="outreach"
                style={{ maxWidth: 275, maxHeight: 275 }}
                md
              />
            </Grid>
            <Grid
              item
              md
              style={{
                maxWidth: "25rem",
                marginLeft: matchesMD ? 0 : "0.9rem",
              }}
            >
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "inherit"}
              >
                Draw people in with a dazzling website. Showing off your product
                online is a great way to help customers decide what's right for
                them before visiting in person.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{ marginTop: "8rem" }}
          alignItems="center"
        >
          <Grid item style={{ marginLeft: matchesMD ? 0 : "2rem" }}>
            <Typography variant="h2" align={matchesMD ? "center" : "inherit"}>
              Search Engine Optimization
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify={matchesMD ? "center" : "flex-end"}
            direction={matchesMD ? "column" : "row"}
          >
            <Grid item>
              <img
                src={seo}
                alt="search engine optimization"
                style={{ maxWidth: 275, maxHeight: 275 }}
                md
              />
            </Grid>
            <Grid
              item
              md
              style={{ maxWidth: "25rem", marginLeft: matchesMD ? 0 : "2rem" }}
            >
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "inherit"}
              >
                How often have you ever been to the second page of Google
                results.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "inherit"}
              >
                If you like us, probably never.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : "inherit"}
              >
                Customers don't go there either, so we make sure your website is
                designed to end up on top.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} />
    </>
  );
};

export default Websites;
