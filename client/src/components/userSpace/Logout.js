import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/userContext";

import * as userServices from '../../services/userServices';


export const Logout = () => {
    const navigateTo = useNavigate();
    const {userLogout} = useContext(UserContext);

    useEffect(() => {
        userServices.logout()
            .then(() => {
                userLogout();
                navigateTo('/');
            })
            .catch(() => {
                navigateTo('/')
            })
    })

    return null;
}