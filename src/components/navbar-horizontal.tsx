import styles from "@styles/navbar.module.scss";
import { FaBars } from "react-icons/fa";
export const NavbarHorizontal = ({ children }) => {
  return (
    <div className="container-fluid">
      <nav className="container">
        <ul>
          <li>
            <a href="./" className="contrast">
              <img
                src="./logo.png"
                className={styles.sbLogo}
                alt="ScrollBar Logo"
              />
            </a>
          </li>
        </ul>

        <ul className={styles.sbMobileNav}>
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link">
              <FaBars fontSize="32px" />
            </summary>
            <ul role="listbox">{children}</ul>
          </details>
        </ul>
        <ul className={styles.sbDesktopNav}>{children}</ul>
      </nav>
    </div>
  );
};
