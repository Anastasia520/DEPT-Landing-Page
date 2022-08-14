import React from "react";
import { Typography } from "@mui/material";

import styles from "../styles/workCard.module.scss";
import CircleSvg from "../assets/circle.svg";
import CircleFilledSvg from "../assets/circleFilled.svg";
import { Link } from "./Link";

export default function WorkCard({ work }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          <Typography className={styles.workBrand}>{work.brandName}</Typography>
          <Typography
            sx={{
              fontSize: {
                lg: 48,
                md: 26,
                sm: 26,
                xs: 26,
              },
            }}
            className={styles.workTitle}
          >
            {work.title}
          </Typography>
          <div className={styles.workLink}>
            <Link
              activeClass="active"
              path={work.link}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              <img src={CircleSvg} className={styles.icon} alt="circle" />
              <img
                src={CircleFilledSvg}
                className={styles.iconFilled}
                alt="circle"
              />
              Read more
            </Link>
          </div>
        </div>
        <img src={work.img} className={styles.workImg} alt={work.brandName} />
      </div>
    </div>
  );
}
