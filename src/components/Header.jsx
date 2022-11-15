import metaBnb from "../assets/metabnb.png";

import { Link } from "react-router-dom";

function Header({ handleClick }) {
  return (
    <header>
      <nav>
        <img src={metaBnb} alt="" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="destination">Place to stay</Link>
          </li>
          <li>
            <a href="">NFTs</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
          <li>
            <button className="nav-btn button" onClick={handleClick}>
              Connect Wallet
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
