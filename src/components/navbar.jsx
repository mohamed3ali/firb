import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
         <div className="icon"><a href="https://wa.link/sfg8w2" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
         <a href="https://www.facebook.com/fiberita" target="_blank"><i class="fa-brands fa-facebook"></i></a>
         <a href="https://wa.link/sfg8w2" target="_blank"><i class="fa-brands fa-facebook-messenger"></i></a></div>
      <div className="links">
        
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
