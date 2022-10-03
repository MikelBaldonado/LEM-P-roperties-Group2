
import React from 'react'
// import { Link } from 'react-router-dom';
import HouseHero from '../assets/HouseHero.jpg';
import DiningArea from '../assets/DiningArea.jpg';
import Mindanao from '../assets/Mindanao.jpg';
import Bathroom from '../assets/Bathroom.jpg';
import Room4 from '../assets/Room4.jpg';
import Room3 from '../assets/Room3.jpg';
import Room5 from '../assets/Room5.jpg';
import Room2 from '../assets/Room2.jpg';
import Condo from '../assets/Condo.jpg';
import Condo2 from '../assets/Condo2.jpg';
import Apartment from '../assets/Apartment.jpg';
import Apartment2 from '../assets/Apartment2.jpg';
import HouseEmoji from '../assets/HouseEmoji.png';
import House from '../assets/House.jpg';
import House2 from '../assets/House2.jpg';

import '../styles/Home.css';
function Home() {
  return (
 <main>
  <div id="Home">
    <div className="Hero-Section">
      <div className="Grid-Container-Hero">
        <div className="Hero-Subtitle">
          <h3>The best platform to Rent and Sell properties</h3> 
          <p>See properties that might pique your interests</p>
          <button>EXPLORE</button>
        </div>
        <div className='HouseHero'>
          <img src={HouseHero} alt="" className="HouseHero" />
        </div>
        <div className="Overlap" />
      </div>
    </div>
    {/*SEARCH-GRID*/}
    <div className="grid-container-search">
      <div className="Choose-location">
        <select className="Choose-location" id="inputGroupSelect01">
          <option selected>Choose Location</option>
          <option value={1}>Manila</option>
          <option value={2}>Luzon</option>
          <option value={3}>Visayas</option>
          <option value={4}>Mindanao</option>
        </select>
      </div>
      <div className="No-Bedrooms">
        <select className="No-Bedrooms" id="inputGroupSelect02">
          <option selected>Select No. of Bedrooms</option>
          <option value={1}>2 Bedrooms</option>
          <option value={2}>3 Bedrooms</option>
          <option value={3}>4-5 Bedrooms</option>
          <option value={4}>6-7 Bedrooms</option>
        </select>
      </div>
      <div className="slidecontainer">
        <input type="range" min={10} max={50} defaultValue={50} className="slider" id="myRange" />
        <p>Price Range: <span>K </span><span id="demo" /></p>
      </div>
      <div className="search-Btn">
        <button>Search</button>
      </div>
    </div>
    {/*GRID PLACES*/}
    <section id="Grid-places">
      <div className="places-title">
        <h3>Discover Awesome Properties</h3>
      </div>
      <div className="grid-container-places">
        <div className="grid-item-place">
          <img src={DiningArea} alt="Property Image" />
          <div className="text-Overlap"><h3>Luzon</h3></div>
        </div>
        <div className="grid-item-place">
          <img src={Mindanao} alt="Property Image" />
          <div className="text-Overlap"><h3>Visayas</h3></div>
        </div>
        <div className="grid-item-place">
          <img src={Bathroom} alt="Property Image" />
          <div className="text-Overlap"><h3>Mindanao</h3></div>
        </div>
      </div>
    </section>
    <section id="discover">
      <div className="discover-heading-container">
        <div className="discover-heading">
          <h2>All Over The Phillippines</h2>
        </div>
        <div className="grid-container-discover">
          <div className="grid-item-discover1">
            <div className="text-discover">
              <p>Come to a place where you can embark on a new journey while experiencing the rich and diverse culture of Dumaguete City</p>
              <button>See Details</button>
            </div>
            <div className="ImageDiscover"><img src={Room4}alt />
              <p>Location: 123 Riza St. Dumaguete City</p>
              <p>No. of Bedrooms: 2 Only</p>
              <p>Price: ₱ 10,000 Monthly </p>
            </div>
          </div>
          <div className="grid-item-discover1">
            <div className="text-discover">
              <p>Over looking Condo, where you can enjoy the beauty of Makati City and the beautiful stars at night. </p>
              <button>See Details</button>
            </div>
            <div className="ImageDiscover"><img src={Room3} alt />
              <p>Location: 103 Mabuhay St. Makati City</p>
              <p>No. of Bedrooms: 3 Only</p>
              <p>Price: ₱ 15,000 Monthly </p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </section>
    <section id="discover">
      <div className="grid-container-discover">
        <div className="grid-item-discover1">
          <div className="text-discover">
            <p>Lorem ipsum dolor sit amet cique accusantium expedita consequatur debitis doloremque.</p>
            <button>See Details</button>
          </div>
          <div className="ImageDiscover"><img src={Room5} alt />
            <p>Location: 123 Riza St. Magsaysay City</p>
            <p>No. of Bedrooms: 3 Only</p>
            <p>Price: ₱ 10,000 Monthly </p>
          </div>
        </div>
        <div className="grid-item-discover1">
          <div className="text-discover">
            <p>Discover serenity away from the hustle and bustle of the City. Come and stay at Moalboal Cebu City.</p>
            <button>See Details</button>
          </div>
          <div className="ImageDiscover"><img src={Room2} alt />
            <p>Location: 100 Moalboal Talisay Cebu City</p>
            <p>No. of Bedrooms: 5 Only</p>
            <p>Price: ₱ 18,000 Monthly </p>
          </div>
        </div>
      </div>
      {/*  */}
    </section>
    <section id="recent">
      <div className="recent-property-container">
        <div className="recent-image">
          <img src={HouseEmoji} alt="house emoji" className="recent-image" />
          <h3>Recent Listing</h3>
        </div>
        <div className="grid-container1">
          <div className="grid-item1">
            <img src={Condo} alt />
            <div className="overlay">
              <p>123BZ Rizal St. Makati City</p>
              <p>3 Storey House with 5 bedrooms</p>
              <p>15,000 to 20,000 per month</p>
              <button>Rent Now</button>
            </div>
          </div>
          <div className="grid-item2">
            <img src={Apartment2} alt />
            <div className="overlay">
              <p>123BZ Rizal St. Makati City</p>
              <p>3 Storey House with 5 bedrooms</p>
              <p>15,000 to 20,000 per month</p>
              <button>Rent Now</button>
            </div>
          </div>
          <div className="grid-item2">
            <img src={House} alt />
            <div className="overlay">
              <p>123BZ Rizal St. Makati City</p>
              <p>3 Storey House with 5 bedrooms</p>
              <p>15,000 to 20,000 per month</p>
              <button>Rent Now</button>
            </div>
          </div>
        </div> <br /> <br />
        <div className="grid-container2">
          <div className="grid-item1">
            <img src={Condo2} alt />
            <div className="overlay">
              <p>123BZ Rizal St. Makati City</p>
              <p>3 Storey House with 5 bedrooms</p>
              <p>15,000 to 20,000 per month</p>
              <button>Rent Now</button>
            </div>
          </div>
          <div className="grid-item2">
            <img src={Apartment}alt />
            <div className="overlay">
              <p>123BZ Rizal St. Makati City</p>
              <p>3 Storey House with 5 bedrooms</p>
              <p>15,000 to 20,000 per month</p>
              <button>Rent Now</button>
            </div>
          </div>
          <div className="grid-item2">
            <img src={House2} alt />
            <div className="overlay">
              <p>123BZ Rizal St. Makati City</p>
              <p>3 Storey House with 5 bedrooms</p>
              <p>15,000 to 20,000 per month</p>
              <button>Rent Now</button>
            </div>
          </div>
        </div> 
      </div>
    </section>
  </div></main>

  );
  
}

export default Home;


