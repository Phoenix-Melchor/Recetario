import React from "react";
import '../styles/navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    const isLoggedIn = false;
    return(
        <div className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="Logo"/>
                <span>El Rincón del Sazón</span>
            </div>
            <div className="tabs">
                <div className="menus">
                    <Link to="/" className="link">Home</Link>
                </div>
                <div className="menus">
                    {isLoggedIn ? (
                        <Link to="/recipes" className="link">Recetas</Link>
                    ) : (
                        <Link to="/register" className="link">Recetas</Link>
                    )}
                </div>
                <div className="menus">
                    {isLoggedIn ? (
                        <Link to="/ingredients" className="link">Ingredientes</Link>
                    ) : (
                        <Link to="/register" className="link">Ingredientes</Link>
                    )
                    }
                </div>
                <div>
                    <Link to="/login" className="login">Iniciar Sesión</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;