import React from 'react';
import '../App.css';

const FooterComponent = () => {
  return (
    <footer className="footer">
       <div className='headings'>
        

        </div>
      <div className="footer-content">
       


        <div className='Upper-section'>

        
        <div className="footer-section stay-connected">
        <h2 className="footer-title">Stay Connected</h2>
        
          <div className="social-icons">
            <a href="#facebook" className="social-icon facebook"></a>
            <a href="#youtube" className="social-icon youtube"></a>
            <a href="#twitter" className="social-icon twitter"></a>
            <a href="#linkedin" className="social-icon linkedin"></a>
          </div>
        </div>



        <div className="footer-section need-support  mr-44">
        <h2 className="footer-title">Need Support?</h2>
          <div className="contact-info">
            <div className="contact-item">
            <div className='phonenumber'>
              <div className="contact-icon phone "></div>
             

              <div className='phonenumbers'>
              <span className='font-bold'>+92 (0) 21 38282222</span>
              <span className='font-bold'>+92 331 1111070, +92 340 2021111</span>
              </div>
              <div className="contact-icon location ml-16 "></div>
              <span className='text-xl locate mt-1'>Locate us</span>
            </div>
              </div>

              
            </div>
           
          </div>
        </div>
              
       
      </div>



      <div className="footer-section about pt-6">
          <p>
            Befiler is a joint initiative of leading tax professionals and technology enthusiasts. The initiative aims to simplify the tax return filing process for individuals, especially the salaried class, and promote the culture of documentation. It aims to enhance the number of tax filers in the interest of enhancing the tax base of the country, at the same time, reduce huge costs to ordinary citizens who have to suffer the cost of being non-filers.
          </p>
        </div> 
     
    </footer>
  );
};

export default FooterComponent;
