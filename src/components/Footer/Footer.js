import { Link } from "react-scroll";
import { Typography } from "@mui/material";

import styles from "../../styles/footer.module.scss";
import LogoDEPT from "../../assets/LogoDEPT.svg";
import TopSvg from "../../assets/top.svg";
import { pageText } from "assets/text";
import { menuItems, socialMediaItems } from "./footer.data";
import Logo from "components/Logo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linkContainer}>
          <Logo src={LogoDEPT} className={styles.footerLogo} />
          <div className={styles.nav}>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                activeClass="active"
                to={item.path}
                spy
                smooth
                offset={-70}
                duration={500}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: 16,
                      md: 18,
                      sm: 18,
                      xs: 18,
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </div>
          <div className={styles.footerSocialMedia}>
            {socialMediaItems.map((socialMedia, index) => (
              <Link
                key={index}
                activeClass="active"
                to={socialMedia.path}
                spy
                smooth
                offset={-70}
                duration={500}
              >
                <img src={socialMedia.img} alt={socialMedia.label} />
              </Link>
            ))}
          </div>
        </div>
        <div className="line" />
        <div className={styles.footerInfoWrapper}>
          <div className={styles.footerInfo}>
            <Typography
              sx={{
                fontSize: {
                  lg: 16,
                  md: 13,
                  sm: 13,
                  xs: 13,
                },
              }}
            >
              {pageText.footer.chamberOfCommerce}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: 16,
                  md: 13,
                  sm: 13,
                  xs: 13,
                },
              }}
            >
              {pageText.footer.VAT}
            </Typography>

            <Link
              activeClass="active"
              to="work"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              <Typography
                sx={{
                  fontSize: {
                    lg: 16,
                    md: 13,
                    sm: 13,
                    xs: 13,
                  },
                }}
              >
                {pageText.footer.terms}
              </Typography>
            </Link>
          </div>

          <Typography
            sx={{
              fontSize: {
                lg: 16,
                md: 13,
                sm: 13,
                xs: 13,
              },
            }}
          >
            {pageText.footer.DEPT}
          </Typography>
        </div>
      </div>
      <div className={styles.footerTop}>
        <Link
          activeClass="active"
          to="work"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          <img src={TopSvg} alt="top" />
          <Typography>{pageText.footer.top}</Typography>
        </Link>
      </div>
    </footer>
  );
}
