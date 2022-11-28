import { useState } from "react";
import ContextProvider from "./ContextProvider";



const ItemCount = () => {

	const [count, setCount] = useState(1); 

  const sumarItem = () => {
	setCount (count + 1);
  }
  

  const restarItem = () => {
	setCount (count - 1);
  }

  /*<button onClick={agregarCarrito}>Agregar al carrito</button>
  <button onClick={vaciarCarrito}>Agregar al carrito</button>*/
  return (
    <div className="counter">
      <button onClick={restarItem}>-</button>
      <p>{count}</p>
      <button onClick={sumarItem}>+</button>
      <div className="addToCart">

      </div>
    </div>
  );
};

export default ItemCount;
