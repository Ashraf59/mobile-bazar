import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryInfo from './CategoryInfo';

const Category = () => {

    const categories = useLoaderData();
    console.log(categories);

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-8 sm:mt-1 sm:text-4xl drop-shadow-lg p-6 rounded-lg">{categories[0].name}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {
                    categories.map(category => <CategoryInfo
                    key={category._id}
                    category={category}
                    ></CategoryInfo>)
                }
            </div>
        </div>
    );
};

export default Category;