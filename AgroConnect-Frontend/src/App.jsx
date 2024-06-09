import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Categories from './Components/Categories';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Register from './Components/Register';
import Sell from './Components/Sell';
import Cart from './Components/Cart';
import Profile from './Components/Profile';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/sell" element={<Sell/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App
