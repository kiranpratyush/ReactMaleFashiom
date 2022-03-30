import React from 'react';
import footerLogo from "../../Assets/footerlogo.png"
import "./style.css"
export function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-about">
          <div class="footer-logo">
            <img src={footerLogo} alt="" srcset="" />
          </div>
          <p>The customer is at the heart of our business</p>
        </div>
        <div class="footer-shopping">
          <h6>SHOPPING</h6>
          <ul>
            <li>Contact Us</li>
            <li>payment Methods</li>
            <li>Delivery</li>
            <li>Return & Exchanges</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
