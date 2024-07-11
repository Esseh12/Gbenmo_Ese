import '../styles/footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaDev } from "react-icons/fa";


const Footer = () => {
    

    return (
        <>
            <footer>
                <div className="footer__main__container">
                    <div className='footer_subcontainer1'> 
                        <div>
                            <h2>Ese Gbenmo</h2>
                            <p>A Frontend focused Web Developer building the Frontend of Websites and<br />Web Applications that leads to the success of the overall product</p>
                        </div>
                        <div>
                            <h2>SOCIAL</h2>
                            <div className='footer__icons'>
                                <a href="www.linkedin.com/in/gbenmoese"><FaLinkedin /></a>
                                <a href="https://github.com/Esseh12"><FaGithub className='footer__icon'/></a>
                                <a href="https://twitter.com/gbenmo_ese"><FaTwitterSquare className='footer__icon'/></a>
                                <a href="https://dev.to/gbenmo_ese"><FaDev className='footer__icon'/></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__border"></div>
                    <div className="footer__subcontainer2">
                        <p>&copy; Copyright 2024. Made by Ese Gbenmo</p>
                    </div>
                </div>
            </footer>
        </>  
    );
};
export default Footer;