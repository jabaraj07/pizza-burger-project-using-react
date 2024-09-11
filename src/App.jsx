import { useEffect, useState } from 'react';
import './App.css';
import FoodData from './components/Fooddata';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar';
import Pizza from './components/Pizza';
import Burger from './components/Burger';
import Cart from './components/Cart';

function App() {
  const [food, setfood] = useState([])
  const [pizza, setpizza] = useState([])
  const [burger, setburger] = useState([])
  const [cart, setcart] = useState([])
// console.log(FoodData[0]);

  useEffect(()=>{
    setfood(FoodData)
    setpizza([FoodData[0]])
    setburger([FoodData[1]])
  },[])

  const addCart = (item) =>{
    setcart((prevCart)=>[...prevCart,item])
  }

  const removeCart = (index)=>{
    setcart((prevCart)=> prevCart.filter((item,indx)=> indx != index  ))
  }

  const calcTotal = ()=>{
    let total = 0
    cart.forEach(item=>total+= parseInt(item.price))
    return total.toFixed(2)
  }

  const clearCart =()=>{
    setcart([])
  }

  return (
    <>
    <BrowserRouter>
    <Navbar cart={cart} />
    <Routes>
      <Route path='/' element={<Home food={food} addCart={addCart} />} />
      <Route path='/Pizza' element={<Pizza pizza={pizza} addCart={addCart} />} />
      <Route path='/Burger' element={<Burger burger={burger} addCart={addCart} />} />
      <Route path='/Cart' element={<Cart cart={cart} clearCart={clearCart} calcTotal={calcTotal} removeCart={removeCart}  />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
