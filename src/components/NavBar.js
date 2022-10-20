import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <a class="button" href="#">
        Productos
      </a>
      <a href="#">
        <img src="/img/logo.jpeg" />
      </a>
      <a class="button" href="#">
        Contacto
      </a>
      <CartWidget/>
      </nav>
  );
};

export default NavBar;
