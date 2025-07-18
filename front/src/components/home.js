import React, { useState } from "react";
import home1 from '../assets/home1.jpg';
import styles from '../styles/home.module.css';
import { Link } from "react-router-dom";

function Home() {
    const token = localStorage.getItem('token');
    const [hovered, setHovered] = useState(false);
    var route = "";
    if (token) {route = "/recipes"} else {route = "/register"};

    return (
        <div className={styles.home}>
            <div className={styles.homeContent}>
                <div className={styles.homeText}>
                    <h1>GUARDA TUS RECETAS Y TUS INGREDIENTES EN UN SOLO LUGAR</h1>
                    <Link to={route} className={styles.registerbtn} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <span>¡Comenzar Ahora!</span>
                        <img src={hovered ? "/arrow2.png" : "/arrow.png"} alt="Arrow" className={styles.arrow}/>
                    </Link>
                </div>
                <div className={styles.homeImage}>
                    <img src={home1} alt="Home" className={styles.homeImg}/>
                </div>
            </div>           
        </div>
        
    );
}

export default Home;