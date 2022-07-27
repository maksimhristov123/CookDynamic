import { Intro } from "../base/Intro";
import { SectionHeading } from "../base/SectionHeading";

export const RecipeDetails = () => {
    return (
        <main className="create-recipe-page">
            <Intro
                mobileIntroImage={'./uploads/choose_recipe_desktop.png'}
                desktopIntroImage={'./uploads/choose_recipe_desktop.png'}
                introHeading={"Current recipe"}
            />

            <section className="details-recipe-section">
                <div className="inner_section">

                    <SectionHeading
                        heading={"Details YOUR recipe!"}
                        heading_text={"It doesn’t matter what you’re in the mood for, you’ll find the perfect easy-to-cook meal that will leave you smiling."}
                    />

                </div>
                <div className="inner_section">

                    <div>
                        <a href="/" className="card">

                            <div className="card_img_container">
                                <div className="recipe_time">
                                    <img src="./uploads/pan.png" alt="" />
                                    <p className="time"><span>20</span> mins</p>
                                </div>

                                <div className="recipe_category">
                                    <p className="category">vegan</p>
                                </div>

                                <img src="./uploads/top.png" alt="" />
                            </div>

                            <div className="card_content_container">
                                <h3 className="card_title">Korean rolls kimpab with soy sauce - Asian food</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <div className='btn_container'>

                                    <a href='/' className="add_to_card text_blue">
                                        Edit
                                    </a>

                                    <a href='/' className="add_to_card text_blue">
                                        Delete
                                    </a>

                                    <a href='/' className="add_to_card text_blue">
                                        Add Recipe
                                    </a>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </section>
        </main>
    )
}