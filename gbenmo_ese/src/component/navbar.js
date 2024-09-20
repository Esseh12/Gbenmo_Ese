import '../styles/homepage.css';
import { useRef,  useEffect } from 'react';

const Navbar = () => {
    const hamburgerRef = useRef(null);
    const navLinksRef = useRef(null);

    const handleOpen = () => {
       if (hamburgerRef.current) {
            hamburgerRef.current.classList.toggle('active');
        }
        if (navLinksRef.current) {
            navLinksRef.current.classList.toggle('active');
        }
    }

    useEffect(() => {
        const navLinks = document.querySelectorAll('.navbar__items a');
        const closeMenu = () => {
            if (hamburgerRef.current) {
                hamburgerRef.current.classList.remove('active');
            }
            if (navLinksRef.current) {
                navLinksRef.current.classList.remove('active');
            }
        };
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', closeMenu);
            });
        };

    }, []);

    return (
        <>
            <div>
                <nav className="navbar">
                    <div className="navbar__subcontainer">
                        <h3>Ese Gbenmo</h3>
                    </div>
                    <div className="navbar__links__containers">
                        <ul className="navbar__links_subcontainers"  ref={navLinksRef}>
                            <li className="navbar__items"><a href="/">HOME</a></li>
                            <li className="navbar__items"><a href="#about">ABOUT</a></li>
                            <li className="navbar__items"><a href="#project">PROJECTS</a></li>
                            <li className="navbar__items last"><a href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                    <div class="hamburger__menu" ref={hamburgerRef} onClick={handleOpen}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;