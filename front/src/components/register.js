import React, {useRef} from "react";
import styles from '../styles/register.module.css';
import { Link } from "react-router-dom";
import { loginUser, registerUser } from "../services/Auth";

function Register() {
    const username = useRef();
    
    const register = async (e) => {
        e.preventDefault();
        try {
            const newUser = {
                username: e.target.username.value.trim().toLowerCase(),
                password: e.target.password.value
            };
            await registerUser(newUser);
            await loginUser(newUser);
            window.location.reload();
            window.location.href = '/';
        }
        catch (error) {
            const response = error?.response;
            var detail = response?.data?.detail || "Ocurrio un error";
            var username_input = username.current;
            
            username_input.style.border = '2px solid red';
            username_input.classList.add(styles.error_message);
            username_input.addEventListener('animationend',() => {
                username_input.classList.remove(styles.error_message);
            }, { once: true });
            username_input.placeholder = detail;
            username_input.value = "";
        }
    };

    return (
        <div className={styles.main_container}>
            <div className={styles.register_form}>
                <h2>Registrarse</h2>
                <form onSubmit={register} className={styles.register_labels}>
                    <label htmlFor="username">Usuario:</label>
                    <input ref={username} type="text" name="username" required />
                    <br/><br/><br/>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" required />
                    <br/><br/><br/><br/><br/><br/>
                    <button type="submit">Registrarse</button>
                    <Link to="/login" className={styles.loginbtn}>¿Ya tienes una cuenta? Inicia sesión</Link>
                </form>
            </div>
        </div>
    );
}
export default Register;