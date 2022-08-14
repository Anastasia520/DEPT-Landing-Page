import React from "react";
import { Grid, Typography } from "@mui/material";

import styles from "../styles/clients.module.scss";
import { pageText } from "assets/text";

export default function Clients({ clients }) {
  return (
    <section id="clients" className={styles.clients}>
      <Typography className={styles.clientsTitle}>
        {pageText.clients.label}
      </Typography>
      <Typography className={styles.clientsInfo}>
        {pageText.clients.title}
      </Typography>
      <Grid
        container
        spacing={0}
        columns={{ xs: 2, sm: 2, md: 8, lg: 8 }}
        className={styles.clientsGrid}
      >
        {clients.map((client) => (
          <Grid item xs={1} sm={1} md={2} lg={2} key={client.id}>
            <img
              src={client.img}
              alt={client.id}
              className={styles.clientsImg}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
