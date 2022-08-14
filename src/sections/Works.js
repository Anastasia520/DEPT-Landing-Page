import React from "react";
import { Grid } from "@mui/material";

import styles from "../styles/works.module.scss";
import WorkCard from "components/WorkCard";
import WorkNote from "components/WorkNote";
import Quote from "components/Quote";
import Settings from "components/settings";

export default function Works({ works }) {
  return (
    <section id="work" className={styles.works}>
      <Settings />
      <Grid container spacing={0} columns={{ xs: 1, sm: 1, md: 4, lg: 4 }}>
        {works.map((work) =>
          work.isCard ? (
            <Grid item xs={1} sm={2} key={work.id}>
              <WorkCard work={work} />
            </Grid>
          ) : work.isSlideCard ? (
            <Grid item xs={1} sm={3} key={work.id}>
              <WorkCard work={work} />
            </Grid>
          ) : work.isClientNote ? (
            <Grid item xs={1} sm={1} key={work.id}>
              <WorkNote work={work} />
            </Grid>
          ) : (
            work.isQuote && (
              <Grid item xs={1} sm={4} key={work.id}>
                <Quote work={work} />
              </Grid>
            )
          )
        )}
      </Grid>
    </section>
  );
}
