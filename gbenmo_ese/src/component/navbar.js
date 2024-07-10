import '../styles/navbar.css';
import '../styles/homepage.css';
import navbarImg from '../images/navbarImage (2).png';

const Navbar = () => {

    return (
        <>
            <div>
                <nav className="navbar">
                    <div className="navbar__subcontainer">
                        <div className="navbar__img__container">
                            <img src={navbarImg} alt="navbar img" className="navbar__img" />
                        </div>
                        <h3>Ese Gbenmo</h3>
                    </div>
                    <div className="navbar__links__containers">
                        <ul className="navbar__links_subcontainers">
                            <li className="navbar__items"><a href="/">HOME</a></li>
                            <li className="navbar__items"><a href="#about">ABOUT</a></li>
                            <li className="navbar__items"><a href="#more">PROJECTS</a></li>
                            <li className="navbar__items last"><a href="#more">CONTACT</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="mobile__menu">
                     
                </div>
            </div>
        </>
    );
};

export default Navbar;