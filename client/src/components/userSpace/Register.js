import { Intro } from "../base/Intro"
import { SectionHeading } from "../base/SectionHeading"

export const Register = () => {
    return (

        <main class="register_page">

            <Intro
                mobileIntroImage={'./uploads/choose_recipe_desktop.png'}
                desktopIntroImage={'./uploads/choose_recipe_desktop.png'}
                introHeading={"Register"}
            />

            <section className="register_section">

                <SectionHeading heading={"Register for better experience!"} />

                <div className="inner_section">
                    <form id="register_form">
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
            </section>

        </main>

    )
}