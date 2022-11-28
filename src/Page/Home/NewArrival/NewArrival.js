import React from 'react';
import PrimaryButton from '../../../component/PrimaryButton';

const NewArrival = () => {
    return (
        <div >
            <h2 className="text-4xl font-bold text-center mb-5 mt-20 sm:text-4xl drop-shadow-lg p-6 rounded-lg">New Arrivals</h2>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 justify-items-center sm:mt-2'>
             <div className="card card-compact w-96 bg-base-100 shadow shadow-slate-500">
             <figure><img src="https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-image.jpg" alt="Shoes" /></figure>
                 <div className="card-body">
              <h2 className="card-title justify-center">Apple iPhone 13 Pro Max</h2>
              <p className='text-rose-500 text-center'>Price: BDT. 1,62,999.00</p>
              <p>iPhone 13 Pro Max exclusive new arrival phone</p>
             <div className="card-actions justify-center">
          
             </div>
             </div>
            </div>
             <div className="card card-compact w-96 bg-base-100 shadow shadow-slate-500">
             <figure><img src="https://www.sammobile.com/wp-content/uploads/2022/04/galaxy-m53-5g-1.jpg" alt="Shoes" /></figure>
                 <div className="card-body">
              <h2 className="card-title justify-center"> Galaxy M53 5G</h2>
              <p className='text-rose-500'>Price: BDT. 52,999.00</p>
              <p>Galaxy M53 5G exclusive new arrival phone</p>
             <div className="card-actions justify-center">
             

             </div>
             </div>
            </div>
             <div className="card card-compact w-96 bg-base-100 shadow shadow-slate-500">
             <figure><img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled4191.jpg" alt="Shoes" /></figure>
                 <div className="card-body text-center ">
              <h2 className="card-title justify-center">Xiaomi Mi Mix Fold</h2>
              <p className='text-rose-500 text-center'>Price: BDT. 1,85,000.00</p>
              <p>Xiaomi Mi Mix Fold exclusive new arrival phone</p>

             <div className="card-actions justify-center">
            
             </div>
             </div>
            </div>
             </div>
        </div>
    );
};

export default NewArrival;