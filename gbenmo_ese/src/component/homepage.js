import Navbar from './navbar';
import Hero from './hero';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import '../styles/homepage.css';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default Homepage;