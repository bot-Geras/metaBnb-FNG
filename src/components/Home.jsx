import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import Modal from "./Modal/Modal";

function Home() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };
  return (
    <div className="App">
      <Modal open={modal} onClose={() => setModal(false)} />
      <Header handleClick={() => toggleModal(true)} />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
