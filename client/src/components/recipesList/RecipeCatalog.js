
import { RecipeItem } from "./RecipeItem";

import * as recipeServices from '../../services/recipeServices';
import { useEffect, useState } from 'react';


export const RecipeCatalog = (props) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeServices.getAll()
            .then(recipes => setRecipes(recipes));
    }, [])

    return (
        <div className="recipes_menu_container">

            {recipes.length === 0 ?
                <p>There is no recipes!</p>
                : !props.userId ?
                    recipes.map((recipe) => <RecipeItem
                        key={recipe._id}
                        recipeId={recipe._id}
                        recipeImage={recipe.recipeImage}
                        cookTime={recipe.recipeTime}
                        category={recipe.recipeCategories}
                        recipeTitle={recipe.recipeTitle}
                        resipeDescription={recipe.recipeDescription}
                    />)
                    : recipes.filter((recipe) => recipe.recipeAuthor === props.userId)
                        .map((r) => <RecipeItem
                            key={r._id}
                            recipeId={r._id}
                            recipeImage={r.recipeImage}
                            cookTime={r.recipeTime}
                            category={r.recipeCategories}
                            recipeTitle={r.recipeTitle}
                            resipeDescription={r.recipeDescription}
                        />)
                
            }

           

        </div>
    )
}