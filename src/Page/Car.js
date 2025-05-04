import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../Page/data.json';
import './style/style.css';

const Car = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = data.cars[id];

  if (!car) return <div>Машина не найдена</div>;

  return (
    <div className="containere">
      <div className="car-details">
      <button className="back-button" onClick={() => navigate(-1)}>← назад </button>
        <img src={car.images[0]} alt={car.model} className="car-details-image" />
        <div className="car-details-info">
          <h2>{car.model}</h2>
          <p><strong>Тип:</strong> {car.type}</p>
          <p><strong>Год:</strong> {car.year}</p>
          <p><strong>Цена:</strong> {car.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Car;
