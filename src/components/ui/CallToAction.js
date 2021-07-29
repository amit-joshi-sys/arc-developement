import { Typography, Grid, Button, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ButtonArrow from "./ButtonArrow";
import { Link } from "react-router-dom";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
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
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: "5rem",
    marginLeft: "2rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { setValue, height } = props;
  return (
    <>
      <Grid
        container
        alignItems="center"
        className={classes.background}
        justify={matchesSM ? "center" : "space-between"}
        direction={matchesSM ? "column" : "row"}
        style={{ height: height ? height : "30rem" }}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5rem",
            textAlign: matchesSM ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2">
                Simple Software.
                <br />
                Revolutionary Result.
              </Typography>
              <Typography variant="subtitle2">
                Take The Advantage Of The 21st Century.
              </Typography>
              <Grid item container justify={matchesSM ? "center" : undefined}>
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  component={Link}
                  to="/revolution"
                  onClick={() => setValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimate}
            component={Link}
            to="/estimate"
            onClick={() => setValue(null)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CallToAction;
