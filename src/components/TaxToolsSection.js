import React, { useState } from 'react';
import { calculator, ntn, atl, faq, contact, ntnactive, faqactive, contactactive, calculatoractive, atlactive } from '../assets'; // Import your icon images
import '../App.css';
import { Link } from 'react-router-dom';

const TaxToolsSection = () => {
  // States to track which tool is hovered
  const [hoveredTool, setHoveredTool] = useState(null);

  // Function to handle mouse enter and leave events
  const handleMouseEnter = (tool) => {
    setHoveredTool(tool);
  };

  const handleMouseLeave = () => {
    setHoveredTool(null);
  };

  return (
    <div className="tax-tools-section z-20">
      <Link
        className="tool-item"
        onMouseEnter={() => handleMouseEnter('calculator')}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={hoveredTool === 'calculator' ? calculatoractive : calculator}
          alt="Calculator"
          className="tool-icon"
        />
        <span className="tool-text">Calculator</span>
      </Link>
      <Link
        className="tool-item"
        onMouseEnter={() => handleMouseEnter('ntn')}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={hoveredTool === 'ntn' ? ntnactive : ntn}
          alt="NTN Status"
          className="tool-icon"
        />
        <span className="tool-text">NTN Status</span>
      </Link>
      <Link
        className="tool-item"
        onMouseEnter={() => handleMouseEnter('atl')}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={hoveredTool === 'atl' ? atlactive : atl}
          alt="ATL Status"
          className="tool-icon"
        />
        <span className="tool-text">ATL Status</span>
      </Link>
      <Link
        className="tool-item"
        onMouseEnter={() => handleMouseEnter('faq')}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={hoveredTool === 'faq' ? faqactive : faq}
          alt="FAQ"
          className="tool-icon"
        />
        <span className="tool-text">FAQ</span>
      </Link>
      <Link
        className="tool-item"
        onMouseEnter={() => handleMouseEnter('contact')}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={hoveredTool === 'contact' ? contactactive : contact}
          alt="Contact us"
          className="tool-icon"
        />
        <span className="tool-text">Contact us</span>
      </Link>
    </div>
  );
};

export default TaxToolsSection;
