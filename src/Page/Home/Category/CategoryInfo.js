import React, { useState } from 'react';
import PrimaryButton from '../../../component/PrimaryButton';

const CategoryInfo = ({category}) => {
    const [booking, setBooking] = useState(null)
    const [data, setData] = useState({})
    const {image, name, location, model, use, oirginal_price, resale_price, seller} = category
    return (
        <section>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
             <img src={image} alt="Mobile" className="rounded-xl h-[300px] w-[300px]" />
             </figure>
             <div className="card-body items-start text-left ">
             <h2 className="card-title">Brand: {name}</h2>
             <div className='flex justify-between'>
             <div>
             <p>Used: {use} /Yrs</p>
             <p>Original Price: {oirginal_price}</p>
             <p>Resale Price: {resale_price}</p>
             </div>

             <div>
             
             <p>Seller Name: {seller}</p>
             <p>Location: {location}</p>
             </div>
             </div>

             <div className="card-actions justify-center">
              <PrimaryButton>Book Now</PrimaryButton>
    </div>
  </div>
</div>
            </div>
        </section>
    );
};

export default CategoryInfo;