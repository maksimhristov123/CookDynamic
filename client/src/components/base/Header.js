import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faArrowRightToBracket, faBowlFood, faConciergeBell, faInfoCircle, faTimes, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'


export const Header = () => {

    return (
        <header>
        <div className="inner_section">
            <a href="/" className="header_logo_container">
                <img className="logo_img header_logo_img header_logo_mobile" src="./uploads/header_logo.png" alt="logo" />
                <img className="logo_img header_logo_img header_logo_desktop" src="./uploads/header_logo_desktop.png" alt="logo" />
            </a>

            <div className="header_container">
                <a href="/" className="open_nav_btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <div className="nav_container">    
                        <div  className="dropdown-menu"> 
                            <ul>
                                <li>
                                    <a href="/" className="dropdown-item close_btn">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </a>
                                </li>
                                
                                {/* Guests */}
                                <li>
                                    <FontAwesomeIcon icon={faConciergeBell} />
                                    <a className="dropdown-item" href="/">Our meal kits</a>
                                </li>    

                                <li>
                                    <FontAwesomeIcon icon={faBowlFood} />
                                    <a className="dropdown-item" href="/">Create Recipe</a>
                                </li>                                     
                            </ul>
                        </div>
                </div>
            </div>

            <div className="header_btn_container">

                {/* Guests */}
                <a href="/" className="btn btn_login">
                    <p>Log in</p>
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                </a>

                <a href="/" className="btn btn_login">
                    <p>Register</p>
                    <FontAwesomeIcon icon={faUserPlus} />

                </a>

                {/* User */}
                {/* <a href="/" className="btn btn_login">
                    <p>Profile</p>
                    <FontAwesomeIcon icon={faUser} />
                </a>

                <a href="/" className="btn btn_login">
                    <p>Log Out</p>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />

                </a> */}

                
            </div>
        </div>
    </header>
    )
}