import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Footer from './Footer';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // emailjs.init("YOUR_USER_ID");
    e.preventDefault();

    emailjs
      .sendForm('service_j6o44yi', 'template_ury401e', form.current, {
        publicKey: 'Kf9IOn5zdYi4D9gU9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <div className="container">
        <div className="row pro mt-2">
          <h3 className="my-4">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/22C3E6/contact-card.png"
              alt="contact-card"
            /> 
            Contact 
             <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png"
              alt="horizontal-line"
            />
          </h3>
          <div className="row">
            <div className="col d-flex justify-content-center my-3">
              <h4>"I am Always Open To Discuss"</h4>
            </div>
          </div>
          <div className="col mx-4">
            <form ref={form} onSubmit={sendEmail}>
              <div>
          
                <label htmlFor="user_name">Name :</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  className="form-control inputs"
                  placeholder="Enter your Name"
                />
              </div>
              <div>
                <label htmlFor="user_email">Email:</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  className="form-control inputs"
                  placeholder="Enter your Email"
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control inputs"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="row my-4">
                <div className="col d-flex justify-content-center">
                  <button type="submit" className="btn btn-info">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row pro mt-2">
          <div className="col d-flex justify-content-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact