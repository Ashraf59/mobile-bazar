import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertisement = () => {

    const { data: advertises = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://mobile-bazar-server-ten.vercel.app/advertise')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='my-6'>
            <h2 className="text-4xl font-bold text-center mt-6 sm:text-4xl drop-shadow-lg p-6 rounded-lg">Advetisement</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 justify-items-center'>
                {
                    advertises.map(adv =>
                        <div key={adv._id} className="card w-96 bg-base-100 shadow shadow-slate-500 ">
                            <figure className="px-10 pt-10">
                                <img src={adv.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{adv.productName}</h2>
                                <p>Price: ${adv.price}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Advertisement;