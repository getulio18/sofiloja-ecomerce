import { useState } from "react";
import "./item.css"

function count(){
   const [number, setNumber]= useState(0);

const changerNumber = () =>{
    setNumber((prevNumber)=> prevNumber + 1);
 };
 
   const cNumber = () =>{
      if(number> 0){
      setNumber(number - 1);
      }
   };
      return(
         <div className="container">
            <div className="caixa">
               <button onClick={cNumber}>-</button>
               <p>{number}</p>
               <button onClick={changerNumber}>+</button>
           </div>
           <button className="btnCar">adicionar ao carrinho</button>
           
         </div>
      );
}
export default count;