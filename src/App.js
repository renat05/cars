import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';
import Nav from './components/Navigation';
import Footer from './components/Footer';
import Product from './components/Product';
import Favourites from './components/Favorites';

function App(props) {
  let items = 'props text'
  return (
    <BrowserRouter>
     <Nav items={items}/>
      <Footer/>
       <Routes>
        <Route path='favorites' element={<Favourites/>} />
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
  
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
