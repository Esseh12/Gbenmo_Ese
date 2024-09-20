import Navbar from './navbar';
import Hero from './hero';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Project from './project';
import '../styles/homepage.css';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Project />
            <Contact />
            <Footer />
        </>
    );
}

export default Homepage;