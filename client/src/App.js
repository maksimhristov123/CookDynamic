import {Header} from './components/base/Header';

import './App.css';
import { RecipeList } from './components/recipesList/RecipeList';
import { Register } from './components/userSpace/Register';
import { Login } from './components/userSpace/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <RecipeList />
      <Register/>
      <Login />
    </div>
  );
}

export default App;
