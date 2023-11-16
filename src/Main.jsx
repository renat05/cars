import React, { useState, useEffect } from "react";
import './Main.css';
import Cars from './index.json';
import { toast } from "react-toastify";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Product from './components/Product'


const Main = (props) => {
    const allCars = Cars.cars;  
    const itemsPerPage = 6;
    

    // Состояние для отслеживания текущей страницы
    const [currentPage, setCurrentPage] = useState(1);
    // Состояние для хранения избранных автомобилей
    const [favorites, setFavorites] = useState([]);

    // Функция для рассчета индексов начала и конца элементов на текущей странице
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allCars.slice(indexOfFirstItem, indexOfLastItem);

    // Функция для переключения на следующую страницу
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    // Функция для переключения на предыдущую страницу
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    // Функция для добавления автомобиля в избранное
    const handleAddToFavorite = ( title, image, info, price) => {
     fetch('/addFavorite', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(favorites),
})
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error('Ошибка при добавлении в избранное:', error);
    });

    }

    // Отправить POST-запрос на сервер при изменении избранных

     

    return (
     
        <div className="category">
            {currentItems.map((car, index) => (
                <div key={index} className="item">
                    <img className="img" width='100%' src={car.img} alt={car.title} />
                    <span className="title">{car.title}</span>
                    <p className='info'>{car.info}</p>
                    <p>{car.price}</p>
                    
                  <Link to={`/product/${car.id}`} >
                     <span className="link">Подробнее</span>
                     </Link> 
                  
                    <span onClick={() => handleAddToFavorite(car.title, car.img, car.info, car.price)}className="link">❤ избранное</span>
                </div>
            ))}

            <div className="pagination">
                {currentPage > 1 && <button onClick={prevPage}>Предыдущая</button>}
                {currentItems.length === itemsPerPage && <button onClick={nextPage}>Следующая</button>}
    
            </div>
<Router>
        <Switch>
          <Route
            path="/product/:id"
            element={<Product item={state.find(item => item.id.toString() === useParams().id)} />}
          />
        </Switch>
      </Router>
        </div>

    );
}

export default Main;
