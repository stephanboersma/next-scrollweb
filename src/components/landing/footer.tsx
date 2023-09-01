import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import logo from "@public/logo.png";
import { ISettings } from "@typing/interfaces/settings.interface";
import { GetServerSideProps } from "next";

type Props = {
  settings: ISettings;
};
export const Footer = ({ settings }: Props) => {
  return (
    <div className="container">
      <div className="grid">
        <div>
          <Image
            width={250}
            height={250}
            src={logo}
            style={{ maxHeight: "250px" }}
            alt="ScrollBar Logo"
          />
        </div>
        <div>
          <h5>Address</h5>
          <p>
            ScrollBar
            <br />
            IT University of Copenhagen
            <br />
            Rued Langgaardsvej 7
            <br />
            2300 København S
          </p>
        </div>
        <div>
          <h5>Contact</h5>
          <p>
            board[at]scrollbar.dk <br /> CVR: 28235283
          </p>
          <div className="grid">
            <nav>
              <ul>
                <li>
                  <a href="https://www.facebook.com/ScrollBar/">
                    <FaFacebookSquare size="60" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/scrollbaritu/">
                    <FaInstagramSquare size="60" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/scrollbaritu/">
                    <FaLinkedinIn size="60" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <h5>Legal</h5>
          <nav>
            <aside>
              <ul>
                <li>
                  <a href={settings.constitution} target="_blank">
                    Constitution
                  </a>
                </li>
                <li>
                  <a href={settings.minutes} target="_blank">
                    Minutes from General Assembly
                  </a>
                </li>
              </ul>
            </aside>
          </nav>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const settings: { data: ISettings } = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/settings`)
  ).json();

  const props = {
    settings: settings.data,
  };

  return {
    props,
  };
};
