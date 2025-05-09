import "./index.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { About } from "./Page/About";
import { Home } from "./Page/Home";
import { Contacts } from "./Page/Contacts";
import { Catalog } from "./Page/Catalog";
import { Service } from "./Page/Service";
import { NavCom } from "./componennts/NavCom";
import Car from "./Page/Car";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavCom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/catalog/:model" element={<Car />} /> {/* Используем model в маршруте */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
