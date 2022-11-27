import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-full mt-12'>
            <div className='w-7 h-7 border-4 border-dashed rounded-full animate-spin bg-gradient-to-r from-green-500 to-blue-500'></div>
        </div>
    );
};

export default Spinner;