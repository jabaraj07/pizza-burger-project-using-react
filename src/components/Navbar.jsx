import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbarfulldiv">
      <nav className="navbar">

      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "Close" : "Menu"}
      </button>

      <div className={`menu ${isOpen ? "open" : ""}`}>
      <ul>
          <li>
            <Link to="./">HOME</Link>{" "}
          </li>
          <li>
            <Link to="./pizza">Pizza</Link>{" "}
          </li>
          <li>
            <Link to="./Burger">Burger</Link>{" "}
          </li>
          <li>
            <Link to="./cart">Cart:{cart.length}</Link>{" "}
          </li>
        </ul>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
