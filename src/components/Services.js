import React from 'react';
import '../App.css';
import { service1, service2, service3, service4, acca, aws, engro, hbl, icmap, js, kcci, meezan, ncc, pasha, pseb, secp, telenor, ubl } from '../assets/index';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list">
        <div className="service-item">
          <img src={service1} alt="Award" />
          <h3>Won 2021 Startup</h3>
          <p>of the year award, from PDA Pakistan Digital Awards</p>
        </div>
        <div className="service-item">
          <img src={service2} alt="Rating" />
          <h3>Rated 4.6 Stars</h3>
          <p>12,000+ reviews by satisfied customers</p>
        </div>
        <div className="service-item">
          <img src={service3} alt="IRIS" />
          <h3>Online E-file Provider</h3>
          <p>who has completed sandbox testing with FBR-IRIS</p>
        </div>
        <div className="service-item">
          <img src={service4} alt="Secure" />
          <h3>Safe & Secure</h3>
          <p>your information is private and secure on our site</p>
        </div>
      </div>


      
      <h2 className="partners-title">Our Partners & Collaborators</h2>
      <div className="partners-list">
        <img src={engro} alt="Engro" className="partner-logo" />
        <img src={icmap} alt="ICMAP" className="partner-logo"/>
        <img src={ubl} alt="UBL" className="partner-logo" />
        <img src={kcci} alt="KCCI" className="partner-logo" />
        <img src={pseb} alt="PSEB" className="partner-logo" />
        <img src={telenor} alt="Telenor" className="partner-logo" />
        <img src={js} alt="JS" className="partner-logo" />
        <img src={acca} alt="ACCA" className="partner-logo" />
        <img src={meezan} alt="Meezan Bank" className="partner-logo" />
        <img src={secp} alt="SECP" className="partner-logo" />
        <img src={pasha} alt="P@SHA" className="partner-logo" />
        <img src={ncc} alt="NCC" className="partner-logo" />
        <img src={hbl} alt="HBL" className="partner-logo" />
        <img src={aws} alt="AWS" className="partner-logo" />
      </div>
    </div>
  );
};

export default Services;
