import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Intro } from "../base/Intro";
import { RecipeItem } from "./RecipeItem";
import { SectionHeading } from "../base/SectionHeading";

import { ErrorHendler } from "../errors/ErrorHendler";
import * as recipeServices from '../../services/recipeServices';

export const RecipeEdit = () => {

    const { recipeId } = useParams();
    const navigateTo = useNavigate();

    const [recipe, setRecipe] = useState([{}]);
    const [err, setErr] = useState({
        message: ''
    });

    useEffect(() => {
        recipeServices.getOne(recipeId)
            .then(recipe => setRecipe(recipe));
    }, [recipeId])


    function submitHendler(e) {
        e.preventDefault();

        const { recipeTitle, recipeDescription, recipeCategories, recipeTime, recipeImage } = Object.fromEntries(new FormData(e.target));
        const insertedData = { recipeTitle, recipeDescription, recipeCategories, recipeTime, recipeImage };

        if (recipeTitle === '' || recipeDescription === '' || recipeCategories === '' || recipeTime === '' || recipeImage === '') {
            setErr({
                message: 'All fields are required!'
            });
            return;
        }

        return recipeServices.edit(recipeId, insertedData)
            .then(
                navigateTo('/')
            );

    }

    return (
        <main className="create-recipe-page">
            <Intro
                mobileIntroImage={recipe[0].recipeImage}
                desktopIntroImage={recipe[0].recipeImage}
                introHeading={recipe[0].recipeTitle}
            />

            <section className="create-recipe-section">
                <div className="inner_section">

                    <SectionHeading
                        heading={"Edit YOUR recipe!"}
                        heading_text={"It doesn’t matter what you’re in the mood for, you’ll find the perfect easy-to-cook meal that will leave you smiling."}
                    />

                </div>
                <div className="inner_section">

                    <div className="col-half">
                        <form id="recipe_create_form" onSubmit={submitHendler}>
                            <div className="form_item">

                                <input
                                    type="text"
                                    id="recipeTitle"
                                    name="recipeTitle"
                                    defaultValue={recipe[0].recipeTitle}
                                    placeholder={recipe[0].recipeTitle}
                                    required
                                />

                            </div>

                            <div className="form_item">

                                <input
                                    type="text"
                                    id="recipeDescription"
                                    name="recipeDescription"
                                    defaultValue={recipe[0].recipeDescription}
                                    placeholder={recipe[0].recipeDescription}
                                    required
                                />

                            </div>

                            <div className="form_item">

                                <input
                                    type="text"
                                    id="recipeCategories"
                                    name="recipeCategories"
                                    defaultValue={recipe[0].recipeCategories}
                                    placeholder={recipe[0].recipeCategories}
                                    required
                                />

                            </div>

                            <div className="form_item">

                                <input
                                    type="number"
                                    id="recipeTime"
                                    name="recipeTime"
                                    defaultValue={recipe[0].recipeTime}
                                    placeholder={recipe[0].recipeTime}
                                    required
                                />

                            </div>

                            <div className="form_item">

                                <input
                                    type="text"
                                    id="recipeImage"
                                    name="recipeImage"
                                    defaultValue={recipe[0].recipeImage}
                                    placeholder={recipe[0].recipeImage}
                                />

                            </div>

                            <div className="form_item">

                                <input className="btn btn_blue btn_submit_register" type="submit" value="Edit" />

                            </div>

                            {err.message && <ErrorHendler error={err.message} />}

                        </form>

                    </div>


                    <div className="col-half">
                        <RecipeItem
                            author={'Dragan'}
                            recipeImage={recipe[0].recipeImage}
                            cookTime={recipe[0].recipeTime}
                            category={recipe[0].recipeCategories}
                            recipeTitle={recipe[0].recipeTitle}
                            resipeDescription={recipe[0].recipeDescription}

                        />
                    </div>
                </div>
            </section>
        </main>
    )
}