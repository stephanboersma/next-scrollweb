import { NavbarHorizontal } from "./navbar-horizontal";
import Link from "next/link";

export const HorizontalNavbarLayout = ({ children }) => {
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
      </NavbarHorizontal>

      {children}
    </>
  );
};
