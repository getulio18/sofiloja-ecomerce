import { useState } from 'react';
import car from './img/cartImg.png';
import './cartWidgets.css';

function cartWidgets() {
  const [open, setOpen]= useState(false);
    return (
      <div className='carrinho'>
        <img onClick= {()=> setOpen(!open)} className='car' src={car} alt='carrinho' />
      </div>
    
      
      
    );
}
    export default cartWidgets;