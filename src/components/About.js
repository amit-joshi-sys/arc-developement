import React from "react";
import { Grid, useMediaQuery, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import history from "../assets/history.svg";
import techGuru from "../assets/yearbook.svg";
import founder from "../assets/founder.jpg";
import puppy from "../assets/puppy.svg";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  aboutDescription: {
    color: theme.palette.common.blue,
    textAlign: "center",
    maxWidth: "50rem",
    marginTop: "4rem",
  },
  rowContainer: {
    marginTop: "8rem",
    paddingLeft: "5rem",
    paddingRight: "5rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
  founderImage: {
    maxHeight: "7rem",
    maxWidth: "7rem",
    borderRadius: "50%",
    objectFit: "cover",
    marginTop: "0.2rem",
    marginBottom: "0.2rem",
  },
}));

const About = (props) => {
  const { setValue } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid container direction="column">
        <Grid
          item
          style={{ marginTop: "2.5rem", marginLeft: matchesSM ? 0 : "5rem" }}
        >
          <Typography variant="h4" align={matchesSM ? "center" : "inherit"}>
            About Us
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Typography
            variant="body2"
            paragraph
            className={classes.aboutDescription}
          >
            Whether it be person to person, business to consumer, or an
            individual to their interests, technology is meant to bring us
            closer to what we care about in the best way possible. Arc
            Development will use that principle to provide fast, modern,
            inexpensive, and aesthetic software to the Midwest and beyond.
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          className={classes.rowContainer}
          direction={matchesSM ? "column" : "row"}
          justify="space-between"
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : "inherit"}
              >
                History
              </Typography>
            </Grid>
            <Grid item style={{ maxWidth: "50rem" }}>
              <Typography
                variant="body1"
                paragraph
                style={{ fontSize: "0.9rem" }}
                align={matchesSM ? "center" : "inherit"}
              >
                We’re the new kid on the block.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ fontSize: "0.9rem" }}
                align={matchesSM ? "center" : "inherit"}
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ fontSize: "0.9rem" }}
                align={matchesSM ? "center" : "inherit"}
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ fontSize: "0.9rem" }}
                align={matchesSM ? "center" : "inherit"}
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ fontSize: "0.9rem" }}
                align={matchesSM ? "center" : "inherit"}
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <img
              src={history}
              alt="arc developement history"
              style={{
                maxWidth: "20rem",
                maxHeight: "20rem",
                marginLeft: matchesSM ? 0 : "8rem",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify={matchesSM ? undefined : "space-between"}
          alignItems={matchesSM ? "center" : undefined}
          direction={matchesSM ? "column" : "row"}
          style={{
            paddingLeft: "2rem",
            paddingRight: "2rem",
            marginTop: "5rem",
          }}
        >
          <Grid
            item
            container
            direction="column"
            md
            style={{
              maxWidth: "20rem",
              maxHeight: "20rem",
              marginTop: matchesSM ? 0 : "13rem",
            }}
          >
            <Grid item>
              <img
                src={techGuru}
                alt="tech Guru"
                style={{ maxWidth: "20rem", maxHeight: "18rem" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1" style={{ fontSize: "0.7rem" }}>
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            md
            style={{
              maxWidth: "15rem",
              marginLeft: matchesSM ? 0 : "1rem",
              marginRight: matchesSM ? 0 : "1rem",
              marginTop: matchesSM ? "4rem" : 0,
              marginBottom: matchesSM ? "4rem" : 0,
            }}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Team
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{ fontSize: "0.7rem" }}
                align="center"
                paragraph
              >
                Zachary Reece, Founder
              </Typography>
              <Typography
                variant="body1"
                style={{ fontSize: "0.7rem" }}
                align="center"
                paragraph
              >
                I started coding when I was 9 years old.
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={founder}
                alt="founder"
                className={classes.founderImage}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ fontSize: "0.7rem" }}
                align="center"
              >
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ fontSize: "0.7rem" }}
                align="center"
              >
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            style={{
              maxWidth: "17rem",
              maxHeight: "20rem",
              marginTop: matchesSM ? 0 : "13.7rem",
            }}
          >
            <Grid item>
              <img
                src={puppy}
                alt="puppy"
                style={{
                  maxWidth: "17rem",
                  maxHeight: "17rem",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ fontSize: "0.7rem" }}
              >
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} />
    </>
  );
};

export default About;
