import {Header} from './components/base/Header';

import './App.css';
import { RecipeList } from './components/recipesList/RecipeList';

function App() {
  return (
    <div className="App">
      <Header />
      <RecipeList />
    </div>
  );
}

export default App;
