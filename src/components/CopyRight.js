import React from 'react'
import { comodo, pci } from '../assets/index';



const CopyRight = () => {
  return (
    <div className="footer-bottom">
    <p className=''>© 2018 - 2024 Befiler (Pvt) Limited, Powered by Arittek - <a href="#terms">Terms of Use</a> | <a href="#privacy">Privacy Statement</a></p>
    <div className="certifications">
      <img src={pci} alt="PCI Certified" />
      <img src={comodo} alt="Comodo Secure" />
    </div>
  </div> 
  )
}

export default CopyRight;
