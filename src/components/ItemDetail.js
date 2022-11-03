import { randProduct } from "@ngneat/falso"
import ItemCount from "./ItemCount"

const ItemDetail = () => {

    const producto = randProduct()

 
    return (
        <div>
            <h2>{producto.title} - ${producto.price}</h2>
            <div>
                <img src={producto.image} alt={producto.title} />
                <div>
                    <p>{producto.description}</p>
                    <p>{producto.description}</p>
                    <ItemCount/>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail