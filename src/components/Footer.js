import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    // <div className="footer">
    //   <div className="socialMedia">
    //     <p>Instagram | Twitter | Facebook | LinkedIn </p>
    //   </div>
    //   <p> &copy; 2022 LEMProperties.ph</p>
    // </div>
   <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-2">
        <h5>Explore</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Properties</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"></a>Sign Up</li>
        </ul>
      </div>
      <div className="col-2">
        <h5>Properties</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mindanao</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Luzon</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Visayas</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mindanao</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Metro Manila</a></li>
        </ul>
      </div>
      <div className="col-2">
        <h5>Follow Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>
      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>© 2022 LEM Properties.ph. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
  </footer>
</div>

      
  );
}

export default Footer;