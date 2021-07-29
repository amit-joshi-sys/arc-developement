import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Input, TextField, InputLabel, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

import send from "../../assets/send.svg";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: 0,
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogContainer: {
    borderRadius: 0,
    marginTop: "8.3rem",
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
  sendMessage: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    textAlign: "center",
    padding: "0.5rem",
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const ContactDialog = (props) => {
  const {
    open,
    name,
    emailId,
    phoneNumber,
    customMessage,
    dialogHandler,
    handleChange,
    error,
    disabledUntil,
    emptyFields,
    setAlert,
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  const onConfirm = () => {
    setLoading(true);
    axios
      .get(
        "https://us-central1-material-ui-project-d3f38.cloudfunctions.net/sendMail",
        {
          params: {
            name: name,
            email: emailId,
            phoneNumber: phoneNumber,
            message: customMessage,
          },
        }
      )
      .then((response) => {
        setLoading(false);
        emptyFields();
        dialogHandler(false);
        setAlert({
          open: true,
          message: "Message Sent Successfully!!",
          backgroundColor: "#4BB543",
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong, please try again",
          backgroundColor: "#FF3232",
        });
      });
  };

  const buttonContent = (
    <>
      Send Message
      <img src={send} alt="send message" style={{ marginLeft: "0.5rem" }} />
    </>
  );
  return (
    <>
      <Dialog
        open={open}
        onClose={() => dialogHandler(false)}
        fullWidth
        classes={{ paper: classes.dialogContainer }}
        style={{ zIndex: 1500 }}
      >
        <MuiDialogTitle>
          <Typography variant="h4" align="center">
            Confirm Message
          </Typography>
          <IconButton
            className={classes.closeButton}
            disableRipple
            style={{
              backgroundColor: "transparent",
              color: theme.palette.common.blue,
            }}
            onClick={() => dialogHandler(false)}
          >
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent>
          <Grid container direction="column" alignItems="center">
            <InputLabel align="center">Name</InputLabel>
            <Input
              placeholder="John Doe"
              type="text"
              value={name}
              onChange={handleChange("name")}
            />
            <InputLabel align="center" style={{ marginTop: "1rem" }}>
              Phone Number
            </InputLabel>
            <Input
              placeholder="(+91) 6635372234"
              type="number"
              value={phoneNumber}
              onChange={handleChange("phoneNumber")}
            />
            <InputLabel align="center" style={{ marginTop: "1rem" }}>
              Email
            </InputLabel>
            <TextField
              error={error}
              helperText={error}
              type="email"
              value={emailId}
              onChange={handleChange("emailId")}
            />
            <TextField
              multiline
              defaultValue={customMessage}
              rows={5}
              InputProps={{ className: classes.textField }}
              onChange={handleChange("customMessage")}
            />
            <Button
              className={classes.sendMessage}
              onClick={onConfirm}
              disabled={disabledUntil}
            >
              {loading ? <CircularProgress size={30} /> : buttonContent}
            </Button>
          </Grid>
        </MuiDialogContent>
      </Dialog>
    </>
  );
};

export default ContactDialog;
