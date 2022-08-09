import { Intro } from "../base/Intro";
import { SectionHeading } from "../base/SectionHeading";
import { RecipeCatalog } from "../recipesList/RecipeCatalog";

import {useUserContext} from "../../contexts/userContext";

export const Profile = () => {

    const {user} = useUserContext();

    return (
        <main className="create-recipe-page">
            <Intro
                mobileIntroImage={'./uploads/delivery_hero.png'}
                desktopIntroImage={'./uploads/delivery_hero.png'}
                introHeading={`Hello, ${user.username} !`}
            />

            <section className="choose_recipes_page">

                <div className="inner_section">
                    <div className="profile">
                        <div className="profile_image">
                            <img src={user.profileImageUrl} alt={user.username}></img>
                        </div>
                        <div className="profile-content">
                            <h3>User name: {user.username}</h3>
                            <h3>User email: {user.email}</h3>
                        </div>
                    </div>
                </div>

                <section className="choose_recipe_desktop">

                    <SectionHeading
                        heading={"Your recipes"}
                        heading_text={"It doesn’t matter what you’re in the mood for, you’ll find the perfect easy-to-cook meal that will leave you smiling."}
                    />

                    <div className="inner_section">
                        <RecipeCatalog userId={user._id} />
                    </div>

                </section>

            </section>
        </main>

    )
}