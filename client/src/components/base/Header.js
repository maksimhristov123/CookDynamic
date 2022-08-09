import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowRightFromBracket,
    faArrowRightToBracket,
    faBowlFood,
    faConciergeBell,
    faInfoCircle,
    faTimes,
    faUser,
    faUserPlus
} from '@fortawesome/free-solid-svg-icons';

import { useUserContext } from '../../contexts/userContext';

export const Header = () => {

    const { user } = useUserContext();

    return (
        <header>
            <div className="inner_section">
                <Link to="/" className="header_logo_container">
                    <img className="logo_img header_logo_img header_logo_mobile" src="./uploads/header_logo.png" alt="logo" />
                    <img className="logo_img header_logo_img header_logo_desktop" src="./uploads/header_logo_desktop.png" alt="logo" />
                </Link>

                <div className="header_container">
                    <button className="open_nav_btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className="nav_container">
                        <div className="dropdown-menu">
                            <ul>
                                <li>
                                    <Link to="/" className="dropdown-item close_btn">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </Link>
                                </li>

                                {/* Guests */}
                                <li>
                                    <FontAwesomeIcon icon={faConciergeBell} />
                                    <Link className="dropdown-item" to="/">Our meal kits</Link>
                                </li>

                                {user.email
                                    ? <li>
                                        <FontAwesomeIcon icon={faBowlFood} />
                                        <Link className="dropdown-item" to="/create">Create Recipe</Link>
                                      </li>
                                    : ""
                                }

                            </ul>
                        </div>
                    </div>
                </div>

                {user.email
                    ? <div className="header_btn_container">
                        <Link to="/profile" className="btn btn_login">
                            <p>Profile</p>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>

                        <Link to="/logout" className="btn btn_login">
                            <p>Log Out</p>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />

                        </Link>
                    </div>
                    : <div className="header_btn_container">
                        <Link to="/login" className="btn btn_login">
                            <p>Log in</p>
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                        </Link>

                        <Link to="/register" className="btn btn_login">
                            <p>Register</p>
                            <FontAwesomeIcon icon={faUserPlus} />

                        </Link>
                    </div>
                }


            </div>
        </header>
    )
}