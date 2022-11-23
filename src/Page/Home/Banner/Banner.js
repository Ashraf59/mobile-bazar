import React from 'react';
import PrimaryButton from '../../../component/PrimaryButton';
import banner from '../../../assets/banner/banner.jpg'

const Banner = () => {
    return (
        <section className='h-[32rem]'
        style={{background: `url(${banner})`}}
        >
         <div className="hero">
   <div className="hero-content">
    
     <div className='w-2/3'>
       <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-slate-300 to-slate-50 inline-block mt-20 mb-10">Buy & Sale Used Mobile with Best Price</h1>
       
       <PrimaryButton>Buy Mobile</PrimaryButton>
     </div>
   </div>
 </div>
        </section>
    );
};

export default Banner;