import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productoPorId } from "./Libreria.js"

const ItemDetailContainer = () => {
const [items, setItems] = useState([]) 
const {id} = useParams() 

    useEffect(() => { 
	
	    productoPorId(id)
            .then((respuesta) => {
                setItems(respuesta)
            })
            .catch((error) => {
                console.log(error)
            })

        }, [id])


    return (
        <div>
        <h2>Detalles</h2>
        <ItemDetail items={items} />
        </div>
    )
}


export default ItemDetailContainer