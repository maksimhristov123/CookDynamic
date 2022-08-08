import { Routes, Route } from 'react-router-dom';

import './App.css';

import {UserContext} from './contexts/userContext'

import { Header } from './components/base/Header';
import { RecipeList } from './components/recipesList/RecipeList';
import { Register } from './components/userSpace/Register';
import { Login } from './components/userSpace/Login';
import { Logout } from './components/userSpace/Logout';
import { RecipeCreate } from './components/recipesList/RecipeCreate';
import { RecipeEdit } from './components/recipesList/RecipeEdit';
import { RecipeDelete } from './components/recipesList/RecipeDelete';
import { RecipeDetails } from './components/recipesList/RecipeDetails';

import { useLocalStorage } from "./hooks/useLocaleStorage";

function App() {
    const [auth, setAuth] = useLocalStorage('auth',{});

    const userLogin= (authData) => {
        setAuth(authData)
    }

    const userLogout = () => {
        setAuth({})
    }

    return (
        <UserContext.Provider value={{user:auth, userLogin, userLogout}}>
            <div className="App">
                <Header />

                <Routes>
                    <Route path="/" element={<RecipeList />} />

                    {/* Recipes */}
                    <Route path="/create" element={<RecipeCreate />} />
                    <Route path="/recipes/:recipeId/edit" element={<RecipeEdit />} />
                    <Route path="/recipes/:recipeId/delete" element={<RecipeDelete />} />
                    <Route path="/recipes/:recipeId" element={<RecipeDetails />} />

                    {/* Users */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
    
                </Routes>

            </div>
        </UserContext.Provider>
    );
}

export default App;
