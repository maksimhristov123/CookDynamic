import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Intro } from "../base/Intro";
import { SectionHeading } from "../base/SectionHeading";
import * as recipeServices from '../../services/recipeServices';
import { useParams } from "react-router-dom";

export const RecipeDetails = () => {

    const [recipe, setRecipe] = useState([{}]);
    const { recipeId } = useParams();

    useEffect(() => {
        recipeServices.getOne(recipeId)
            .then(recipe => setRecipe(recipe));
    }, [recipeId])


    return (
        <main className="create-recipe-page">
            <Intro
                mobileIntroImage={recipe[0].recipeImage}
                desktopIntroImage={recipe[0].recipeImage}
                introHeading={recipe[0].recipeTitle}
            />

            <section className="details-recipe-section">
                <div className="inner_section">

                    <SectionHeading heading={"Details YOUR recipe!"} heading_text={"It doesn’t matter what you’re in the mood for, you’ll find the perfect easy-to-cook meal that will leave you smiling."} />

                </div>
                <div className="inner_section">

                    <div className="card details">

                        <div className="card_img_container">
                            <div className="recipe_time">
                                <img src="./uploads/pan.png" alt="" />
                                <p className="time"><span>{recipe[0].recipe}</span> mins</p>
                            </div>

                            <div className="recipe_category">
                                <p className="category">{recipe[0].recipeCategory}</p>
                            </div>

                            <img src={recipe[0].recipeImage} alt={recipe[0].recipeTitle} />
                        </div>

                        <div className="card_content_container">
                            <h3 className="card_title">{recipe[0].recipeTitle}</h3>
                            <p>
                                {recipe[0].recipeDescription}
                            </p>

                            <div className='btn_container'>

                                <Link to={`/recipes/${recipeId}/edit`} className="btn add_to_card">
                                    Edit
                                </Link>

                                <Link to={`/recipes/${recipeId}/delete`} className="btn add_to_card">
                                    Delete
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>

    )
}