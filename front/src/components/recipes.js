import React from "react";
import styles from '../styles/recipes.module.css';
import pizza from '../assets/pizza.jpg';
import { Link } from "react-router-dom";

function Recipes() {
const recipes = [
  {
    id: 1,
    title: "Pizza Napolitana",
    image: pizza,
    time: "30 min",
    difficulty: "Fácil",
  },
  {
    id: 2,
    title: "Ramen Japonés",
    image: pizza,
    time: "45 min",
    difficulty: "Media",
  },
  {
    id: 3,
    title: "Tacos al Pastor",
    image: pizza,
    time: "20 min",
    difficulty: "Fácil",
  },
  {
    id: 1,
    title: "Pizza Napolitana",
    image: pizza,
    time: "30 min",
    difficulty: "Fácil",
  },
  {
    id: 2,
    title: "Ramen Japonés",
    image: pizza,
    time: "45 min",
    difficulty: "Media",
  },
  {
    id: 3,
    title: "Tacos al Pastor",
    image: pizza,
    time: "20 min",
    difficulty: "Fácil",
  },
  {
    id: 1,
    title: "Pizza Napolitana",
    image: pizza,
    time: "30 min",
    difficulty: "Fácil",
  },
  {
    id: 2,
    title: "Ramen Japonés",
    image: pizza,
    time: "45 min",
    difficulty: "Media",
  },
  {
    id: 3,
    title: "Tacos al Pastor",
    image: pizza,
    time: "20 min",
    difficulty: "Fácil",
  },
  {
    id: 1,
    title: "Pizza Napolitana",
    image: pizza,
    time: "30 min",
    difficulty: "Fácil",
  },
  {
    id: 2,
    title: "Ramen Japonés",
    image: pizza,
    time: "45 min",
    difficulty: "Media",
  },
  {
    id: 3,
    title: "Tacos al Pastor",
    image: pizza,
    time: "20 min",
    difficulty: "Fácil",
  },
  {
    id: 1,
    title: "Pizza Napolitana",
    image: pizza,
    time: "30 min",
    difficulty: "Fácil",
  },
  {
    id: 2,
    title: "Ramen Japonés",
    image: pizza,
    time: "45 min",
    difficulty: "Media",
  },
  {
    id: 3,
    title: "Tacos al Pastor",
    image: pizza,
    time: "20 min",
    difficulty: "Fácil",
  },
  {
    id: 1,
    title: "Pizza Napolitana",
    image: pizza,
    time: "30 min",
    difficulty: "Fácil",
  },
  {
    id: 2,
    title: "Ramen Japonés",
    image: pizza,
    time: "45 min",
    difficulty: "Media",
  },
  {
    id: 3,
    title: "Tacos al Pastor",
    image: pizza,
    time: "20 min",
    difficulty: "Fácil",
  },
  
];

  return (
    <div className={styles.main_container}>
      <div className={styles.title_container}>
        <div className={styles.title}>
          <h1>Recetas</h1>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Buscar recetas..."/>
          <Link to="/add-recipe">
            <button>+</button>
          </Link>
        </div>
        {/* {recipes.length === 0 ? <p>No hay recetas disponibles</p> : null} */}
      </div>
      <div className={styles.container}>
        {recipes.map((recipe) => (
        <div className={styles.card} key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} className={styles.image} />
          <div className={styles.info}>
            <h3 className={styles.recipes_title}>{recipe.title}</h3>
            <p className={styles.details}>{recipe.time} · {recipe.difficulty}</p>
            <Link to={`/recipe/${recipe.id}`}>
              <button className={styles.button}>Ver receta</button>
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Recipes;