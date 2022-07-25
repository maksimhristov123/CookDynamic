
export const RecipeList = () => {

    return (
        <main className="choose_recipes_page">

            <section className="hero inner_hero">

                <img className="bg_hero_mobile bg_inner" src="./uploads/choose_recipe.png" alt="" />
                <img className="bg_hero_desktop bg_inner" src="./uploads/choose_recipe_desktop.png" alt="" />

                <div className="hero_container">

                    <h1 className="hero_heading home_hero_heading">Our menu</h1>
                </div>

            </section>

            <section className="choose_recipe_desktop">

                <div class="section_heading_container">
                    <h2 class="section_heading">Our menu</h2>
                    <p class="section_heading_text">It doesn’t matter what you’re in the mood for, you’ll find the perfect easy-to-cook meal that will leave you smiling.</p>
                </div>

                <div className="inner_section">
                    <div className="tag_list_container">
                        <button className="tag_scroll tag-scroll--left" type="button"><i className="fal fa-long-arrow-left" ></i></button>

                        <ul className="tag_list">
                            <li className="tag" >
                                <a className="all">#all</a>
                            </li>

                            <li className="tag" >
                                <a className="vegetarian">#vegetarian</a>
                            </li>
                            <li className="tag" >
                                <a className="vegan">#vegan</a>
                            </li>
                            <li className="tag">
                                <a className="meat">#meat</a>
                            </li>
                            <li className="tag">
                                <a className="asian">#asian</a>
                            </li>
                            <li className="tag">
                                <a className="pascaterian">#pascaterian</a>
                            </li>

                            <li className="tag" >
                                <a className="vegan">#vegan</a>
                            </li>
                            <li className="tag">
                                <a className="meat">#meat</a>
                            </li>
                            <li className="tag">
                                <a className="asian">#asian</a>
                            </li>
                            <li className="tag">
                                <a className="pascaterian">#pascaterian</a>
                            </li>


                        </ul>


                        <button className="tag_scroll tag-scroll--right" type="button" ><i className="fal fa-long-arrow-right" ></i></button>
                    </div>
                </div>

                <div className="inner_section">
                    <div className="recipes_menu_container">

                        <div className="top_item vegan new">
                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>
                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">new</p>
                                    </div>

                                    <img src="./uploads/top.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Korean rolls kimpab with soy sauce - Asian food</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <a className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>

                        <div className="item pascaterian best_seller">
                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>

                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">best seller</p>
                                    </div>

                                    <img src="./uploads/meal2.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Thai traditional red curry soup with shrimps prawns and coconut milk</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                    <a className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>
                        <div className="item pascaterian all_stars">

                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>

                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">all stars</p>
                                    </div>

                                    <img src="./uploads/meal3.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Thai traditional red curry soup with shrimps prawns and coconut milk</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                    <a className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>
                        <div className="item asian all_stars">

                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>

                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">all stars</p>
                                    </div>

                                    <img src="./uploads/meal1.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Thai traditional red curry soup with shrimps prawns and coconut milk</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                    <a className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>
                        <div className="item meat new">

                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>

                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">new</p>
                                    </div>

                                    <img src="./uploads/meal2.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Thai traditional red curry soup with shrimps prawns and coconut milk</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                    <a className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>
                        <div className="item asian best_seller">

                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>

                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">best seller</p>
                                    </div>

                                    <img src="./uploads/meal3.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Thai traditional red curry soup with shrimps prawns and coconut milk</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                    <a className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>
                        <div className="item vegetarian new">

                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>

                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">new</p>
                                    </div>

                                    <img src="./uploads/meal3.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Thai traditional red curry soup with shrimps prawns and coconut milk</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                    <a className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>
                        <div className="item vegetarian best_seller">

                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>

                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">best seller</p>
                                    </div>

                                    <img src="./uploads/meal3.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Thai traditional red curry soup with shrimps prawns and coconut milk</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                    <a className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>
                        <div className="item asian new">

                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>

                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">new</p>
                                    </div>

                                    <img src="./uploads/meal3.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Thai traditional red curry soup with shrimps prawns and coconut milk</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                    <a className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>
                        <div className="item meat best_seller">
                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>

                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">best seller</p>
                                    </div>

                                    <img src="./uploads/meal3.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Thai traditional red curry soup with shrimps prawns and coconut milk</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                    <a className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>
                        <div className="item vegetarian best_seller">
                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>

                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">best seller</p>
                                    </div>

                                    <img src="./uploads/meal3.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Thai traditional red curry soup with shrimps prawns and coconut milk</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

                                    <a className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>

                        <div className="item vegetarian best_seller">

                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>

                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">best seller</p>
                                    </div>

                                    <img src="./uploads/meal3.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Thai traditional red curry soup with shrimps prawns and coconut milk</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

                                    <a className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>
                        <div className="item vegetarian best_seller">

                            <div className="card">
                                <div className="card_img_container">
                                    <div className="recipe_time">
                                        <img src="./uploads/pan.png" alt="" />
                                        <p className="time"><span>20</span> mins</p>

                                    </div>

                                    <div className="recipe_category">
                                        <p className="category">best seller</p>
                                    </div>

                                    <img src="./uploads/meal3.png" alt="" />
                                </div>
                                <div className="card_content_container">
                                    <h3 className="card_title">Thai traditional red curry soup with shrimps prawns and coconut milk</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                    <a href='/' className="add_to_card text_blue"><i className="far fa-plus-circle text_blue"></i> Add Recipe</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>

            <section className="add_recipes">
                <div className="inner_section">
                    <div className="recipes_added">
                        <div className="recipe_added_item">
                            <i className="far fa-plus-circle text_blue"></i>
                            <p>Add recipe</p>
                        </div>

                        <div className="recipe_added_item">
                            <i className="far fa-plus-circle text_blue"></i>
                            <p>Add recipe</p>
                        </div>

                        <div className="recipe_added_item">
                            <i className="far fa-plus-circle text_blue"></i>
                            <p>Add recipe</p>
                        </div>

                        <div className="recipe_added_item">
                            <i className="far fa-plus-circle text_blue"></i>
                            <p>Add recipe</p>
                        </div>

                        <div className="recipe_added_item">
                            <i className="far fa-plus-circle text_blue"></i>
                            <p>Add recipe</p>
                        </div>
                    </div>

                    <form id="serving_form" action="">
                        <div id="serving_container" className="form_item custom_select">
                            <a className="select_serving custom_select_btn">Servings</a>
                            <ul id="choose_serving">
                                <li data-value="4">
                                    <p>4 - servings</p>
                                    <img src="./uploads/four.png" alt="" />
                                </li>
                                <li data-value="2">
                                    <p>2 - servings</p>
                                    <img src="./uploads/two.png" alt="" />
                                </li>
                                <li data-value="1">
                                    <p>1 - servings</p>
                                    <img src="./uploads/one.png" alt="" />
                                </li>
                            </ul>
                            <i className="fas fa-chevron-down text_blue"></i>
                        </div>

                        <a href="?page=delivery" className="btn btn_blue btn_submit_servings">
                            <p className="text_white">Next</p>
                            <i className="fal fa-long-arrow-right text_white" ></i>
                        </a>
                    </form>
                </div>
            </section>

        </main>
    )
}