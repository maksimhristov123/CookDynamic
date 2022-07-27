import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft, faLongArrowRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { RecipeItem } from "./RecipeItem";
import { Intro } from '../base/Intro';
import { SectionHeading } from '../base/SectionHeading';


export const RecipeList = () => {

    return (
        <main className="choose_recipes_page">

            <Intro
                mobileIntroImage={'./uploads/choose_recipe_desktop.png'}
                desktopIntroImage={'./uploads/choose_recipe_desktop.png'}
                introHeading={"Our menu"}
            />

            <section className="choose_recipe_desktop">

                <SectionHeading heading={"Our menu"}  heading_text={"It doesn’t matter what you’re in the mood for, you’ll find the perfect easy-to-cook meal that will leave you smiling."}/>

                <div className="inner_section">
                    <div className="tag_list_container">
                        <button className="tag_scroll tag-scroll--left" type="button">
                            <FontAwesomeIcon icon={faLongArrowLeft} />
                        </button>

                        <ul className="tag_list">
                            <li className="tag" >
                                <a href="/" className="all">#all</a>
                            </li>

                            <li className="tag" >
                                <a href="/" className="vegetarian">#vegetarian</a>
                            </li>
                            <li className="tag" >
                                <a href="/" className="vegan">#vegan</a>
                            </li>
                            <li className="tag">
                                <a href="/" className="meat">#meat</a>
                            </li>
                            <li className="tag">
                                <a href="/" className="asian">#asian</a>
                            </li>
                            <li className="tag">
                                <a href="/" className="pascaterian">#pascaterian</a>
                            </li>

                            <li className="tag" >
                                <a href="/" className="vegan">#vegan</a>
                            </li>
                            <li className="tag">
                                <a href="/" className="meat">#meat</a>
                            </li>
                            <li className="tag">
                                <a href="/" className="asian">#asian</a>
                            </li>
                            <li className="tag">
                                <a href="/" className="pascaterian">#pascaterian</a>
                            </li>


                        </ul>


                        <button className="tag_scroll tag-scroll--right" type="button" >
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </button>

                    </div>
                </div>

                <div className="inner_section">
                    <div className="recipes_menu_container">

                        <RecipeItem
                            author={'Ivan'}
                            recipeImage={'./uploads/top.png'}
                            cookTime={20}
                            category={['new', 'top_item', 'vegan']}
                            recipeTitle={'Korean rolls kimpab with soy sauce - Asian food'}
                            resipeDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                        />

                        <RecipeItem
                            author={'Dragan'}
                            recipeImage={'./uploads/meal2.png'}
                            cookTime={20}
                            category={['best_seller', 'item', 'pascaterian']}
                            recipeTitle={'Thai traditional red curry soup with shrimps prawns and coconut milk'}
                            resipeDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                        />

                        <RecipeItem
                            author={'Dragan'}
                            recipeImage={'./uploads/meal3.png'}
                            cookTime={20}
                            category={['all_stars', 'item', 'pascaterian']}
                            recipeTitle={'Thai traditional red curry soup with shrimps prawns and coconut milk'}
                            resipeDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                        />

                        <RecipeItem
                            author={'Dragan'}
                            recipeImage={'./uploads/meal1.png'}
                            cookTime={20}
                            category={['all_stars', 'item', 'asian']}
                            recipeTitle={'Thai traditional red curry soup with shrimps prawns and coconut milk'}
                            resipeDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                        />

                        <RecipeItem
                            author={'Pesho'}
                            recipeImage={'./uploads/meal2.png'}
                            cookTime={20}
                            category={['new', 'item', 'meat']}
                            recipeTitle={'Thai traditional red curry soup with shrimps prawns and coconut milk'}
                            resipeDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                        />

                        <RecipeItem
                            author={'Pesho'}
                            recipeImage={'./uploads/meal2.png'}
                            cookTime={40}
                            category={['best_seller', 'item', 'asian']}
                            recipeTitle={'Thai traditional red curry soup with shrimps prawns and coconut milk'}
                            resipeDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                        />

                        <RecipeItem
                            author={'Pesho'}
                            recipeImage={'./uploads/meal3.png'}
                            cookTime={2}
                            category={['new', 'item', 'vegetarian']}
                            recipeTitle={'Thai traditional red curry soup with shrimps prawns and coconut milk'}
                            resipeDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                        />

                        <RecipeItem
                            author={'Ivan'}
                            recipeImage={'./uploads/meal3.png'}
                            cookTime={42}
                            category={['best_seller', 'item', 'vegetarian']}
                            recipeTitle={'Thai traditional red curry soup with shrimps prawns and coconut milk'}
                            resipeDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                        />

                        <RecipeItem
                            author={'Ivan'}
                            recipeImage={'./uploads/meal1.png'}
                            cookTime={23}
                            category={['new', 'item', 'asian']}
                            recipeTitle={'Thai traditional red curry soup with shrimps prawns and coconut milk'}
                            resipeDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                        />

                        <RecipeItem
                            author={'Ivan'}
                            recipeImage={'./uploads/meal2.png'}
                            cookTime={21}
                            category={['best_seller', 'item', 'meat']}
                            recipeTitle={'Thai traditional red curry soup with shrimps prawns and coconut milk'}
                            resipeDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                        />

                        <RecipeItem
                            author={'Gosho'}
                            recipeImage={'./uploads/meal1.png'}
                            cookTime={21}
                            category={['best_seller', 'item', 'vegetarian']}
                            recipeTitle={'Thai traditional red curry soup with shrimps prawns and coconut milk'}
                            resipeDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}

                        />

                    </div>
                </div>

            </section>

            <section className="add_recipes">
                <div className="inner_section">
                    <div className="recipes_added">
                        <div className="recipe_added_item">

                            <FontAwesomeIcon icon={faPlusCircle} />
                            <p>Add recipe</p>
                        </div>

                        <div className="recipe_added_item">
                            <FontAwesomeIcon icon={faPlusCircle} />
                            <p>Add recipe</p>
                        </div>

                        <div className="recipe_added_item">
                            <FontAwesomeIcon icon={faPlusCircle} />
                            <p>Add recipe</p>
                        </div>

                        <div className="recipe_added_item">
                            <FontAwesomeIcon icon={faPlusCircle} />
                            <p>Add recipe</p>
                        </div>

                        <div className="recipe_added_item">
                            <FontAwesomeIcon icon={faPlusCircle} />
                            <p>Add recipe</p>
                        </div>
                    </div>

                    <form id="serving_form" action="">

                        <a href="/" className="btn btn_blue btn_submit_servings">
                            <p className="text_white">Next</p>
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </a>
                    </form>
                </div>
            </section>

        </main>
    )
}