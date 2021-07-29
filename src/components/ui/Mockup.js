import React from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import mockupIcon from "../../assets/mockupIcon.svg";

const useStyles = makeStyles((theme) => ({
  consultationContainer: {
    backgroundColor: "#e57373",
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

const Mockup = () => {
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
                Mockup
              </Typography>
            </Grid>
            <Grid item style={{ maxWidth: matchesSM ? "30rem" : "14rem" }}>
              <Typography
                variant="body2"
                paragraph
                style={{ color: "#f5f5f5" }}
                align={matchesSM ? "center" : "inherit"}
              >
                After we settle on the best path forward and decide on a
                solution to pursue, details like the cost and timeline will be
                finalized.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                style={{ color: "#f5f5f5" }}
                align={matchesSM ? "center" : "inherit"}
              >
                Then it’s time for us to start on your minimum viable product.
                That’s just a fancy term for a mockup, which doesn’t include
                colors, images, or any other polished design elements, but
                captures the essential layout structure and functionality
              </Typography>
              <Typography
                variant="body2"
                paragraph
                style={{ color: "#f5f5f5" }}
                align={matchesSM ? "center" : "inherit"}
              >
                Then it’s time for us to start on your minimum viable product.
                That’s just a fancy term for a mockup, which doesn’t include
                colors, images, or any other polished design elements, but
                captures the essential layout structure and functionality.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <img
              src={mockupIcon}
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

export default Mockup;
