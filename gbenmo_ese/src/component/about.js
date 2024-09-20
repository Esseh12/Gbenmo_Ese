import "../styles/homepage.css";
import { FaExclamation } from "react-icons/fa";

const About = () => {
    const handleNavigateToContact = () => { 
        window.location.href = "#contact";
    };


    return (
        <>
            <section id="about">
                <div className="about__section_container">
                    <div className="about__section__content1">
                        <h2>About Me</h2>
                        <div className="border"></div>
                        <p>Here you will find more information about me and my current skills mostly in terms<br/> of programming and technology</p>
                    </div>
                    <div className="about__section__content2">
                        <div>
                            <h2>Get to know me<FaExclamation className="exclamation"/></h2>
                            <p>I'm a Frontend Web Developer focused on building and managing <br/>the front-end of websites and web applications, contributing to<br /> overall product success. <span>Check out my work in the Projects section.<br/> I enjoy sharing web development knowledge to help the dev community.<br/>Connect with me on <a href="https://twitter.com/gbenmo_ese" target="blank">LinkedIn</a> and <a href="www.linkedin.com/in/gbenmoese" target="blank">Twitter</a> for useful content on<br/> web development and programming. </span>I can contribute, learn and grow. <br/>If you have a suitable opportunity, feel free to contact me.</p>
                            <button className="btn main__btn" onClick={handleNavigateToContact}>CONTACT</button>
                        </div>
                        <div>
                            <h2>My Skills</h2>
                            <div className="skill__mainContainer">
                                <div className="skill__container1">
                                    <div className="skill__container__item first">HTML</div>
                                    <div className="skill__container__item">Python</div>
                                    <div className="skill__container__item">JavaSript</div>
                                    <div className="skill__container__item">React</div>
                                </div>
                                <div className="skill__container3">
                                     <div className="skill__container__item first">SEO</div>
                                    <div className="skill__container__item">Responsive Design</div>
                                    <div className="skill__container__item">Version Control</div>
                                </div>
                                <div className="skill__container2">
                                    <div className="skill__container__item first">SASS</div>
                                    <div className="skill__container__item">CSS</div>
                                    <div className="skill__container__item">MySQL</div>
                                    <div className="skill__container__item">Api Integration</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;