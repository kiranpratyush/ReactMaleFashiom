import React from 'react';
import footerLogo from "../../Assets/footerlogo.png"
import "./style.css"
export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-about">
          <div className="footer-logo">
            <img src={footerLogo} alt=""/>
          </div>
          <p>The customer is at the heart of our business</p>
        </div>
        <div className="footer-shopping">
          <h6>SHOPPING</h6>
          <ul>
            <li key ="27">Contact Us</li>
            <li key ="50">payment Methods</li>
            <li key ="52">Delivery</li>
            <li key ="60">Return & Exchanges</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
