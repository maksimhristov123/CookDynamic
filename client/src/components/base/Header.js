
export const Header = () => {

    return (
        <header>
            <div className="wrapper">
                <a href="/" className="logo-container">
                    <img className="logo-img logo--desktop" src="./uploads/header_logo_desktop.png" alt=" logo" />
                </a>

                <div className="header_container">
                    <a href="/" className="btn-nav--toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>

                    <div className="nav-container">
                        <div className="dropdown-menu">
                            <ul>
                                <li>
                                    <i className="fas fa-info-circle"></i>
                                    <a className="dropdown-item" href="/">Catalog</a>
                                </li>
                                <li>
                                    <i className="fas fa-concierge-bell"></i>
                                    <a className="dropdown-item" href="/">Our meal kits</a>
                                </li>
                                <li>
                                    <i className="fas fa-tags"></i>
                                    <a className="dropdown-item" href="/">Pricing</a>
                                </li>
                                <li>
                                    <i className="fas fa-gift"></i>
                                    <a className="dropdown-item" href="/">Gifts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="btn-container">
                    <a href="/login" className="btn btn-login">
                        <p>Log in</p>
                        <i className="fas fa-user"></i>
                    </a>
                    <a href="/login" className="btn btn-register">
                        <p>Register</p>
                        <i className="fas fa-user"></i>
                    </a>

                    <a href="/login" className="btn btn-logout">
                        <p>Log out</p>
                        <i className="fas fa-user"></i>
                    </a>
                </div>
                
            </div>
        </header>

    )
}