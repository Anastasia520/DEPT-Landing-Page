import React from "react";

import {
  Typography,
  TextField,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";

import styles from "../styles/ContactForm.module.scss";
import { pageText } from "assets/text";
import useContactForm from "customHooks/useContactForm";

export default function ContactForm() {
  const {
    email,
    setEmail,
    isEmailValid,
    message,
    setMessage,
    name,
    setName,
    contactFormRequested,
    contactFormRequestedLoading,
    contactFormRequestedError,
    handleSend,
  } = useContactForm();

  return (
    <div>
      <Grid
        container
        spacing={{ xs: 0, sm: 0, md: 6, lg: 6 }}
        columns={{ xs: 1, sm: 1, md: 8, lg: 8 }}
        className={styles.contactFormGrid}
      >
        <Grid
          item
          xs={1}
          sm={1}
          md={2}
          lg={2}
          className={styles.contactFormGridItem}
        >
          <Typography
            className={styles.contactFormText}
            sx={{
              fontSize: {
                lg: 48,
                md: 26,
                sm: 26,
                xs: 26,
              },
            }}
          >
            QUESTION? <br />
            WE ARE HERE TO HELP!
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sm={1}
          md={2}
          lg={2}
          className={styles.contactFormGridItem}
        >
          <Typography className={styles.contactFormInputLabelName}>
            {pageText.contactForm.nameLabel}
          </Typography>
          <TextField
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={contactFormRequestedLoading}
          />

          <div className={styles.contactFormMessageInput}>
            <Typography className={styles.contactFormInputLabel}>
              {pageText.contactForm.messageLabel}
            </Typography>
            <TextField
              multiline
              fullWidth
              rows={4}
              variant="standard"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={contactFormRequestedLoading}
            />
          </div>

          <Button
            variant="outlined"
            size="large"
            className={styles.contactFormBtn}
            onClick={handleSend}
            disabled={contactFormRequestedLoading}
          >
            {pageText.contactForm.sendBtn}
          </Button>
        </Grid>
        <Grid
          item
          xs={1}
          sm={1}
          md={2}
          lg={2}
          className={styles.contactFormGridItem}
        >
          <Typography className={styles.contactFormInputLabel}>
            {pageText.contactForm.emailLabel}
          </Typography>
          <TextField
            fullWidth
            required
            variant="standard"
            type="email"
            error={!isEmailValid}
            helperText={
              !email
                ? "This field is required"
                : !isEmailValid && "Please write correct email"
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={contactFormRequestedLoading}
          />

          <Button
            variant="outlined"
            size="large"
            className={styles.contactFormBtnMobile}
            onClick={handleSend}
            disabled={contactFormRequestedLoading}
          >
            {pageText.contactForm.sendBtn}
          </Button>
        </Grid>
      </Grid>
      
      {contactFormRequestedLoading && <CircularProgress />}
      {contactFormRequestedError && (
        <Typography color="error" fontSize={36}>
          {contactFormRequestedError}
        </Typography>
      )}
      {contactFormRequested && (
        <Typography fontSize={36}> {pageText.contactForm.thanks}</Typography>
      )}
    </div>
  );
}
