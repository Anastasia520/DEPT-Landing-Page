import React from "react";
import { Typography } from "@mui/material";

import styles from "../styles/mainBanner.module.scss";
import MainBannerPic from "../../public/mainBanner.svg";
import MainBannerPicSmall from "../../public/mainBannerSmall.svg";
import MainBannerPicMedium from "../../public/MainBannerMedium.svg";
import { pageText } from "assets/text";

export default function MainBanner() {
  return (
    <section id="work" className={styles.banner}>
      <div className={styles.mainBanner}>
        <div className={styles.textContent}>
          <div>
            <Typography className={styles.workText}>
              {pageText.mainBanner.label}
            </Typography>

            <Typography className={styles.mainText}>
              A selection of projects that <b> pioneer tech </b> and
              <b> marketing </b>
              to help brands stay ahead.
            </Typography>
          </div>
        </div>
        <img
          src={MainBannerPic}
          className={styles.desktopImg}
          alt="main banner"
        />
        <img
          src={MainBannerPicMedium}
          className={styles.mediumImg}
          alt="main banner"
        />
        <img
          src={MainBannerPicSmall}
          className={styles.mobileImg}
          alt="main banner"
        />
      </div>
    </section>
  );
}
