import React from 'react';

import Logo from './Logo.png'; 

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-20 flex justify-between items-center px-5 py-1.5 bg-white">
      <div className="logo">
        <img src={Logo} alt="Logo" className="w-[238.35px] h-[45px]" />
      </div>
      <div className="nav-buttons flex gap-5">
        <a href="/home" className="btn text-[#0C1528] bg-white px-4 py-2 rounded-md font-sans text-base font-normal">Home</a>
        <a href="/login" className="btn text-[#0C1528] bg-white px-4 py-2 rounded-md font-sans text-base font-normal">Login</a>
        <a href="/donate" className="btn donate-btn bg-[#223551] text-white px-4 py-2 rounded-md font-sans text-base font-normal">Donate</a>
      </div>
    </header>
  );
};

export default Header;