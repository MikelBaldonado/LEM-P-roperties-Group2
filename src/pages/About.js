import React from 'react';
import AboutImage from '../assets/torresur_hero2.jpg';
import '../styles/About.css';

function About() {
  return (

    <>

      <div className="about">
        <div className="aboutTop" style={{backgroundImage:`url(${AboutImage})`}}></div>
        <div className="aboutBottom">
          <h1>About Our Company</h1>
          <p>
            LEM Properties was founded in late 2022 by a triumvirate, consisting of Michael from Luzon, Enerio from Visayas and Lomejane from Mindanao, who have the passion in helping customers in the property sector regardless if they are a seller or a buyer. As a seller, you don't have to worry about your property not getting sold as our brokers are actively pursuing to find propective buyers. As a buyer, rest assured you don't get trapped into a bad deal as we provide legal services, if you need one, during the negotiation process until the deal is consummated.
          </p>
        </div>
      </div>

      <div className="OurVision">
        <h1>Our Vision</h1>
        <p>
          To be one of the most favored property management company in the Philippine.
        </p>
      </div>

      <div className="OurMission">
        <h1>Our Mission</h1>
        <p>
          To be one of the most favored property management company in the Philippine.
        </p>
      </div>

    </>
   
  )
}

export default About