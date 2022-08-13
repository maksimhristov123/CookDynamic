import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import { Intro } from "../base/Intro";
import { RecipeItem } from "./RecipeItem";
import { SectionHeading } from "../base/SectionHeading";

import * as recipeServices from '../../services/recipeServices';
import { useUserContext } from '../../contexts/userContext'

export const RecipeCreate = () => {

    const { user } = useUserContext()
    const navigateTo = useNavigate();
    const [values, setValues] = useState({
        recipeTitle: '',
        recipeDescription: '',
        recipeCategories: '',
        recipeTime: '',
        recipeImage: '',
        recipeAuthor: '',
    })

    if (!user) {
        return <Navigate to="/" />
    }

    const chageHendler = (e) => {

        setValues(s => ({
            ...s,
            recipeAuthor: user._id,
            [e.target.name]: e.target.value
        }))

    }

    function submitHendler(e) {
        e.preventDefault();

        const { recipeTitle, recipeDescription, recipeCategories, recipeTime, recipeImage, recipeAuthor } = values;
        const insertedData = { recipeTitle, recipeDescription, recipeCategories, recipeTime, recipeImage, recipeAuthor };

        return recipeServices.create(insertedData)
            .then(
                navigateTo('/')
            );

    }

    return (
        <main className="create-recipe-page">
            <Intro
                mobileIntroImage={'./uploads/choose_recipe_desktop.png'}
                desktopIntroImage={'./uploads/choose_recipe_desktop.png'}
                introHeading={"Create recipe"}
            />

            <section className="create-recipe-section">
                <div className="inner_section">

                    <SectionHeading
                        heading={"Create YOUR recipe!"}
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
                                    value={values.recipeTitle}
                                    onChange={chageHendler}
                                    placeholder="Recipe Title"
                                    required
                                />

                            </div>

                            <div className="form_item">

                                <input
                                    type="text"
                                    id="recipeDescription"
                                    name="recipeDescription"
                                    value={values.recipeDescription}
                                    onChange={chageHendler}
                                    placeholder="Recipe Description"
                                    required
                                />

                            </div>

                            <div className="form_item">

                                <input
                                    type="text"
                                    id="recipeCategories"
                                    name="recipeCategories"
                                    value={values.recipeCategories}
                                    onChange={chageHendler}
                                    placeholder="Recipe Category"
                                    required
                                />

                            </div>

                            <div className="form_item">

                                <input
                                    type="number"
                                    id="recipeTime"
                                    name="recipeTime"
                                    value={values.recipeTime}
                                    onChange={chageHendler}
                                    placeholder="Recipe Cook Time"
                                    required
                                />

                            </div>

                            <div className="form_item">

                                <input
                                    type="text"
                                    id="recipeImage"
                                    name="recipeImage"
                                    value={values.recipeImage}
                                    onChange={chageHendler}
                                    placeholder="Recipe Image path"
                                />

                            </div>

                            <div className="form_item">

                                <input className="btn btn_blue btn_submit_register" type="submit" value="Create" />

                            </div>

                        </form>

                    </div>

                    <div className="col-half">
                        <RecipeItem
                            author={'Dragan'}
                            recipeImage={values.recipeImage || './uploads/meal2.png'}
                            cookTime={Number(values.recipeTime) || 20}
                            category={values.recipeCategories || ['best-seller']}
                            recipeTitle={values.recipeTitle || 'Lorem ipsum'}
                            resipeDescription={values.recipeDescription.substring(0, 100) || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                        />

                    </div>
                </div>
            </section>
        </main>
    )
}