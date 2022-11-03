import { Link } from "react-router-dom"


const Item = ({ title, image, price, id }) => {

 return (
        <article>
            <h1>{title} </h1>
            <h2>${price}</h2>
            <img src={image} alt={title}/>
            <button>
                <Link to={`/item/${id}`} >
                    Ver detalle
                </Link>
            </button>
        </article>
    )
}

export default Item