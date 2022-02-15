
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
