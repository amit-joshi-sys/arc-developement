import React from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  processContainer: {
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

const Process = (props) => {
  const { paragraphs, title, backgroundColor, icon } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid container>
        <Grid
          item
          container
          className={classes.processContainer}
          style={{ backgroundColor: `${backgroundColor}` }}
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
                {title}
              </Typography>
            </Grid>
            <Grid item style={{ maxWidth: matchesSM ? "30rem" : "14rem" }}>
              {paragraphs.map((paragraph) => (
                <Typography
                  variant="body2"
                  paragraph
                  style={{ color: "#f5f5f5" }}
                  align={matchesSM ? "center" : "inherit"}
                >
                  {paragraph}
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Grid item md>
            <img
              src={icon}
              alt="consultation Icon"
              style={{
                maxWidth: "22rem",
                maxHeight: "20rem",
                marginLeft: matchesSM ? 0 : "-6rem",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Process;
