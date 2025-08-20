import React, { use, useEffect, useState } from "react";
import styles from '../styles/navbar.module.css'
import { Link } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
import { getUsername, verify_Token } from "../utils/tokenUtils";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect (() => {
        const checkToken = async () => {
            const loginBtn = document.getElementById('login_btn');
            try {
                const valid = await verify_Token()
                if (valid) {
                    setIsLoggedIn(true)
                    loginBtn.textContent = getUsername();
                }
            } catch (error) {
                console.error(error);
            }
        }

        checkToken();
    })
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
                        <Link to="/login" className={styles.link}>Recetas</Link>
                    )}
                </div>
                <div className={styles.menus}>
                    {isLoggedIn ? (
                        <Link to="/ingredients" className={styles.link}>Ingredientes</Link>
                    ) : (
                        <Link to="/login" className={styles.link}>Ingredientes</Link>
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