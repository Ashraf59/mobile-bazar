import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-full mt-12'>
            <div className='w-8 h-8 border-4 border-dashed rounded-full animate-spin bg-gradient-to-r from-rose-500 to-purple-500'></div>
        </div>
    );
};

export default Spinner;