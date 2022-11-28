import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/category/ropa">Ropa</NavLink>
      <NavLink to="/category/accesorios">Accesorios</NavLink>
      <NavLink to="/carrito"><CartWidget /></NavLink>
      
    </nav>
  );
};

export default NavBar;
