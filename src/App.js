import React from "react"
import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"


function App() {

    return (
        <>
            <Header/>
            <ItemListContainer
            title="JM Vintage Store"
            />
            <Footer/>
        </>
    )
}

export default App
