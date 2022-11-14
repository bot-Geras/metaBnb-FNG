import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import svg from "../assets/Group.svg";
function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer-contact">
          <img src={svg} alt="" />
          <div className="footer-social__contact">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
          </div>
        </div>
        <div className="footer-list">
          <ul>
            <p className="foo">Community</p>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
          <ul>
            <p className="foo">Places</p>
            <li>Castles</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn More</li>
          </ul>
          <ul>
            <p className="foo">About Us</p>
            <li>Road map</li>
            <li>Creators</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <p>2022 Metabnb</p>
      </div>
    </footer>
  );
}

export default Footer;
