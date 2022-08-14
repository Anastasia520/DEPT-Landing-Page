import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Link } from "react-scroll";

import styles from "../../styles/headerDesktopDrawer.module.scss";
import CloseBtn from "../../assets/Close.svg";
import LogoDEPT from "../../assets/LogoDEPT.svg";
import rightArrowBig from "../../assets/rightArrowBig.svg";
import rightArrowSmall from "../../assets/rightArrowSmall.svg";
import MenuIcon from "../../assets/MenuIcon.svg";
import { menuItemsDrawer, menuItemsLocations } from "./Header.data";
import Drawer from "components/Drawer";

export default function DesktopDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer
      drawerHandler={
        <div className={styles.handler}>
          <img className={styles.imgMenu} src={MenuIcon} alt="Menu icon" />
        </div>
      }
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen((prevSate) => !prevSate)}
      closeButton={<img src={CloseBtn} alt="close" />}
      logo={<img src={LogoDEPT} alt="DEPT Logo" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
      placement="top"
    >
      <Scrollbars autoHide>
        <div className={styles.content}>
          <div className={styles.menu}>
            {menuItemsDrawer.map((item, index) => (
              <Link
                key={index}
                activeClass="active"
                to={item.path}
                spy
                smooth
                offset={-70}
                duration={500}
                onClick={() => setIsDrawerOpen((prevSate) => !prevSate)}
              >
                <img
                  src={rightArrowBig}
                  className={styles.icon}
                  alt="arrow-right"
                />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Scrollbars>
      <div className={styles.menuCountries}>
        <p>Landen</p>
        {menuItemsLocations.map((item, index) => (
          <Link
            key={index}
            activeClass="active"
            to={item.path}
            spy
            smooth
            offset={-70}
            duration={500}
          >
            <img
              src={rightArrowSmall}
              className={styles.icon}
              alt="arrow-right"
            />
            {item.label}
          </Link>
        ))}
      </div>
    </Drawer>
  );
}
