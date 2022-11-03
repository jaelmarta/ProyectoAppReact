import React from "react"
import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"


function App() {

    return (
        <>
        <BrowserRouter>
            <Header/>
            <ItemListContainer
            title="JM Vintage Store"
            />
        </BrowserRouter>
            <Footer/>
        </>
    )
}

export default App
