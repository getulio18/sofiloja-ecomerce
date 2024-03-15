import { useState } from 'react';
import { Children } from 'react';
import './App.css';
import Menu from './components/menu/menu';
import CartWidgets from './components/cart/cartWidgets';
import Carrinho from './components/itemCount/itemCount';
import Produtos from './components/products/products'


function App() {
  const [open, setOpen]= useState(false);
  return (
  
    <div className="App">
      <Menu >
        
        <img className= "logo" src="https://iconape.com/wp-content/files/yu/349831/svg/349831.svg" alt="Sofiloja" />
        <li className="btnm active">Inicio</li>
        <li className="btnm">Comprar</li>
        <li className="btnm">jeanseans</li>
        <li className="btnm">Praia</li>
        <li className="btnm">Fit</li>
        <li className="btnm">Roupas</li>
        <button  className="btnC">Login</button>
        <button onClick= {()=>setOpen(!open)} className="btnm"><CartWidgets /></button>
         
      </Menu>
      <Carrinho isOpen={open} />
      <Produtos/>
      
      
    </div>
   
  );
}

export default App;

