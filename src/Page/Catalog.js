import React from 'react';
import data from './data.json';
import './style/style.css';

export const Catalog = () => {
  return (
    <div className='container'>
    <div className="car-list page-content">
      {data.cars.map((car, index) => (
        <div key={index} className="car-card">
          <img src={car.images[0]} alt={car.model} />
          <h3>{car.model}</h3>
          <p>{car.year}</p>
          <p>{car.price}</p>
        </div>
      ))}
    </div>
    </div>
  );
};
