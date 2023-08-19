import { useTheme } from "next-themes";
import { NavbarHorizontal } from "./navbar-horizontal";
import { FaMoon, FaSun } from "react-icons/fa";
import { Footer } from "./footer";

type Props = {
  children: React.ReactNode;
  showFooter?: boolean;
};

export const LandingPageLayout = ({ children, showFooter = true }: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <NavbarHorizontal>
        <li>
          <a href="#">About ScrollBar</a>
        </li>
        <li>
          <a href="#">Our volunteers</a>
        </li>
        <li>
          <a href="#">Future events</a>
        </li>
        <li>
          <a href="#">Tender site</a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
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

      {showFooter && <Footer />}
    </>
  );
};
