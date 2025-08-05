import React from "react";
import styles from '../styles/logout.module.css';
import { deleteToken } from "../utils/tokenUtils";

function Logout() {

    const handleLogout = () => {
        deleteToken();
        window.location.reload();
        window.location.href = '/login';
    }

    const handleCancel = () => {
        window.location.href = '/';
    }

    return (
        <div className={styles['main-container']}>
            <div className={styles['logout-form']}>
                <h2>Cerrar Sesión</h2>
                <h3>¿Estás seguro que deseas cerrar sesión?</h3>
                <div className={styles.buttons}>
                    <button onClick={handleLogout}>Si</button>
                    <button onClick={handleCancel}>No</button>
                </div>
            </div>
        </div>
    )
}

export default Logout;