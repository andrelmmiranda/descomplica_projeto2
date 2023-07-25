import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Cart } from './components/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route >
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;