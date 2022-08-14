import React from "react";
import { Typography } from "@mui/material";

import styles from "../styles/quote.module.scss";

export default function Quote({ work }) {
  return (
    <div className={styles.quoteWrapper}>
      <Typography className={styles.quoteTitle}>{work.title}</Typography>
      <Typography className={styles.quoteAuthor}>{work.author}</Typography>
    </div>
  );
}
