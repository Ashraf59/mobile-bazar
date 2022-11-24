import React from 'react';
import PrimaryButton from '../../../../component/PrimaryButton';

const SingleProduct = ({product}) => {
    const { name, image} = product
    console.log(image);
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="mobile" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions">
      <PrimaryButton>See All Products</PrimaryButton>
    </div>
  </div>
</div>
            
           
        </div>
    );
};

export default SingleProduct;