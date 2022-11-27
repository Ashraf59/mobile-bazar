import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisementProduct from './AdvertisementProduct';

const Advertisement = () => {

    const {data: addproducts = []} = useQuery({
        queryKey: ['addproducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addproducts')
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
           <h2 className="text-4xl font-bold text-center mb-5 mt-20 sm:text-4xl drop-shadow-lg p-6 rounded-lg">Advertisement</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 justify-items-center'>
            {
                addproducts.map(product => <AdvertisementProduct
                key={product._id}
                product = {product}
                
                ></AdvertisementProduct>)
            }
           </div>
        </div>
    );
};

export default Advertisement;