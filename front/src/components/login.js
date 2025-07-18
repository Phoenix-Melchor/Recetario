import React from "react";
import styles from '../styles/login.module.css';
import { Link } from "react-router-dom";
import { loginUser } from "../services/Auth";

function Login(){
    const login = async (e) => {
        e.preventDefault();
        try {
            const credentials = {
                username: e.target.username.value,
                password: e.target.password.value
            };
            const response = await loginUser(credentials);
            console.log(response);
            if (response.status === 201) {
                window.location.href = '/';
            }

        }
        catch (error) {
            var username_input = document.getElementById('username');
            var password_input = document.getElementById('password');
            username_input.style.border = '2px solid red';
            username_input.classList.add('error-message');
            username_input.addEventListener('animationend',() => {
                username_input.classList.remove('error-message');
            }, { once: true });
            username_input.placeholder = "Usuario y/o contraseña incorrecta";
            username_input.value = "";
            password_input.style.border = '2px solid red';
            password_input.classList.add('error-message');
            password_input.addEventListener('animationend',() => {
                password_input.classList.remove('error-message');
            }, { once: true });
            password_input.value = "";
            console.error(error.response)
        }
    };

    return (
        <div className="main-container">
            <div className="login-form">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={login} className="login-labels">
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