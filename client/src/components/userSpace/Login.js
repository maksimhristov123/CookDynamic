import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Intro } from "../base/Intro";
import { SectionHeading } from "../base/SectionHeading";

import { UserContext } from '../../contexts/userContext'
import * as userServices from "../../services/userServices";

export const Login = () => {

    const { userLogin } = useContext(UserContext);
    const navigateTo = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password
        } = Object.fromEntries(new FormData(e.target));

        return userServices.login(email, password)
            .then(data => {
                userLogin(data)
                navigateTo('/')
            })
            .catch(error => {
                console.log(error)
            });

    }

    return (

        <main className="register_page">

            <Intro
                mobileIntroImage={'./uploads/delivery_hero.png'}
                desktopIntroImage={'./uploads/delivery_hero.png'}
                introHeading={"Login"}
            />

            <section className="register_section">

                <SectionHeading heading={"Login to your account!"} />

                <div className="inner_section">

                    <form id="register_form" onSubmit={onSubmit}>
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
                                id="loginPassword"
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