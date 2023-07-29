import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Cart } from './components/Cart';
import { useEffect, useState } from 'react';


function App() {
  const dbLocal = JSON.parse(localStorage.getItem('db'));
  const [cart, setCart] = useState(dbLocal === null ? [] : dbLocal);

  console.log(cart.length)

  useEffect(()=>{
    const db = localStorage.getItem('db');
    if(!db) localStorage.setItem("db",JSON.stringify([]));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>  
          <Route >
            <Route path="/" element={<Products setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;