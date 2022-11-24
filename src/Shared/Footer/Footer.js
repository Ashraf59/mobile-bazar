import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner/banner.jpg'

const Footer = () => {
    return (
        <footer 

    style={{background: `url(${banner})`,
    backgroundSize: 'cover'

}}
    
        
        className="p-10 mt-28">
  <div className='footer flex justify-evenly'>
  <div>
    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Brands</span> 
    <Link className="link link-hover text-xl text-slate-100">Apple</Link>
    <Link className="link link-hover text-xl text-slate-100">Samsung</Link>
    <Link className="link link-hover text-xl text-slate-100">Xiaomi</Link>
  </div> 
  <div>
    <span className=" text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Available</span> 
    <Link className="link link-hover text-xl text-slate-100">Apple Mobile</Link>
    <Link className="link link-hover text-xl text-slate-100">Samsung Mobile</Link>
    <Link className="link link-hover text-xl text-slate-100">Xiaomi Mobile</Link>
  </div> 
  <div>
  <span className=" text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Contact</span> 
    <Link className="link link-hover text-xl text-slate-100">Mobile: 0171711111</Link>
    <Link className="link link-hover text-xl text-slate-100">mobile@bazar.com</Link>
    <Link className="link link-hover text-xl text-slate-100">Chattogram, Bangladesh</Link>
  </div>
  </div>
  <div className='text-center mt-16'>
    <p className='text-slate-100'>Copyright © 2022 - All right reserved by Mobile Bazar</p>
  </div>
</footer>
    );
};

export default Footer;