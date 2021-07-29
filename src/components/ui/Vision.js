import React from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/styles";

import vision from "../../assets/vision.svg";

const useStyles = makeStyles((theme) => ({
  vision: {
    marginTop: "4rem",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0.8rem",
      paddingRight: "0.8rem",
    },
  },
}));

const Vision = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid
          item
          container
          alignItems="center"
          direction={matchesSM ? "column" : "row"}
          className={classes.vision}
        >
          <Grid item md style={{ marginBlock: matchesSM ? "2rem" : 0 }}>
            <img
              src={vision}
              alt="vision"
              style={{
                maxWidth: matchesSM ? "20rem" : "25rem",
                maxHeight: "15rem",
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            style={{
              maxWidth: "40rem",
              marginLeft: matchesSM ? 0 : "2rem",
            }}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? "center" : "right"}
                gutterBottom
              >
                Vision
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                The rise of computers, and subsequently the Internet, has
                completely altered every aspect of human life. This has
                increased our comfort, broadened our connections, and reshaped
                how we view the world.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                What once was confined to huge rooms and teams of engineers now
                resides in every single one of our hands. Harnessing this
                unlimited potential by using it to solve problems and better
                lives is at the heart of everything we do.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                We want to help businesses capitalize on the latest and greatest
                technology. The best way to predict the future is to be the one
                building it, and we want to help guide the world into this next
                chapter of technological expansion, exploration, and innovation.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                By holding ourselves to rigorous standards and pristine quality,
                we can ensure you have the absolute best tools necessary to
                thrive in this new frontier.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                We see a future where every individual has personalized software
                custom tailored to their lifestyle, culture, and interests,
                helping them overcome life’s obstacles. Each project is a step
                towards that goal.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Vision;
