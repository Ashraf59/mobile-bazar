import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
        <button className="btn bg-gradient-to-r from-rose-500 to-purple-500 hover:from-green-500 hover:to-blue-500 text-white border-0 font-bold">{children}</button>
    </div>
    );
};

export default PrimaryButton;