import React, { useEffect, useRef, useState } from "react";
import styles from '../styles/add_recipes.module.css';

function AddRecipe() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const add = async (e) => {
        try {

        }
        catch {

        }
    }

    return (
        <div className={styles.main_container}>
            <div className={styles.data_container}>
                <div className={styles.title_container}>
                <div className={styles.title}>
                    <h1>Agregar Receta</h1>
                </div>
                <div className={styles.search}>
                    <button className={styles.button}>Guardar</button>
                </div>
            </div>
            <br/>
            <form onSubmit={add} className={styles.container}>
                <div className={styles.leftSide}>
                    <div className={styles.leftSideContainer}>
                        <div className={styles.design}>
                            <label>Nombre:</label>
                            <input type="text" required/>
                            <br/>
                            <label>Descripcion:</label>
                            <input type="text" required/>
                            <br/>
                            <label>Instrucciones</label>
                            <textarea placeholder={`Escribe cada paso y presiona Enter para agregar otro.\nEjemplo:\n1. Precalentar el horno a 180°C\n2. Mezclar los ingredientes\n3. Hornear por 20 min`} type="text" required/>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <label htmlFor="imageUpload" className={styles.imageDisplay}>
                        <img src={preview || "/image.png"} style={{width: preview ? "100%" : "20%", height: preview ? "100%" : "20%", borderRadius: "10px"}}/>
                    </label>
                    <input id="imageUpload" type="file" accept="image/*" onChange={handleImageChange} style={{display: "none"}}/>
                    <br/><br/>
                    <label>Ingredientes:</label>
                    <input/>
                </div>
            </form>
            </div>
        </div>
    );
}

export default AddRecipe;
