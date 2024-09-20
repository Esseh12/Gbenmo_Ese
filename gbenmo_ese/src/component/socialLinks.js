import '../styles/homepage.css';
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoBook } from "react-icons/io5";


const SocialLinks = () => {
    return (
        <>
            <div className="social__media__container">
                <a href="www.linkedin.com/in/gbenmoese" target='blank' className="social__media__links"><BsLinkedin /></a>
                <a href="https://twitter.com/gbenmo_ese" target='blank' className="social__media__links"><FaTwitter /></a>
                <a href="https://github.com/Esseh12" target='blank' className="social__media__links"><FaGithub /></a>
                <a href="https://medium.com/@gbenmoese788" target='blank' className="social__media__links"><IoBook /></a>
            </div>
        </>
    );
}

export default SocialLinks;