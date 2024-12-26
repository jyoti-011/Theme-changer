import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import butterfly from '../assets/butterfly.jpg'; // Adjust the path as per your folder structure

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={butterfly} alt="Beautiful Landscape" />
      </div>
      <div className="hero">
        <h1>React Multi-Theme Mode</h1>
        <p>
          Explore various themes by toggling the options in the dropdown. Enjoy the
          flexibility of light, dark, solarized, and retro themes!
        </p>
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default HeroSection;
