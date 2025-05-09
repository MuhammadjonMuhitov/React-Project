import React from 'react';
import { Link } from 'react-router-dom';
import './style/style.css';
import data from '../Page/data.json';

export const Catalog = () => {
  return (
    <div className="container">
      <div className="car-list page-content">
        {data.cars.map((car) => (
          <Link to={`/catalog/${car.model}`} key={car.model} className="car-card">
            <img src={car.images[0]} alt={car.model} />
            <h3>{car.model}</h3>
            <p>{car.year}</p>
            <p>{car.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
