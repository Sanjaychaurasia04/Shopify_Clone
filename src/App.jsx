import Navbar from './components/Navbar'
import Footer from "./components/Footer/Footer.jsx";
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import women_image from './assets/women_image.jpg'
import men_hero from './assets/men_hero.jpg'
import kids_image from './assets/kids_image.jpg'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Shop/>}/>
        <Route path="/mens" element ={<ShopCategory banner ={men_hero}category ="men"/>}/>
        <Route path="/womens" element ={<ShopCategory banner={women_image} category ="women"/>}/>
        <Route path="/kids" element ={<ShopCategory banner={kids_image} category ="kid"/>}/>
        <Route path= "/product" element ={<Product/>}/>
        <Route path= "/product/:productId" element ={<Product/>}/>
        <Route path= "/cart" element ={<Cart/>}/>
        <Route path= "/login" element ={<LoginSignup/>}/>

      </Routes>
      
      </BrowserRouter>
      <Footer/>

    
    </div>
  )
}

export default App
