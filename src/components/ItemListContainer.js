import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { obtenerProductos, productoPorCategoria} from "./Libreria.js"

const ItemListContainer = () => {

    const [items, setItems] = useState([]) 
    const {category} = useParams() 

    useEffect(() => {

        if(category){

            productoPorCategoria(category) 
            .then(res => {
                setItems(res)
            })
            .catch(err => {
                console.log(err)
            })

        }else{

            obtenerProductos()
            .then((respuesta) => {
                setItems(respuesta)
            })
            .catch((error) => {
                console.log(error)
            })
        }

    }, [category])

    return (
        <div>
            <h2>Productos</h2>
            {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
        </div>
    )

}

export default ItemListContainer