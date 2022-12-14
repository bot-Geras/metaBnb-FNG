import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Destination from "./components/Destination";



function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/*" element={<Destination />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
