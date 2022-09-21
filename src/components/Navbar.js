import React, { useState } from 'react';
import Logo from '../assets/1.png';
import { Link } from 'react-router-dom';
// import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

  return (
    <div className='navbar'>
        
      <div className="leftSide" id={openLinks ? "open" : "close"}> {/* ternary operators id={openLinks ? "open" : "close"} */}  
        <img src={Logo} alt="" className="logo" />
        <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">SignIN</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">SignIN</Link>
        {/* <Link to="/modal">Modal</Link> */}

        <button onClick={toggleNavbar}>
            {/* <ReorderIcon/> */}
        </button>
      </div>
    </div>
  );
}

export default Navbar
