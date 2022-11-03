import React from 'react';
import { Routes , Route } from "react-router-dom"
import Carrito from "./Carrito"
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

const Rutas = () => {
    
    return (
        <main>
            <Routes>

                <Route path="/" element={<ItemListContainer/>}/>
		        <Route path="/productos"  element={<ItemListContainer/>}/>
                <Route path="/category/:category"  element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='*' element={<h1>404</h1>}/>

            </Routes>
        </main>
    )
}

export default Rutas