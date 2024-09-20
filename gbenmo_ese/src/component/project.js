import '../styles/project.css';
import projectOne from '../images/projectOne.png';
import projectTwo from '../images/projectTwo.png';
import projectThree from '../images/projectThree.png';


const Project = () => {

    return (
        <>
            <section id="project">
                <div className="project__section__container">
                    <div className="project__section__container1">
                        <h2>Projects</h2>
                        <div className="border"></div>
                        <p>Here you will find some of the personal projects that i have created <br /> <span>with each project containing its own case study</span></p>
                    </div>
                    <div className="project__section__container2">
                        <div className="project__container1">
                            <img src={projectOne} alt="project1" />
                            <div>
                                <h3>
                                    Portfolio Website
                                </h3>
                                <p>Built using HTML, CSS, React.js, and responsive web design. <br /> It highlights my ability to create visually appealing <br /> and user-friendly interfaces that adapt seamlessly across devices, <br /> making it a valuable asset for any frontend development team.</p>
                                <button className="btn main__btn" onClick={() => {window.open('https://gbenmo-ese.vercel.app/', '_blank')}}>VIEW PROJECT</button>
                            </div>
                        </div>

                        <div className="project__container1">
                            <img src={projectTwo} alt="project1" />
                            <div>
                                <h3>
                                    Metafora
                                </h3>
                                <p>Metafora is an innovative aggregate transport platform that brings <br /> multiple transport companies together, allowing users compare <br />  prices easily  and book seamless trips all in one place.<br /> Built using HTML, CSS, React.js, and responsive web design. </p>
                                <button className="btn main__btn" onClick={() => {window.open('https://metafora-eta.vercel.app/', '_blank')}}>VIEW PROJECT</button>
                            </div>
                        </div>

                        <div className="project__container1">
                            <img src={projectThree} alt="project1" />
                            <div>
                                <h3>
                                    Backroad Project
                                </h3>
                                <p>Metafora is an innovative aggregate transport platform that brings <br /> multiple transport companies together, allowing users compare <br />  prices easily  and book seamless trips all in one place.<br /> Built using HTML, CSS, React.js, and responsive web design. </p>
                                <button className="btn main__btn">VIEW PROJECT</button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </>
    );

}

export default Project;