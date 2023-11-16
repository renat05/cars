import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';
import Nav from './components/Navigation';
import Footer from './components/Footer';
import Product from './components/Product';
import Favourites from './components/Favorites';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
   const notify = () => toast("car add in favorites");
  return (
    <BrowserRouter>  
       <ToastContainer />
     <Nav/>
      <Footer/>
       <Routes>
        <Route path='favorites' element={<Favourites/>} />
        <Route path="/" element={<Main notify={notify}/>} />

        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
  
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
