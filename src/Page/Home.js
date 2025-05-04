import React from "react";
import { Link } from "react-router-dom";
import photo1 from "../img/porsche.jpg";
import "./style/style.css";

export const Home = () => {
  return (
    <div className="container page-content">
      <div className="header">
        <h1 className="title">Галерея современного автомобильного искусства</h1>
      </div>
      <div className="part1">
        <img src={photo1} className="porsche" alt="Porsche" />
        <div className="card1">
          <p className="part1_p">
            Самый широкий и актуальный выбор лучших автомобилей в наличии в
            России для пополнения вашей коллекции
          </p>
          <Link to="/catalog">
            <button className="part1_btn">Галерея машин</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
