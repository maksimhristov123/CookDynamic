import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Intro } from "../base/Intro";
import { SectionHeading } from "../base/SectionHeading";

import {UserContext} from '../../contexts/userContext'
import * as userServices from '../../services/userServices';

export const Register = () => {

    const { userLogin } = useContext(UserContext);
    const navigateTo = useNavigate();

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
        profileImageUrl: ""
    })

    const chageHendler = (e) => {
        setValues(s => ({
            ...s,
            [e.target.name]: e.target.value
        }))
    }

    function submitHendler(e) {
        e.preventDefault();

        const { username, email, password, repeatPassword, profileImageUrl } = values;

        if (password !== repeatPassword) {
            console.log('Password not match!');
        }

        const insertedData = { username, email, password, profileImageUrl }

        return userServices.register(insertedData)
            .then(data => {
                userLogin(data)
                navigateTo('/')
            });
    }

    return (

        <main className="register_page">

            <Intro
                mobileIntroImage={'./uploads/choose_recipe_desktop.png'}
                desktopIntroImage={'./uploads/choose_recipe_desktop.png'}
                introHeading={"Register"}
            />

            <section className="register_section">

                <SectionHeading heading={"Register for better experience!"} />

                <div className="inner_section">
                    <form id="register_form" onSubmit={submitHendler}>
                        <div className="form_item">

                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={values.username}
                                onChange={chageHendler}
                                placeholder="Name"
                                required
                            />

                        </div>

                        <div className="form_item">

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={chageHendler}
                                placeholder="Email"
                                required
                            />

                        </div>

                        <div className="form_item">

                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={chageHendler}
                                placeholder="Password"
                                required
                            />

                        </div>

                        <div className="form_item">

                            <input
                                type="password"
                                id="repeatPassword"
                                name="repeatPassword"
                                value={values.repeatPassword}
                                onChange={chageHendler}
                                placeholder="Repeat Password"
                                required
                            />

                        </div>

                        <div className="form_item">

                            <input
                                type="text"
                                id="profileImageUrl"
                                name="profileImageUrl"
                                value={values.profileImageUrl}
                                onChange={chageHendler}
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