import React from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/styles";
import Lottie from "react-lottie";

import technologyAnimation from "../../animations/technologyAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  technology: {
    marginTop: "8rem",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0.8rem",
      paddingRight: "0.8rem",
    },
  },
}));

const Technology = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid container>
        <Grid
          item
          container
          alignItems="center"
          direction={matchesSM ? "column" : "row"}
          className={classes.technology}
        >
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
                align={matchesSM ? "center" : "left"}
                gutterBottom
              >
                Technology
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "left"}
              >
                In 2013, Facebook invented a new way of building websites. This
                new system, React.js, completely revolutionizes the process and
                practice of website development
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "left"}
              >
                Instead of chaining together long individual pages, like
                traditional websites, React websites are built with little
                chunks of code called components. These components are faster,
                easier to maintain, and are easily reused and customized, each
                serving a singular purpose.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "left"}
              >
                Two years later they shocked the world by releasing a similar
                system, React Native, for producing iOS and Android apps.
                Instead of having to master two completely separate development
                platforms, you can leverage the knowledge you already possessed
                from building websites and reapply it directly! This was a huge
                leap forward.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "left"}
              >
                This technology is now being used by companies like AirBnB,
                Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
                Facebook purchased Instagram large portions of it were even
                rebuilt using React.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "left"}
              >
                Developers have since built on top of these systems by
                automating project setup and deployment, allowing creators to
                focus as much as possible on their work itself.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "left"}
              >
                These technical advancements translate into savings by
                significantly reducing the workload and streamlining the
                workflow for developing new pieces of software, while also
                lowering the barrier to entry for mobile app development.
              </Typography>
              <Typography
                variant="body2"
                paragraph
                align={matchesSM ? "center" : "left"}
              >
                This puts personalization in your pocket — faster, better, and
                more affordable than ever before.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginBlock: matchesSM ? "2rem" : 0 }}>
            <Lottie
              options={defaultOptions}
              isStopped={matchesSM ? true : false}
              style={{ maxHeight: 300, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Technology;
