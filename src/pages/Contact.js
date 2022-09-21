import React from 'react';
import ContactImage from '../assets/for_buy.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{backgroundImage:`url(${ContactImage})`}}></div>

      <div className="rightSide">
        <h1>Contact Us</h1>

        <form method="POST" id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="NAME"/>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="EMAIL"/>
          <label htmlFor="name">Subject</label>
          <input type="text" name="name" placeholder="SUBJECT"/>
         
          <label htmlFor="message">Message</label>
          <textarea 
            name="message" 
            id="" 
            rows="6" 
            placeholder="MESSAGE" 
            required>

          </textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="googlemap">       
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62997.314665386555!2d123.24978223618496!3d9.303807004026414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab6f392de360b7%3A0x2d6945df4760769!2sDumaguete%20City%2C%20Negros%20Oriental!5e0!3m2!1sen!2sph!4v1662435553847!5m2!1sen!2sph" width="100%" height="450" style="border:0;margin-left:auto; margin-right:auto;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe> */}
        <h1>Get in Touch!</h1>
        <p>
          We are happy to serve you at all times! Thanks to our " <b>Customer First</b>
          " service policy. Your success is our success.  We really appreciate if you can send us your details for our records to ensure we don't miss your query.  Your data will be handled  with utmost privacy according to Republic Act 10173, known as the Data Privacy Act of 2012, and will be used only for the purpose it is intended for.
        </p>
        <p>        
          For urgent needs, you may call our Sales directly to address your inquiry or you can chat with our customer representative
        </p>
      </div>


    </div>
   
  )
}

export default Contact