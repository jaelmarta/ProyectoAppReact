import React, { useContext } from "react"
import { contexto } from "./ContextProvider"

const CartWidget = () => {
    const contextValue = useContext(contexto)

    return (
        <>

        <span id="cartWidget" className="material-icons" >shopping_cart</span>
        <span className="cartNumer">{contextValue.cantidad}</span>                
        </>
    )
}

export default CartWidget