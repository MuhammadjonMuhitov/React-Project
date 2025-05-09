import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import carsData from "../Page/data.json"; // путь к файлу с данными
import "./style/style.css";

const Car = () => {
  const { model } = useParams();  // Получаем параметр model из URL
  const navigate = useNavigate();

  // Находим машину по model
  const car = carsData.cars.find((car) => car.model === model);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="containere">
      <div className="car-details">
        <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
        <img src={car.images[0]} alt={car.model} className="car-details-image" />
        <div className="car-details-info">
          <h2>{car.model}</h2>
          <p><strong>Марка:</strong> {car.type}</p>
          <p><strong>Год выпуска:</strong> {car.year}</p>
          <p><strong>Цена:</strong> {car.price}</p>
          <p><strong>Двигатель:</strong> {car.engine}</p>
          <p><strong>Мощность:</strong> {car.power}</p>
          <p><strong>Разгон 0–100 км/ч:</strong> {car.acceleration}</p>
          <p><strong>Привод:</strong>  {car.drive}</p>
        </div>
      </div>
    </div>
  );
};

export default Car;
