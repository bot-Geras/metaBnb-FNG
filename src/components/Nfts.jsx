import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";
import g7 from "../assets/g7.png";
import g8 from "../assets/g8.png";
import settings from "../assets/setting-5.svg";

export default function Nfts() {
  return (
    <>
      <div className="nav-nft">
        <ul>
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fastastic City</li>
          <li>Beach</li>
          <li>Carbins</li>
          <li>Off-Grid</li>
          <li>Farm</li>
        </ul>
        <div className="nft-location">
          <button className="btn-nft">Location</button>
          <img src={settings} />
        </div>
      </div>
      <div className="content-img">
        <img src={g1} />
        <img src={g2} />
        <img src={g3} />
        <img src={g4} />
        <img src={g5} />
        <img src={g6} />
        <img src={g7} />
        <img src={g8} />
      </div>
    </>
  );
}
