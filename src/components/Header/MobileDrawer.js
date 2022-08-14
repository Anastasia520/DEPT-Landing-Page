import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Link } from "react-scroll";

import styles from "../../styles/headerMobileDrawer.module.scss";
import CloseBtn from "../../assets/Close.svg";
import DEPTLogoSmallWhite from "../../assets/DEPTLogoSmallWhite.svg";
import rightArrow from "../../assets/rightArrow.svg";
import { menuItemsDrawer } from "./Header.data";
import Drawer from "components/Drawer";

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer
      drawerHandler={
        <div className={styles.handler}>
          <p>MENU</p>
        </div>
      }
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen((prevSate) => !prevSate)}
      closeButton={<img src={CloseBtn} alt="close" />}
      logo={<img src={DEPTLogoSmallWhite} alt="DEPT Logo" />}
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
                  src={rightArrow}
                  className={styles.icon}
                  alt={item.label}
                />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Scrollbars>
    </Drawer>
  );
}
