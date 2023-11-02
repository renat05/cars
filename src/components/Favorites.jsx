import React from "react";
import '../Main.css';
const Favourites = () => {
     
    const [favorites, setFavorites] = React.useState([]);
    React.useEffect(() => {
    fetch('https://61f50a3162f1e300173c3fbf.mockapi.io/cars')
    .then(res => res.json())
    .then(data => setFavorites(data))
    .catch((error) => console.log('error', error))
},[])
    return (
        <div className="category">
            {favorites.map((item, index) => (
                <div key={index} className="item">
                    <img className="img" width='100%' src={item.img}
                    alt={item.title} />
                    <span className="title">geely</span>
                    <p className='info'>{item.cars}</p>
                    <p>{item.price}</p>
                    {
                        console.log(item.cars)
                    }
                    <span className="link">Подробнее</span>
                </div>
            ))
        }
        </div>
    );
}

export default Favourites;
