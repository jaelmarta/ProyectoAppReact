import React, { createContext, useState, useContext} from "react"
export const contexto = createContext();
const { Provider } = contexto;



export const useCarrito = () => {
    return useContext(contexto)
}



const ContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0)
  const [cantidadTotal, setCantidadTotal] = useState(8);


  /*const agregarCarrito = () => {
    addItem(count)
  };*/

  const contextValue = {
    productos: cart,
    cantidad: cantidadTotal,
    //agregarCarrito: agregarCarrito,
    //vaciarCarrito: vaciarCarrito,
    //cantidadTotal:cantidadTotal
    
  };

  const vaciarCarrito = () => {
    setCart([]);
    setCantidadTotal(0);
  };


  return (
    <>

      <Provider value={contextValue}>
        {children}
      </Provider>
    </>
  );
};



export default ContextProvider
