import { Children } from 'react';
import './App.css';
import Menu from './components/menu/menu';
import cartWidgets from './components/cart/cartWidgets';
import itens from './components/itemList/ItemListCont';


function App() {
  return (
  
    <div className="App">
      <Menu >
        
        <img src="https://iconape.com/wp-content/files/yu/349831/svg/349831.svg" alt="Sofiloja" />
        <li className="btnm active">Inicio</li>
        <li className="btnm">Comprar</li>
        <li className="btnm">jeanseans</li>
        <li className="btnm">Praia</li>
        <li className="btnm">Fit</li>
        <li className="btnm">Roupas</li>
        <button className="btnm">Login</button>
        <cartWidgets/>
          
        
      </Menu>
     
      
     
      
    </div>
   
  );
}

export default App;

