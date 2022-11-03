import React from 'react';
import { Routes , Route } from "react-router-dom";
import Category from "./Category"
import Item from './Item';
import Carrito from "./Carrito";




const ItemListContainer = () => {
    






    return (
        <main>
            <Routes>
                <Route path="/productos"  element={<ItemListContainer/>}/>
                <Route path="/category/:tipo"  element={<Category/>}/>
                <Route path="/item/:id" element={<Item/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
            </Routes>
        </main>
    )
}

export default ItemListContainer