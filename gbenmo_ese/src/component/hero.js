import SocialLinks from './socialLinks';
import "../styles/homepage.css";


const Hero = () => {

    const handleNavigateToProjects = () => {
        window.location.href = "#project";
    };

    return (
        <>
            <section>
                <SocialLinks />
                <div>
                    <div className="hero__img__container">
                        <div className="hero__content__container">
                            <h2><h2 class="wave">👋🏾</h2>, I'M ESE GBENMO</h2>
                            <p>A Results-Oriented web developer building and maintaining Websites and <br />Web Applications <span>that contribute to product success.</span></p>
                            <button className="btn" onClick={handleNavigateToProjects}>PROJECTS</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;