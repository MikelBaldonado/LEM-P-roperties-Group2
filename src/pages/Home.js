import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/properties_banner.jpg'
import '../styles/Home.css'
function Home() {
  return (
    <div className="home" style={{backgroundImage:`url(${BannerImage})`}}> 
      <div className="headerContainer" >

        {/* <div className="infoContainer">
          Search: <input type="text" placeholder="Search..."/>
        </div> */}

        <h1>LEM Properties</h1>
        <p>Buy, Sell and Rent</p>
        <Link to='/properties'>
          <button>RESERVE NOW!!!</button>
        </Link>
      </div>
    </div>
  );
  
}

export default Home
