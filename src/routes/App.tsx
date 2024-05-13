import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Home from "../pages/home";
import Detail from "../pages/detail";
import Catch from "../pages/catch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:name" element={<Detail />} />
        <Route path="/battle/:name" element={<Catch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
