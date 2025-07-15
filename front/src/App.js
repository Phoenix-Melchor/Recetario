import './App.css';
import Home from './components/home.js';
import Navbar from './components/navbar.js';
import { Routes, Route } from 'react-router-dom';
import Recipes from './components/recipes.js';
import Ingredients from './components/ingredients.js';
import Register from './components/register.js';
import Login from './components/login.js';


function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/ingredients' element={<Ingredients/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
