import React from 'react';
import './style.css';
import hero from '../../Assets/heo.jpg';
export function HeroContainer() {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero-text">
        <div className="hero-text">
          <h6>Collections</h6>
          <h2>Fall-Winter Collections 2030</h2>
          <p>
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality
          </p>
          <a className="btn btn-primary" href="https://www.google.com">
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
}
