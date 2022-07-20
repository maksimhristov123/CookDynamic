
export const Header = () => {

    return (
        <header>
            <div className="inner_section">
                <a href="/" className="header_logo_container">
                    <img className="logo_img header_logo_img header_logo_mobile" src="./uploads/header_logo.png" alt="logo" />
                    <img className="logo_img header_logo_img header_logo_desktop" src="./uploads/header_logo_desktop.png" alt=" logo" />
                </a>

                <div className="header_container">
                    <a className="open_nav_btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>

                    <div className="nav_container">
                        <div className="dropdown-menu">
                            <ul>
                                <li>
                                    <a className="dropdown-item close_btn">
                                        <i className="fas fa-times"></i>
                                    </a>
                                </li>
                                <li>
                                    <i className="fas fa-info-circle"></i>
                                    <a className="dropdown-item" href="?page=">About the service</a>
                                </li>
                                <li>
                                    <i className="fas fa-concierge-bell"></i>
                                    <a className="dropdown-item" href="?page=choose_box">Our meal kits</a>
                                </li>
                                <li>
                                    <i className="fas fa-tags"></i>
                                    <a className="dropdown-item" href="?page=">Pricing</a>
                                </li>
                                <li>
                                    <i className="fas fa-gift"></i>
                                    <a className="dropdown-item" href="?page=">Gifts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="header_btn_container">
                    <a href="/login" className="btn btn_login">
                        <p>Log in</p>
                        <i className="fas fa-user"></i>
                    </a>
                </div>
                
            </div>
        </header>

    )
}