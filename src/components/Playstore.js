import React from 'react';
import '../App.css';
import { img1, googleplay, appstore } from '../assets/index';

const Playstore = () => {
  return (
    <div className="playstore-container bg-pink-100">
        <div className="left-container">
        <img
          src={img1}
          alt="App Preview"
          className="image-left"
        />
      </div>
      <div className="right-container">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
          Say hello to the app that made everything
          <br />
          even more convenient
        </h1>
        <p className="text-lg mt-4">
          <span className="text-red-500 font-bold text-2xl">1 </span>million app
          downloads by Pakistanis
        </p>
        <div className="flex mt-8 space-x-4">
          <img
            src={googleplay}
            alt="Get it on Google Play"
            className="w-32 h-auto cursor-pointer"
          />
          <img
            src={appstore}
            alt="Download on the App Store"
            className="w-32 h-auto cursor-pointer"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Playstore;
