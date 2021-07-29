import React from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import Vision from "./ui/Vision";
import Technology from "./ui/Technology";
import Consultation from "./ui/Consultation";
import Mockup from "./ui/Mockup";
import Process from "./ui/Process";
import CallToAction from "./ui/CallToAction";

import reviewIcon from "../assets/reviewIcon.svg";
import designIcon from "../assets/designIcon.svg";
import buildIcon from "../assets/buildIcon.svg";
import launchIcon from "../assets/launchIcon.svg";
import maintainIcon from "../assets/maintainIcon.svg";
import iterateIcon from "../assets/iterateIcon.svg";

const useStyles = makeStyles((theme) => ({
  revolution: {
    ...theme.typography.revolution,
    marginTop: "2.5rem",
    marginLeft: "8rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
}));

const Revolution = (props) => {
  const { setValue } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const review = [
    "Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.",
    "We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.",
    "Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.",
  ];

  const review2 = [
    "A second round of review is essential to our goal of creating exactly what you want, exactly how you want it",
    "This time we’ll be going over the finalized designs in another fully interactive demonstration. Again this gives you an opportunity to tweak things and make sure we get everything right the first time.",
  ];

  const design = [
    "Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.",
    "No aspect is superfluous, and care will be taken with every decision.",
  ];

  const build = [
    "Here’s where we get down to business.",
    "Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.",
    "Each area is then developed in order of importance until ready to be connected to the next piece",
    "Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.",
    "Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee compatibility with all intended devices.",
    "Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.",
  ];

  const launch = [
    "The moment we’ve all been waiting for.",
    "When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.",
    "When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.",
  ];

  const maintain = [
    "Our work doesn’t end there.",
    "After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.",
    "From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are discovered in future projects, we will implement those advancements in your project as part of our routine maintenance",
  ];

  const iterate = [
    "The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.",
    "By planning for future features and changes we can build and evolve your application over time. As new use cases and customer needs develop we can respond with continuous integration of new content.",
    "Our iterative process will keep you current and competitive, allowing you to quickly implement changes instead of waiting months for a single update.",
  ];

  return (
    <>
      <Grid container>
        <Grid item container justify={matchesSM ? "center" : undefined}>
          <Typography className={classes.revolution}>The Revolution</Typography>
        </Grid>
        <Vision />
        <Technology />
        <Grid
          item
          container
          justify="center"
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          <Typography variant="h4" align="center">
            Process
          </Typography>
        </Grid>
        <Consultation />
        <Mockup />
        <Process
          paragraphs={review}
          title="Review"
          backgroundColor="#4caf50"
          icon={reviewIcon}
        />
        <Process
          paragraphs={design}
          title="Design"
          backgroundColor="#F4A460"
          icon={designIcon}
        />
        <Process
          paragraphs={review2}
          title="Review"
          backgroundColor="#4caf50"
          icon={reviewIcon}
        />
        <Process
          paragraphs={build}
          title="Build"
          backgroundColor="#f9a825"
          icon={buildIcon}
        />
        <Process
          paragraphs={launch}
          title="Launch"
          backgroundColor="#bf360c"
          icon={launchIcon}
        />
        <Process
          paragraphs={maintain}
          title="Maintain"
          backgroundColor="#7e57c2"
          icon={maintainIcon}
        />
        <Process
          paragraphs={iterate}
          title="Iterate"
          backgroundColor="#29b6f6"
          icon={iterateIcon}
        />
        <CallToAction setValue={setValue} />
      </Grid>
    </>
  );
};

export default Revolution;
