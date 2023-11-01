import React from "react";
import '../Main.css';

import Fav from '../fav.json';

const Favourites = () => {
    let items = Fav.cars
    const [favorites, setFavorites] = React.useState(items); // Устанавливаем начальное значение из Fav

    return (
        <div className="category">
            {favorites.map((car, index) => (
                <div key={index} className="item">
                    <img className="img" width='100%' src={car.img} alt={car.title} />
                    <span className="title">{car.title}</span>
                    <p className='info'>{car.info}</p>
                    <p>{car.price}</p>
                    <span className="link">Подробнее</span>
                </div>
            ))}
        </div>
    );
}

export default Favourites;
