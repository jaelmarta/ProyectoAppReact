import React from "react"
import { Link } from "react-router-dom"
import NavBar from "./NavBar"


function Header(prop) {
    
    return (
    <header id="main-header" className="header">
        <Link to="/">
            <img className="logo" src="/img/logo.jpeg" alt=""/>
        </Link>
        <NavBar/>
    </header>
    )
}

export default Header