import React from "react";
import "../../app.css";
import "../header/header.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full px-4 md:px-0">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4">
        <Link to="/home" className="w-full md:w-auto text-center md:text-left">
          <h1 className="text-white text-4xl">ULTIMATE-FIT</h1>
        </Link>
        <ul className="w-full md:w-auto flex flex-col md:flex-row md:space-x-12 text-white items-center justify-center md:justify-end pt-4 md:pt-0">
          <Link to="/home">
            <li id="title-header" className="cursor-pointer">Accueil</li></Link>
          <Link to="/musculation">
          <li id="title-header" className="cursor-pointer">Musculation</li></Link>
          <li id="title-header" className="cursor-pointer">Fitness</li>
          <li id="title-header" className="cursor-pointer">Boutique</li>
          <li id="title-header" className="cursor-pointer">Profile</li>
          <Link to="/login">
            <li  id="title-header" className="cursor-pointer">Se connecter</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
