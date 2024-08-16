import React from 'react';
import { welcome } from '../assets';
import '../App.css';



const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-pink-100 p-8 mt-0 h-[380px]">
      {/* Text Section */}
      <div className='w-[95%] flex mx-auto mt-16'>

     
      <div className="text-center md:text-left w-[100%]">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600">
          Your Tax and Legal Partner, Befiler
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-black mt-2">
          Going beyond NTN and Income Tax Filing
        </h2>
        <p className="text-gray-700 mt-4 w-[70%]">
          Befiler now provides 360 solutions to all your Business needs, including Business Incorporation and Trademark Registration in Pakistan and USA.
        </p>
        <button className="mt-6 px-10 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
          Click to Start Tax-filing
        </button>
      </div>
      {/* Image Section */}
      <div className="flex-2 mt-0 md:mt-0 md:ml-6">
  <img src={welcome} alt="Befiler" className="welcome-image h-80 w-[500px]" />
</div>

      </div>
    </div>
  );
};

export default Header;
