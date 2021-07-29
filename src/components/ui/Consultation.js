import React from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import consultationIcon from "../../assets/consultationIcon.svg";

const useStyles = makeStyles((theme) => ({
  consultationContainer: {
    backgroundColor: "#bdbdbd",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0.8rem",
      paddingRight: "0.8rem",
    },
  },
}));

const Consultation = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid container>
        <Grid
          item
          container
          className={classes.consultationContainer}
          alignItems="center"
          direction={matchesSM ? "column" : "row"}
        >
          <Grid
            item
            container
            direction="column"
            style={{ marginLeft: matchesSM ? 0 : "2rem" }}
            alignItems={matchesSM ? "center" : undefined}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                style={{ color: "#212121" }}
                align={matchesSM ? "center" : "inherit"}
              >
                Consultation
              </Typography>
            </Grid>
            <Grid item style={{ maxWidth: matchesSM ? "30rem" : "14rem" }}>
              <Typography
                variant="body2"
                paragraph
                style={{ color: "#f5f5f5" }}
                align={matchesSM ? "center" : "inherit"}
              >
                Our process begins the moment you realize you need a piece of
                technology for your business. Whether you already have an idea
                for where to start and what to do, or if you just know you want
                to step things up, our initial consultation will help you
                examine your business holistically to find the best solutions.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                style={{ color: "#f5f5f5" }}
                align={matchesSM ? "center" : "inherit"}
              >
                Detailed notes will be taken on your requirements and
                constraints, while taking care to identify other potential areas
                for consideration
              </Typography>
              <Typography
                variant="body2"
                paragraph
                style={{ color: "#f5f5f5" }}
                align={matchesSM ? "center" : "inherit"}
              >
                Cutting-edge advancements in machine learning like object
                detection and natural language processing allow computers to do
                things previously unimaginable, and our expertise and intuition
                will help usher you into this new future of possibilities.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <img
              src={consultationIcon}
              alt="consultation Icon"
              style={{
                maxWidth: "15rem",
                maxHeight: "10rem",
                marginLeft: matchesSM ? 0 : "-6rem",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Consultation;
