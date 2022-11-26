import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Showmyproduct from './Showmyproduct';

const MyProducts = () => {

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
            <h3 className='texl-4xl'>My Prodcucts {addproducts.length}</h3>
            {
                addproducts.map(addproduct => <Showmyproduct
                key = {addproduct._id}
                addproduct = {addproduct}
                
                ></Showmyproduct>)
            }

        </div>
    );
};

export default MyProducts;