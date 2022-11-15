import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useState} from 'react'
import Modal from "./components/Modal/Modal"


function App() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(prevState => !prevState)
  }
  return (
    <div className="App">
      <Modal open={modal} onClose={()=> setModal(false)} />
      <Header handleClick={() => toggleModal(true)} />
      <Main />
      <Footer />
      
    </div>
  );
}

export default App;
