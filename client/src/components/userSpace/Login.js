import { Intro } from "../base/Intro"
import { SectionHeading } from "../base/SectionHeading"

export const Login = () => {
    return (

        <main class="register_page">

            <Intro
                mobileIntroImage={'./uploads/delivery_hero.png'}
                desktopIntroImage={'./uploads/delivery_hero.png'}
                introHeading={"Login"}
            />

            <section className="register_section">

                <SectionHeading heading={"Login to your account!"} />

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
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                            />

                        </div>

                        <div className="form_item">

                            <input className="btn btn_blue btn_submit_register" type="submit" value="Submit" />

                        </div>

                        <p>
                            You dont have an account?
                            <a href="/">
                                <span>Register</span>
                            </a>
                        </p>
                    </form>
                </div>
            </section>

        </main>

    )
}