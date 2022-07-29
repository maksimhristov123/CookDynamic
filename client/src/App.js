import {Header} from './components/base/Header';

import './App.css';
// import { RecipeList } from './components/recipesList/RecipeList';
// import { Register } from './components/userSpace/Register';
// import { Login } from './components/userSpace/Login';
import { RecipeCreate } from './components/recipesList/RecipeCreate';
// import { RecipeEdit } from './components/recipesList/RecipeEdit';
// import { RecipeDetails } from './components/recipesList/RecipeDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <RecipeCreate />
    </div>
  );
}

export default App;
