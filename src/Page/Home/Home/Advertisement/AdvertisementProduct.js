import React from 'react';
import PrimaryButton from '../../../../component/PrimaryButton';

const AdvertisementProduct = ({product}) => {
    const{productName, price} = product
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow shadow-slate-500">
<figure className="px-10 pt-10">
 <img src={'https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-Max-image.jpg'} alt="mobile" className="rounded-xl h-[200px]" />
</figure>
<div className="card-body items-center text-center">
 <h2 className="card-title">{productName}</h2>
 <div className="card-actions">
   <PrimaryButton>Buy Now</PrimaryButton>
 </div>
</div>
</div>
         
        
     </div>
    );
};

export default AdvertisementProduct;