import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";
import g7 from "../assets/g7.png";
import g8 from "../assets/g8.png";
import g9 from "../assets/g9.png";
import g10 from "../assets/g10.png";
import g11 from "../assets/g11.png";
import g12 from "../assets/g12.png";
import g13 from "../assets/g13.png";
import g14 from "../assets/g14.png";
import g15 from "../assets/g15.png";
import g16 from "../assets/g16.png";
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
        <img src={g9} />
        <img src={g10} />
        <img src={g11} />
        <img src={g12} />
        <img src={g13} />
        <img src={g14} />
        <img src={g15} />
        <img src={g16} />
      </div>
    </>
  );
}
