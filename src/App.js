import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Marketplace from "./components/Marketplace/Marketplace";
import './App.css';



function App(props) {
  return (
    <div className="App">
      <Header metamaskProvider={props.metamaskProvider} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home metamaskProvider={props.metamaskProvider} />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
