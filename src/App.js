import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Cart } from './components/Cart';
import { useEffect, useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const db = localStorage.getItem('db');
    if(!db) localStorage.setItem("db",JSON.stringify([]));
  }, []);

  const handleCart = (arg)=>{
    setCart(arg);
  }
  

  return (
    <div className="App">
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>  
          <Route >
            <Route path="/" element={<Products setCart={handleCart} />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;