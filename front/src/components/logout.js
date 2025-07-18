import React from "react";
import styles from '../styles/logout.module.css';

function Logout() {

    return (
        <div className={styles['main-container']}>
            <div className={styles['logout-form']}>
                <h2>Cerrar Sesión</h2>
                <button>Si</button>
                <button>No</button>
            </div>
        </div>
    )
}

export default Logout;