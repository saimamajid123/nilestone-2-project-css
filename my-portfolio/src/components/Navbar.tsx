import React from 'react';
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="containerBox ">
      <div className="navbar">
        <div className="logo">Saima Majid</div>
        <ul className="menu">
          <li className="menu-link"><a href="#hero">Home</a></li>
          <li className="menu-link"><a href="#about">About</a></li>
          <li className="menu-link"><a href="#projects">Projects</a></li>
          <li className="menu-link"><a href="#skills">Skills</a></li>
          <li className="menu-link"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <AiOutlineMenuUnfold size={30} className="menu-icon" />
    </div>
  );
};

export default Navbar;
