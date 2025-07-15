import React from "react";
import '../styles/login.css';
import { Link } from "react-router-dom";

function Login(){
    return (
        <div className="main-container">
            <div className="login-form">
                <h2>Iniciar Sesión</h2>
                <form className="login-labels">
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" name="username" required />
                    <br/><br/><br/>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                    <br/><br/><br/><br/><br/><br/>
                    <button type="submit">Iniciar Sesión</button>
                    <Link to="/register" className="loginbtn">¿Aún no tienes cuenta? Regístrate</Link>
                </form>
            </div>
        </div>
    );
}
export default Login;