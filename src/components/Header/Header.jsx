import "./Header.css";
import logo from "/logo_DM.png";

import { Link } from "react-router-dom";

function Header() {
    return(
        <nav className="navbar navbar-expand-lg pf-header">
            <div className="container">
                <Link className="navbar-brand" href="/"><img className="logo" src={logo} alt="Logo Portafolio" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sobre-mi' className="nav-link">Sobre mi</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;