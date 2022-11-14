import grid1 from "../assets/bnb-img-1.png";
import logo1 from "../assets/Frame-0.svg";
import logo2 from "../assets/Group-4.svg";
import logo3 from "../assets/Group-5.svg";
import logo4 from "../assets/Frame-1.png";

function Main() {
  return (
    <main>
      <section className="section-1">
        <h2 className="head-section">
          Rent a <span className="purple">Place</span> away from
          <span className="purple">Home</span> in the
          <span className="purple">Metaverse</span>
        </h2>
        <p className="desc-section">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="search-btn">
          <input type="text" />
          <a href="" className="btn">
            Search
          </a>
        </div>

        <img className="bnb-img" src={grid1} alt="" />
      </section>

      <section className=" section-2 section-bg__purple">
        <img src={logo1} />
        <img src={logo2} />
        <img src={logo3} />
      </section>

      <section className="section-3">
        <h2>Inspiration for your next adventure</h2>
      </section>

      <section className="section-4">
        <h2>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <a className="button btn-more">Learn More</a>
        <img src={logo4} alt="" />
      </section>
    </main>
  );
}

export default Main;
