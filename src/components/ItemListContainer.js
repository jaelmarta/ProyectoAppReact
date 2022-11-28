import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { obtenerProductos, productoPorCategoria } from "./Libreria.js";
import { ThreeDots } from "react-loader-spinner";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const productosPorColeccion = collection(db, "productos");

    if (category) {
      const filtro = query(
        productosPorColeccion,
        where("category", "==", category)
      );

      const consulta = getDocs(filtro);

      consulta
        .then((resultado) => {
          const productos = resultado.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setItems(productos);
        })

        .catch((error) => {
          console.log(error);
        });
    } else {
      const consulta = getDocs(productosPorColeccion);

      consulta
        .then((resultado) => {
          const productos = resultado.docs.map((doc) => ({...doc.data(),id: doc.id,}));
          console.log(productos);
          setItems(productos);
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [category]);

  return (
    <div>
      <h2>Productos</h2>
      {items.length === 0 ? (
        <ThreeDots className="threeDots" />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
