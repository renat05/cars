import React, { useState } from "react";
import './Main.css';
import Cars from './index.json';

const Main = (props) => {
    let {filterCars} = props;

    const allCars = Cars.cars;

   
    // const filteredCars = allCars.filter((item) => {
    //     return item.title.toLowerCase().includes(search.toLowerCase());
    // });
    

    return (
        <div className="category">  
            {allCars.map((car, index) => (
                <div key={index} className="item">
                    <img className="img" width='100%' src={car.img} alt={car.title} />
                    <span className="title">{car.title}</span>
                    <p>1.5 л / 181 л.с. / Бензин</p>
                    <p>{car.price}</p>
                    <span className="link">Подробнее</span>
                </div>
            ))}
        </div>
    );
}

export default Main;
