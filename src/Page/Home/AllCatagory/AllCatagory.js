
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryInfo from '../Category/CategoryInfo';



const AllCatagory = () => {

    const { data: catagories = [] } = useQuery({
        queryKey: ['allcatagory'],
        queryFn: async () => {
            const res = await fetch('https://mobile-bazar-server-ten.vercel.app/allcatagory')
            const data = await res.json()
            return data
        }
    })


    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-5 mt-20 sm:text-4xl drop-shadow-lg p-6 rounded-lg">All Categories</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 my-5 justify-items-center'>
                {
                    catagories.map(catagory => <CategoryInfo
                        key={catagory._id}
                        category={catagory}
                    ></CategoryInfo>)
                }
            </div>
        </div>
    );
};

export default AllCatagory;
