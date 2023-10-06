import styles from "./styles/navbar.module.scss";
import { FaBars } from "react-icons/fa";
import logo from "@public/logo.png";
import Image from "next/image";

export const NavbarHorizontal = ({ children }) => {
  return (
    <div className="container-fluid">
      <nav className="container">
        <ul>
          <li>
            <a href="./" className="contrast">
              <Image
                src={logo}
                className={styles.logo}
                alt="ScrollBar Logo"
                width={140}
                height={100}
              />
            </a>
          </li>
        </ul>

        <ul className={styles.mobileNav}>
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link">
              <FaBars fontSize="32px" />
            </summary>
            <ul role="listbox">{children}</ul>
          </details>
        </ul>
        <ul className={styles.desktopNav}>{children}</ul>
      </nav>
    </div>
  );
};
