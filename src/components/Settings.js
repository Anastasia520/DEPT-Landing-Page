import React, { useEffect, useState } from "react";
import { MenuItem, Select, Typography } from "@mui/material";

import styles from "../styles/settings.module.scss";

export default function Settings() {
  const dataCategory = [
    {
      id: 1,
      title: "all work",
    },
    {
      id: 2,
      title: "design",
    },
    {
      id: 3,
      title: "media",
    },
  ];

  const dataIndustries = [
    {
      id: 1,
      title: "all industries",
    },
    {
      id: 2,
      title: "food",
    },
    {
      id: 3,
      title: "travel",
    },
  ];

  const [category, setCategory] = useState(1);
  const [industry, setIndustry] = useState(1);

  useEffect(() => {
    setCategory(1);
    setIndustry(1);
  }, []);

  return (
    <div className={styles.settings}>
      <div className={styles.setting}>
        <Typography
          sx={{
            fontSize: {
              lg: 26,
              md: 16,
              sm: 16,
              xs: 16,
            },
          }}
          className={styles.settingText}
        >
          Show me
        </Typography>
        <Select
          className={styles.selectInput}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          displayEmpty
          sx={{
            fontSize: {
              lg: 26,
              md: 16,
              sm: 16,
              xs: 16,
            },
          }}
        >
          {dataCategory.map((category) => (
            <MenuItem
              value={category.id}
              key={category.id}
              sx={{
                fontSize: {
                  lg: 26,
                  md: 16,
                  sm: 16,
                  xs: 16,
                },
              }}
            >
              {category.title}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div className={styles.setting}>
        <Typography
          className={styles.settingText}
          sx={{
            fontSize: {
              lg: 26,
              md: 16,
              sm: 16,
              xs: 16,
            },
          }}
        >
          in
        </Typography>
        <Select
          className={styles.selectInput}
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          displayEmpty
          sx={{
            fontSize: {
              lg: 26,
              md: 16,
              sm: 16,
              xs: 16,
            },
          }}
        >
          {dataIndustries.map((industry) => (
            <MenuItem
              value={industry.id}
              key={industry.id}
              sx={{
                fontSize: {
                  lg: 26,
                  md: 16,
                  sm: 16,
                  xs: 16,
                },
              }}
            >
              {industry.title}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
