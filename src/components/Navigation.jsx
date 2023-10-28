import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import Cars from '../index.json';
const Nav = (props) => {

    const  [search, setSearch] = React.useState('');
    const allCars = Cars.cars;
    let handleSearch = (e) => {
        setSearch(e.target.value)
    }
   let filterCars = allCars.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase())
    console.log(item.title)
   })
    
    return (
    <nav>
    <div className="logo">
    </div>
    <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
    </div>
    <ul className="nav-links">
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favourites</Link>
        <Link to='/product'>Product</Link>
        <li><input onChange={handleSearch} value={search} className="text-input" type='text'/></li>
    </ul>
</nav>

    )
}


export default Nav;
