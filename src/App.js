import React from "react"
import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import { Routes , Route } from "react-router-dom"
import Carrito from "./components/Carrito"
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

    return (
        <>
        <BrowserRouter>
            <Header/>
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

        </BrowserRouter>
            <Footer/>
        </>
        
    )
}

export default App
