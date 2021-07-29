import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  Input,
  InputLabel,
  Button,
  Snackbar,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core";

import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import send from "../assets/send.svg";

import CallToAction from "./ui/CallToAction";
import ContactDialog from "./ui/ContactDialog";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  contactForm: {
    marginLeft: "3rem",
    marginRight: "5rem",
    marginTop: "2rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
      padding: "2rem",
    },
  },
  sendMessage: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    textAlign: "center",
    padding: "0.5rem",
    marginTop: "2rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  textField: {
    fontSize: "0.8rem",
    width: "15rem",
    borderTop: `2px solid ${theme.palette.common.blue}`,
    borderLeft: `2px solid ${theme.palette.common.blue}`,
    borderRight: `2px solid ${theme.palette.common.blue}`,
    padding: "0.9rem",
    borderRadius: "5px",
  },
}));

const Contact = (props) => {
  const { setValue } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [field, setField] = useState({
    name: "",
    emailId: "",
    phoneNumber: 0,
    customMessage: "",
  });
  const { name, emailId, phoneNumber, customMessage } = field;
  const [error, setError] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const disabledUntil =
    name === "" ||
    emailId === "" ||
    phoneNumber.length < 10 ||
    customMessage === "" ||
    error !== "";
  const dialogHandler = (value) => {
    setOpenDialog(value);
  };

  const handleChange = (name) => (e) => {
    setField({ ...field, [name]: e.target.value });
  };

  const emptyFields = () => {
    setField({ name: "", emailId: "", phoneNumber: 0, customMessage: "" });
  };

  useEffect(() => {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailId
      )
    ) {
      setError("");
    } else {
      setError("Email Is Badly Formatted");
    }
  }, [emailId]);

  return (
    <>
      <Grid container direction={matchesSM ? "column" : "row"}>
        <Grid
          item
          container
          direction="column"
          className={classes.contactForm}
          md={2}
        >
          <Grid item>
            <Typography variant="h4" align={matchesSM ? "center" : "inherit"}>
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : "inherit"}
              style={{
                color: theme.palette.common.blue,
                fontSize: "0.8rem",
                fontWeight: 500,
              }}
            >
              We're Waiting.
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            style={{ marginTop: "1.3rem" }}
          >
            <Grid item container justify={matchesSM ? "center" : undefined}>
              <Grid item>
                <img
                  src={phone}
                  alt="contact number"
                  style={{ maxWidth: "0.8rem", maxHeight: "0.8rem" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.blue,
                    fontSize: "0.7rem",
                    marginLeft: "0.5rem",
                    fontWeight: "400",
                  }}
                >
                  (+91) 7498403382
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justify={matchesSM ? "center" : undefined}>
              <Grid item>
                <img
                  src={email}
                  alt="email id"
                  style={{ maxWidth: "0.8rem", maxHeight: "0.8rem" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.blue,
                    fontSize: "0.7rem",
                    marginLeft: "0.5rem",
                    fontWeight: "400",
                  }}
                >
                  joshiamit782@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            style={{ marginTop: "2rem" }}
            alignItems={matchesSM ? "center" : undefined}
          >
            <Grid item>
              <InputLabel>Name</InputLabel>
              <Input
                placeholder="John Doe"
                type="text"
                value={name}
                onChange={handleChange("name")}
                className={classes.input}
              />
            </Grid>
            <Grid item style={{ marginTop: "0.7rem", marginBottom: "0.7rem" }}>
              <InputLabel>Phone Number</InputLabel>
              <Input
                placeholder="(+91) 6635372234"
                type="number"
                value={phoneNumber}
                onChange={handleChange("phoneNumber")}
                className={classes.input}
              />
            </Grid>
            <Grid item>
              <InputLabel>Email</InputLabel>
              <TextField
                error={error}
                placeholder="johndoe@example.com"
                type="email"
                value={emailId}
                onChange={handleChange("emailId")}
                className={classes.input}
                helperText={error}
              />
            </Grid>
            <Grid item style={{ marginTop: "3rem" }}>
              <TextField
                placeholder="Hello! We have an idea that we'd just love to share."
                multiline
                value={customMessage}
                onChange={handleChange("customMessage")}
                rows={10}
                InputProps={{ className: classes.textField }}
              />
            </Grid>
            <Grid item container justify="center">
              <Button
                className={classes.sendMessage}
                disabled={disabledUntil}
                onClick={() => dialogHandler(true)}
              >
                Send Message
                <img
                  src={send}
                  alt="send message"
                  style={{ marginLeft: "0.5rem" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          md
          style={{ marginLeft: matchesSM ? 0 : "3rem", width: "100%" }}
        >
          <CallToAction
            setValue={setValue}
            height={matchesSM ? null : "100%"}
          />
        </Grid>
      </Grid>
      {openDialog ? (
        <ContactDialog
          open={openDialog}
          name={name}
          emailId={emailId}
          phoneNumber={phoneNumber}
          customMessage={customMessage}
          dialogHandler={dialogHandler}
          handleChange={handleChange}
          error={error}
          disabledUntil={disabledUntil}
          emptyFields={emptyFields}
          setAlert={setAlert}
        />
      ) : null}
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={3000}
      />
    </>
  );
};

export default Contact;
