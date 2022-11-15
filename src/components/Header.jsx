import metaBnb from "../assets/metabnb.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={metaBnb} alt="" />
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Place to stay</a>
          </li>
          <li>
            <a href="">NFTs</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
          <li>
            <a href="" className="nav-btn button">
              Connect Wallet
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
