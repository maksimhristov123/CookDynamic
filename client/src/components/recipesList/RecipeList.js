import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft, faLongArrowRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { RecipeItem } from "./RecipeItem";
import { Intro } from '../base/Intro';
import { SectionHeading } from '../base/SectionHeading';

import * as recipeServices from '../../services/recipeServices';
import { useEffect, useState } from 'react';


export const RecipeList = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeServices.getAll()
            .then(recipes => setRecipes(recipes));
    }, [])

    console.log(recipes);

    return (
        <main className="choose_recipes_page">

            <Intro
                mobileIntroImage={'./uploads/choose_recipe_desktop.png'}
                desktopIntroImage={'./uploads/choose_recipe_desktop.png'}
                introHeading={"Our menu"}
            />

            <section className="choose_recipe_desktop">

                <SectionHeading
                    heading={"Our menu"}
                    heading_text={"It doesn’t matter what you’re in the mood for, you’ll find the perfect easy-to-cook meal that will leave you smiling."}
                />

                <div className="inner_section">
                    <div className="recipes_menu_container">

                        {recipes.map((recipe) => <RecipeItem key={recipe._id} recipeImage={recipe.recipeImage} cookTime={recipe.recipeTime} category={recipe.recipeCategories} recipeTitle={recipe.recipeTitle} resipeDescription={recipe.recipeDescription} /> )}

                    </div>
                </div>

            </section>
            

        </main>
    )
}