import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { About } from "./Page/About";
import { Home } from "./Page/Home";
import { Contacts } from "./Page/Contacts";
import { Catalog } from "./Page/Catalog";
import { Service } from "./Page/Service";
import { NavCom } from "./componennts/NavCom";
import Car from "./Page/Car";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavCom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/catalog/:id" element={<Car />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
