import Navbar from './navbar';
import Hero from './hero';
import About from './about';
import '../styles/homepage.css';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
        </>
    );
}

export default Homepage;