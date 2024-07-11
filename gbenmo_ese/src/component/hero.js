import '../styles/hero.css';
import SocialLinks from './socialLinks';
// import backgroundImg from '../images/backgroundImg.jpg';

const Hero = () => {
    

    return (
        <>
            <section>
                <SocialLinks />
                <div>
                    <div className="hero__img__container">
                        <div className="hero__content__container">
                            <h2>HEY, I'M ESE GBENMO</h2>
                            <p>A Results-Oriented web developer building and maintaining Websites and <br />Web Applications <span>that contribute to product success.</span></p>
                            <button className="btn">PROJECTS</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;