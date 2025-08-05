import React, { useRef } from "react";
import styles from '../styles/login.module.css';
import { Link } from "react-router-dom";
import { loginUser } from "../services/Auth";

function Login(){
    const username = useRef();
    const password = useRef();

    const login = async (e) => {
        e.preventDefault();
        try {
            const credentials = {
                username: e.target.username.value.trim().toLowerCase(),
                password: e.target.password.value
            };
            const response = await loginUser(credentials);
            window.location.reload();
            window.location.href = '/';
        }
        catch (error) {
            var username_input = username.current;
            var password_input = password.current;

            username_input.style.border = '2px solid red';
            username_input.classList.add(styles.error_message);
            username_input.addEventListener('animationend',() => {
                username_input.classList.remove(styles.error_message);
            }, { once: true });
            username_input.placeholder = "Usuario y/o contraseña incorrecta";
            username_input.value = "";
            password_input.style.border = '2px solid red';
            password_input.classList.add(styles.error_message);
            password_input.addEventListener('animationend',() => {
                password_input.classList.remove(styles.error_message);
            }, { once: true });
            password_input.value = "";
            console.error(error.response)
        }
    };

    return (
        <div className={styles.main_container}>
            <div className={styles.login_form}>
                <h2>Iniciar Sesión</h2>
                <form onSubmit={login} className={styles.login_labels}>
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" ref={username} name="username" required />
                    <br/><br/><br/>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" ref={password} id="password" name="password" required />
                    <br/><br/><br/><br/><br/><br/>
                    <button type="submit">Iniciar Sesión</button>
                    <Link to="/register" className={styles.registerbtn}>¿Aún no tienes cuenta? Regístrate</Link>
                </form>
            </div>
        </div>
    );
}
export default Login;