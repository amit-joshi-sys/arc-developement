import { createTheme } from "@material-ui/core";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGray = "#868686";

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "0.8rem",
        fontWeight: 500,
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
      root: {
        fontSize: "0.8rem",
        width: "15rem",
        marginTop: "0.8rem",
      },
    },
    MuiTextField: {
      fontSize: "0.8rem",
      width: "15rem",
      height: "10rem",
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.4rem",
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.4rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: `${arcBlue}`,
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: arcBlue,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: `${arcGray}`,
    },
    subtitle2: {
      color: "#fafafa",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGray,
      fontWeight: 300,
    },
    body2: {
      fontSize: "0.9rem",
      color: arcGray,
      fontWeight: 300,
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "#fafafa",
    },
    revolution: {
      fontFamily: "Pacifico",
      fontSize: "2rem",
      textTransform: "none",
      color: arcBlue,
    },
    learnButton: {
      borderColor: `${arcBlue}`,
      color: `${arcBlue}`,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
