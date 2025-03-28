import React from 'react';

const Footer = () => {
    return (
<footer className=" container mx-auto">
<div className=''>
  <h2 className='text-center font-bold text-3xl text-black'>Gadget Heaven</h2>
  <p className='text-center text-[#09080F99] mt-5'>Leading the way in cutting-edge technology and innovation.</p>
  </div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center  lg:py-10 py-5 '>
<nav className='flex flex-col  justify-center items-center '>
    <h6 className="footer-title text-center font-bold text-xl text-[#09080F]">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav className='flex flex-col  justify-center items-center'>
    <h6 className="footer-title font-bold text-xl  text-[#09080F]">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
    
  </nav>
  <nav className='flex flex-col  justify-center items-center'>
    <h6 className="footer-title font-bold text-xl  text-[#09080F]">Legal</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</div>
</footer>

    );
};

export default Footer;






