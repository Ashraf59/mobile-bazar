import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {

    const {data: products = []} = useQuery({
    
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json();
            console.log(data);
            return data

        }
    })
    return (
       <section>
         <h2 className="text-4xl font-bold text-center mt-20 sm:text-4xl drop-shadow-lg p-6 rounded-lg mb-20">Brands Categories</h2>
         <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
        
        {
            products.map(product => <SingleProduct
            
                key = {product._id}
                product = {product}
            
            ></SingleProduct>)
        }
    </div>
       </section>
    );
};

export default Products;