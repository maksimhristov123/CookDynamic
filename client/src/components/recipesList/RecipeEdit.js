import { useEffect, useState } from "react";

import { Intro } from "../base/Intro";
import { RecipeItem } from "./RecipeItem";
import { SectionHeading } from "../base/SectionHeading";
import * as recipeServices from '../../services/recipeServices';
import { useParams } from "react-router-dom";

export const RecipeEdit = () => {

    
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
{/* 
            <section className="create-recipe-section">
                <div className="inner_section">

                    <SectionHeading
                        heading={"Edit YOUR recipe!"}
                        heading_text={"It doesn’t matter what you’re in the mood for, you’ll find the perfect easy-to-cook meal that will leave you smiling."}
                    />

                </div>
                <div className="inner_section">

                    <div className="col-half">
                            <form id="recipe_create_form">
                                <div className="form_item">

                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Name"
                                        required
                                    />

                                </div>

                                <div className="form_item">

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />

                                </div>

                                <div className="form_item">

                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />

                                </div>

                                <div className="form_item">

                                    <input
                                        type="password"
                                        id="repeatPassword"
                                        name="repeatPassword"
                                        placeholder="Repeat Password"
                                        required
                                    />

                                </div>

                                <div className="form_item">

                                    <input
                                        type="text"
                                        id="profileImageUrl"
                                        name="profileImageUrl"
                                        placeholder="Profile Image path"
                                    />

                                </div>

                                <div className="form_item">

                                    <input className="btn btn_blue btn_submit_register" type="submit" value="Submit" />

                                </div>

                                <p>
                                    You already have an account?
                                    <a href="/">
                                        <span>Login</span>
                                    </a>
                                </p>
                            </form>

                    </div>

                    <div className="col-half">
                            <RecipeItem
                                author={'Dragan'}
                                recipeImage={'./uploads/meal2.png'}
                                cookTime={20}
                                category={['best_seller', 'item', 'pascaterian']}
                                recipeTitle={'Thai traditional red curry soup with shrimps prawns and coconut milk'}
                                resipeDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                            />

                    </div>
                </div>
            </section> */}
        </main>
    )
}