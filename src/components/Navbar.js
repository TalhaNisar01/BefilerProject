import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import { Logo, investomate, AsaanHisab, usaflag, calculator, ntn, atl, faq, contact } from '../assets'; // Import your icon images
import '../App.css'

import TaxToolsSection from './TaxToolsSection';

const Navbar = () => {
  const [isTaxToolsOpen, setIsTaxToolsOpen] = useState(false);

  const toggleTaxTools = () => {
    setIsTaxToolsOpen((prev) => !prev);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="nav-top">
          <div className="navbar-top">
            <Link to="https://www.investomate.com/" className="navbar-link" target="_blank" rel="noopener noreferrer">
              <img src={investomate} alt="Investomate" />
              <span className="font-extrabold text-xl">Investomate</span>
            </Link>
            <Link to="https://www.asaanhisab.com/" className="navbar-link" target="_blank" rel="noopener noreferrer">
              <img src={AsaanHisab} alt="AsaanHisab" />
              <span className="font-extrabold">AsaanHisab</span>
            </Link>
          </div>
        </div>

        <div className="navbar-bottom">
          <Link to="/">
            <img src={Logo} alt="Befiler" className="befiler-logo" />
          </Link>
          <nav className="navbar-menu">
            
              <Link to="#">TAX TOOLS</Link>
            
            <Link to="#">RESOURCES</Link>
            <Link to="#">BUSINESS SERVICES</Link>
            <Link to="#" className="usa-services">
              <img src={usaflag} alt="USA Flag" className="usa-flag" />
              USA SERVICES
            </Link>
          </nav>
          <div className="navbar-actions">
            <button className="sign-up">Sign up</button>
            <button className="sign-in">
              <FaLock className="lock-icon" />
              Sign in
            </button>
          </div>
        </div>
      </div>
      {/* <TaxToolsSection /> */}
    </nav>
  );
};

export default Navbar;
