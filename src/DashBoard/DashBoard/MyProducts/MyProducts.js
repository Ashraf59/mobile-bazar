import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Showmyproduct from './Showmyproduct';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const {data: products, isLoading, refetch = []} = useQuery({
        queryKey: ['myproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
        <div>
        <h2 className="text-4xl font-bold text-center mb-5 mt-20 sm:text-4xl drop-shadow-lg p-6 rounded-lg">My Products</h2>
        </div>
        <div className="overflow-x-auto shadow shadow-slate-400 mx-8 p-6 mb-10 rounded-lg">
            <table className="table sm:w-1/4 lg:w-full">
                <thead>
                <tr><th>Sl. No</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Advertisement</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody className='text-black'>
                    {
                       products &&
                       products.sort((a, b) => b.time - a.time).map((addproduct, i) => <tr key={addproduct._id}>
                           <th>{i + 1}</th>
                           <td>{addproduct.productName}</td>
                           <td>{addproduct.price}</td>
                           <td>Status Not found</td>
                           <td><button className="btn btn-sm btn-success mt-3">Advertisement</button></td>
                           <td> <button className="btn btn-sm btn-error mt-3">Delete</button></td>

                       </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyProducts;