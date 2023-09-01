import { useTheme } from "next-themes";
import { NavbarHorizontal } from "./navbar-horizontal";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";

export const HorizontalNavbarLayout = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <NavbarHorizontal>
        <li>
          <Link href="/#about" scroll={false}>
            About ScrollBar
          </Link>
        </li>
        <li>
          <Link href="/#volunteers" scroll={false}>
            Our volunteers
          </Link>
        </li>
        <li>
          <Link href="/#events" scroll={false}>
            Future events
          </Link>
        </li>
        <li>
          <Link href="/member">Tender site</Link>
        </li>
        <li>
          <a
            role="link"
            style={{ cursor: "pointer" }}
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          >
            Theme{" "}
            {theme == "dark" ? (
              <FaSun fontSize="20px" />
            ) : (
              <FaMoon fontSize="20px" />
            )}{" "}
          </a>
        </li>
      </NavbarHorizontal>

      {children}
    </>
  );
};
