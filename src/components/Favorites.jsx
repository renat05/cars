import React from "react";
import '../Main.css';
import Cars from '../fav.json'
const Favourites = () => {
     let favCars = Cars.cars
    const [favorites, setFavorites] = React.useState([]);
    console.log(favCars)
    React.useEffect(() => {
    fetch('favCars')
    .then(res => res.json())
    .then(data => setFavorites(data[0]))

    .catch((error) => console.log('error', error))
},[]) 
    return (
        <div className="category">
            {favorites.map((item, index) => (
                <div key={index} className="item">
                    <img className="img" width='100%' src={item.image}
                    alt={item.title} />
                    <span className="title">{item.title}</span>
                    <p className='info'>{item.info}</p>
                    <p>{item.price}</p>

                    <span className="link">Подробнее</span>
                </div>
            ))
        }
        </div>
    );
}

export default Favourites;
