import React, { useState } from "react";
import home1 from '../assets/home1.jpg';
import '../styles/home.css';
import { Link } from "react-router-dom";

function Home() {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="home">
            <div className="homeContent">
                <div className="homeText">
                    <h1>GUARDA TUS RECETAS Y TUS INGREDIENTES EN UN SOLO LUGAR</h1>
                    <Link to="/register" className="registerbtn" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <span>¡Comenzar Ahora!</span>
                        <img src={hovered ? "/arrow2.png" : "/arrow.png"} alt="Arrow" className="arrow"/>
                    </Link>
                </div>
                <div className="homeImage">
                    <img src={home1} alt="Home" className="homeImg"/>
                </div>
            </div>           
        </div>
        
    );
}

export default Home;