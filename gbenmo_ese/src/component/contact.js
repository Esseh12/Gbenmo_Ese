import '../styles/contact.css';

const Contact = () => {

    return (
        <>
            <section id="contact">
                <div className="contact__section__container">
                    <div className="contact__section__container1">
                        <h2>Contact</h2>
                        <div className="border"></div>
                        <p>Feel free to Contact me by submitting the form below and i will get back to you<br />as soon as possible</p>
                    </div>
                    <div className="contact__section__container2">
                        <form>
                            <div className='form__container'>
                                <label for="name">Name</label>
                                <input type='text' placeholder='Enter Your Name' />
                                <label for="email">Email</label>
                                <input type="email" placeholder='Enter Your Email' required />
                                <label for="message">Message</label>
                                <input type="text" placeholder='Enter Your Message' className='message__input' required />
                                <button className='btn submit__btn'>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Contact;