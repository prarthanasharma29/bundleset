import React from 'react';

const Header = () => {
  return (
    <div className="w-full">
      {/* Status Bar */}
      <div className="w-full h-6 px-6 py-1.5">
        <img
          className="w-full h-6 object-contain"
          alt="Status"
          src="https://c.animaapp.com/mdx14mntBIEjrg/img/group-53.png"
        />
      </div>
      
      {/* Discount Banner */}
      <div className="w-full bg-[#ed1c24] py-1">
        <p className="text-white text-xs text-center font-normal">
          FIRSTIO: 10% DISCOUNT ON ALL PRODUCT FOR FIRST TIME USER
        </p>
      </div>
      
      {/* Navigation Bar */}
      <div className="w-full h-11 bg-white">
        <img
          className="w-full h-full object-contain"
          alt="Navigation"
          src="https://c.animaapp.com/mdx14mntBIEjrg/img/frame-101332.svg"
        />
      </div>
    </div>
  );
};

export default Header;
