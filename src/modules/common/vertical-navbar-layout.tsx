import styles from "./styles/navbar.module.scss";
import Image from "next/image";
import logo from "@public/logo.png";
import { FaBars } from "react-icons/fa";
import { TenderAvatar } from "./tender-avatar";
import { useStore } from "@store/store";
import { shallow } from "zustand/shallow";
import { NavbarVertical } from "./navbar.vertical";

type Props = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export const VerticalNavbarLayout = ({
  title,
  children,
  description,
}: Props) => {
  const { user } = useStore(
    (state) => ({
      user: state.user,
    }),
    shallow
  );

  return (
    <div className={`container-fluid ${styles.wrapper}`}>
      <div className={`flex-col ${styles.sidebar}`}>
        <aside>
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
          <NavbarVertical user={user} />
          <ul>
            <li>
              <TenderAvatar
                tender={{
                  id: user?.id,
                  displayName: user?.displayName,
                  photoUrl: user?.photoUrl,
                }}
              />
            </li>
          </ul>
        </aside>
      </div>
      <div className="flex-col container-fluid">
        <nav className="container-fluid">
          <ul>
            <li>
              <hgroup>
                <h1 className={styles.pageTitle}>{title}</h1>
                {description && <h2>{description}</h2>}
              </hgroup>
            </li>
          </ul>
          <ul className={styles.mobileNav}>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link">
                <FaBars fontSize="32px" />
              </summary>
              <NavbarVertical user={user} isDropdown={true} />
            </details>
          </ul>
        </nav>
        <main className="container-fluid">{children}</main>
      </div>
    </div>
  );
};
