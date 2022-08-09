

import { Intro } from '../base/Intro';
import { SectionHeading } from '../base/SectionHeading';

import { RecipeCatalog } from "./RecipeCatalog";


export const RecipeList = () => {

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
                    <RecipeCatalog />
                </div>

            </section>
            

        </main>
    )
}