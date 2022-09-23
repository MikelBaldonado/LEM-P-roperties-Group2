import React from 'react'
import Logo from '../assets/lem-logo.png';
import '../styles/OwnersAccount.css';
const OwnersAccount = () => {
  return (
    
<div>
  <header>
    <nav className="Navbar">
      <img src={Logo} alt className="Logo" />
    </nav>
  </header>
  <div className="sidebar">
    <a href="#home">
      <span className="material-symbols-sharp">
        home
      </span>
      <h3>Home</h3>
    </a>
    <a href="#">
      <span className="material-symbols-sharp">
        space_dashboard
      </span>
      <h3>Dashboard</h3>    
    </a>
    <a href="#">
      <span className="material-symbols-sharp">
        person
      </span>
      <h3>Acount</h3>
    </a><a href="#">
      <span className="material-symbols-sharp">
        apartment
      </span>
      <h3>Properties</h3>
    </a>
    <a href="#">
      <span className="material-symbols-sharp">
        add
      </span>
      <h3>Add Property</h3>
    </a>
    <a href>
      <span className="material-symbols-sharp">
        logout
      </span>
      <h3>Logout</h3>
    </a>
  </div>
</div>

  );
}

export default OwnersAccount;