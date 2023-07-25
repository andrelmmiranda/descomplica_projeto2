import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Products } from './components/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
