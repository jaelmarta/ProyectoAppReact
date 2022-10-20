import React from "react"
import NavBar from "./NavBar"

function Header(prop) {
    

    let nombreCompleto = prop.nombre + " " +  prop.apellido

    return (
        <header className="header">
            <NavBar/>
            
        </header>
    )
}

export default Header