import { randProduct } from "@ngneat/falso"
import { useContext } from "react"
import { contexto } from "./ContextProvider"
import ItemCount from "./ItemCount"


const ItemDetail = () => {

    const producto = randProduct()
    const contextValue = useContext (contexto)

 //AddItemButton
    const addItem = (cantidad) => {
        
    }



    return (
        <div>
            <h2>{producto.title} - ${producto.price}</h2>
            <div>
                <img src={producto.image} alt={producto.title} />
                <div>
                    <p>{producto.description}</p>
                    <p>{producto.description}</p>
                    <ItemCount addItem={addItem}/>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail