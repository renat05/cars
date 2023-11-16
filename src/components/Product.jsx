// Импорты
import React from "react";
import { Link } from "react-router-dom";

const Products = ({ allCars }) => {
  return (
    <div className="category">
      {allCars.map((car, index) => (
        <div key={index} className="item">
          <img className="img" width="100%" src={car.img} alt={car.title} />
          <span className="title">{car.title}</span>
          <p className="info">{car.info}</p>
          <p>{car.price}</p>

          <Link to={`/product/${car.id}`}>
            <span className="link">Подробнее</span>
          </Link>

          {/* Убрал обработчик на избранное, так как он, кажется, не используется здесь */}
        </div>
      ))}
    </div>
  );
};

export default Products;
