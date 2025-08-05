import React, { use, useEffect, useState } from "react";
import styles from '../styles/navbar.module.css'
import { Link } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
import { getUsername, isTokenValid } from "../utils/tokenUtils";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refresh_token');
    useEffect (() => {
        const loginBtn = document.getElementById('login_btn');
        
        try {
            if (token && isTokenValid(token)) {
                setIsLoggedIn(true)
                loginBtn.textContent = getUsername(token);
            } else if (refreshToken && isTokenValid(refreshToken)) {
                setIsLoggedIn(true)
                loginBtn.textContent = getUsername(refreshToken);
            }
        } catch (error) {
            console.error(error);
        }
    }, [token, refreshToken])
    const route = isLoggedIn ? "/logout" : "/login";

    return(
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="Logo"/>
                <span>El Rincón del Sazón</span>
            </div>
            <div className={styles.tabs}>
                <div className={styles.menus}>
                    <Link to="/" className={styles.link}>Home</Link>
                </div>
                <div className={styles.menus}>
                    {isLoggedIn ? (
                        <Link to="/recipes" className={styles.link}>Recetas</Link>
                    ) : (
                        <Link to="/register" className={styles.link}>Recetas</Link>
                    )}
                </div>
                <div className={styles.menus}>
                    {isLoggedIn ? (
                        <Link to="/ingredients" className={styles.link}>Ingredientes</Link>
                    ) : (
                        <Link to="/register" className={styles.link}>Ingredientes</Link>
                    )
                    }
                </div>
            </div>
            <div className="">
                <Link to={route} id="login_btn" className={styles.login}>Iniciar Sesión</Link>
            </div>
        </div>
    );
}

export default Navbar;