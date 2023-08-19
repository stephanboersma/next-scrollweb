import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="container">
      <div className="grid">
        <div>
          <img
            src="./logo.png"
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
                  <a href="#">
                    <FaFacebookSquare size="60" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagramSquare size="60" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPinterestSquare size="60" />
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
                  <a href="#">Constitution</a>
                </li>
                <li>
                  <a href="#">Minutes from General Assembly</a>
                </li>
              </ul>
            </aside>
          </nav>
        </div>
      </div>
    </div>
  );
};
