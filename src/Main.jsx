import React, { useState, useEffect } from "react";
import './Main.css';
import Cars from './index.json';

const Main = ({items}) => {
    const allCars = Cars.cars;  
    const itemsPerPage = 3;
    console.log(items)

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
    const handleAddToFavorite = (title, image) => {
        setFavorites([...favorites, { title, image }]);
    }

    // Отправить POST-запрос на сервер при изменении избранных
    useEffect(() => {
        if (favorites.length > 0) {
            fetch('https://codesandbox.io/s/smoosh-cloud-3wl2xl?file=/src/server.json', { // Замените на реальный URL сервера
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(favorites)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
            })
            .catch(error => {
                console.error('Ошибка при добавлении в избранное:', error);
            });
        }
    }, [favorites]);

    return (
        <div className="category">
            {currentItems.map((car, index) => (
                <div key={index} className="item">
                    <img className="img" width='100%' src={car.img} alt={car.title} />
                    <span className="title">{car.title}</span>
                    <p className='info'>{car.info}</p>
                    <p>{car.price}</p>❤️
                    <span className="link">Подробнее</span>
                    <span onClick={() => handleAddToFavorite(car.title, car.img)} className="link">❤️ выбрать</span>
                </div>
            ))}

            <div className="pagination">
                {currentPage > 1 && <button onClick={prevPage}>Предыдущая</button>}
                {currentItems.length === itemsPerPage && <button onClick={nextPage}>Следующая</button>}
                {console.log('render', currentPage)}
            </div>
        </div>
    );
}

export default Main;
