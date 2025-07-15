import React from "react";
import '../styles/register.css';
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="main-container">
            <div className="register-form">
                <h2>Registrarse</h2>
                <form className="register-labels">
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" name="username" required />
                    <br/><br/><br/>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                    <br/><br/><br/><br/><br/><br/>
                    <button type="submit">Registrarse</button>
                    <Link to="/login" className="loginbtn">¿Ya tienes una cuenta? Inicia sesión</Link>
                </form>
            </div>
        </div>
    );
}
export default Register;