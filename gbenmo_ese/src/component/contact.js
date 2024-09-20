import '../styles/homepage.css';
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8uzuran",
        "template_y5c9ske",
        form.current,
        "mQ786bE_HqQUYLj1u"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    e.target.reset();
  };

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
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='form__container'>
                                <label for="name">Name</label>
                                <input type='text' placeholder='Enter Your Name' name="user_name"/>
                                <label for="email">Email</label>
                                <input type="email" placeholder='Enter Your Email' required name="user_email"/>
                                <label for="message">Message</label>
                                <textarea type="text" placeholder='Enter Your Message' className='message__input' required name="message"/>
                                <button className='btn submit__btn' type='submit'>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Contact;