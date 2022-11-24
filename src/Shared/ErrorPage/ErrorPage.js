import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error/404.png'
import PrimaryButton from '../../component/PrimaryButton';
import banner from '../../assets/banner/banner.jpg'


const ErrorPage = () => {
    return (
       <section className='h-full' style={{background: `url(${banner})`}}>
       <div className="flex justify-center items-center mb-10">
       <img style={{"height" : "500px", "width" : "500px"}} src={error} alt="" />

       </div>
      <div className='pb-20'>
      <PrimaryButton><Link to='/'>Back to Home</Link></PrimaryButton>
      </div>

       </section>
    );
};

export default ErrorPage;