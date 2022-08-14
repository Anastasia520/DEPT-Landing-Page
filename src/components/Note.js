import React from "react";
import { Typography } from "@mui/material";

import styles from "../styles/note.module.scss";
import CircleSvg from "../assets/circle.svg";
import CircleFilledSvg from "../assets/circleFilled.svg";
import { Link } from "./Link";

export default function Note({ work }) {
  return (
    <>
      <Typography className={styles.noteBrand}>{work.brandName}</Typography>
      <Typography className={styles.noteTitle}>{work.title}</Typography>
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
    </>
  );
}
