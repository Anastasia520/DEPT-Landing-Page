import { Link } from "react-scroll";

import styles from "../../styles/header.module.scss";
import { menuItems } from "./Header.data";
import LogoDEPT from "../../assets/LogoDEPT.svg";
import LogoDEPTSmall from "../../assets/DEPTLogoSmall.svg";

import Logo from "components/Logo";
import MobileDrawer from "./MobileDrawer";
import DesktopDrawer from "./DesktopDrawer";

export default function Header({ className }) {
  return (
    <header className={className} id="header">
      <div className={styles.headerContainer}>
        <Logo src={LogoDEPT} />
        <div className={styles.headerNav}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              activeClass={styles.headerNav.active}
              to={item.path}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <DesktopDrawer />
      </div>

      <div className={styles.headerContainerMobile}>
        <Logo src={LogoDEPTSmall} />
        <MobileDrawer />
      </div>
    </header>
  );
}
