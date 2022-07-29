import { Routes, Route } from 'react-router-dom';

import './App.css';


import { Header } from './components/base/Header';
import { RecipeList } from './components/recipesList/RecipeList';
import { Register } from './components/userSpace/Register';
import { Login } from './components/userSpace/Login';
import { RecipeCreate } from './components/recipesList/RecipeCreate';
import { RecipeEdit } from './components/recipesList/RecipeEdit';
import { RecipeDetails } from './components/recipesList/RecipeDetails';

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<RecipeList />} />

                {/* Recipes */}
                <Route path="/recipeCreate" element={<RecipeCreate />} />

                {/* Users */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
 
            </Routes>

        </div>
    );
}

export default App;
