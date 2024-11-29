import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const Hero = () => {
  return (
    <div 
      id="hero" 
      className="hero-section" 
      style={{
        backgroundImage: "url(/banner_bg.png)",
        backgroundSize: "35%",
        backgroundPosition: "left 100px top 100px",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Navbar />
      <div className="hero-content">
        <div className="hidden-lg"></div>
        <div className="hero-text">
          <div className="">
            <Image 
              src="/profile.jpg"
              alt="Profile"
              width={400}
              height={400}
            />
          </div>
          <div className="text-container">
            <p className="animated-text" data-aos="zoom-in-up">Im</p>
            <p className="animated-text" data-aos="zoom-in-up">Saima</p>
            <p className="animated-text" data-aos="zoom-in-up">Majid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
