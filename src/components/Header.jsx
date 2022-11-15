import metaBnb from "../assets/metabnb.png";

import Modal from "./Modal/Modal"


function Header({handleClick}) {
  


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
            <button className="nav-btn button" onClick={handleClick} >Connect Wallet</button>
           
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
