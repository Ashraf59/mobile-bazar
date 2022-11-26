import React, { useEffect, useState } from 'react';
import BookingModal from '../Category/BookingModal/BookingModal';

const CategoryInfo = ({category}) => {
    const [booking, setBooking] = useState(null);
    const [data, setData] = useState(null);
    console.log(category);

    const {_id, model, name, resale_price, original_price, use, location, seller, image} = category;

    useEffect(() => {
        fetch(`http://localhost:5000/categories/${_id}`)
        .then( res => res.json())
        .then(data => setData(data))
    }, [_id])

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow shadow-slate-500 mt-20 mb-10">
            <figure className='p-8 mt-4'><img src={image} alt="Mobile" className='h-[350px] w-[300px]'  /></figure>
                <div className="card-body text-left">
                    <div>
                        <h2 className="card-title text-gray-700">{model}</h2>
                        <h4 className="card-title text-[18px] mt-3">Location: <span className='text-gray-500'>{location}</span></h4>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold'>Original Price: <span className='text-black text-[18px] font-bold'>${original_price}</span></p>
                        <p className='font-semibold'>Resale Price: <span className='text-black text-[18px] font-bold'>${resale_price}</span></p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>Seller: {seller}</p>
                        <p className='font-semibold'>Used: {use} years</p>
                    </div>
                    <div className="card-action mt-5">
                        <label
                            onClick={() => setBooking(data)}
                            htmlFor="booking-modal" 
                            className="btn w-full border-none btn bg-gradient-to-r from-rose-500 to-purple-500 hover:from-green-500 hover:to-blue-500 text-white border-0 font-bold"
                        >Book Now</label>
                    </div>
                </div>
            </div>
            {
                booking &&
                <BookingModal
                booking={booking}
                setBooking={setBooking}
                ></BookingModal>
            }
        </div>
    );
};

export default CategoryInfo;