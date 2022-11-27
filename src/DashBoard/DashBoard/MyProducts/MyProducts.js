import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../../Shared/Spinner/Spinner';
import Showmyproduct from './Showmyproduct';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const [advertiseId, setAdvertiseID] = useState('')
    const [advertise, setAdvertise] = useState('')

    const {data: products, isLoading, refetch = []} = useQuery({
        queryKey: ['myproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

    useEffect(() => {
        fetch(`http://localhost:5000/myproducts/${advertiseId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAdvertise(data)
            })
    }, [advertiseId])

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleAdvertise = (id) => {
        setAdvertiseID(id)
        //console.log('myitem', myitem);
        fetch('http://localhost:5000/advertise', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                productName: advertise.productName,
                price: advertise.price,
                image: advertise.image,
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('data posted succesfuly')
            })
        }

        const handleDeleteProduct = (id) => {
            // console.log(advertiseId);
            fetch(`http://localhost:5000/myProducts/${id}`, {
                method: 'DELETE',
                // headers: {
                //     authorization: bearer ${localStorage.getItem('accessToken')}
                // }
            })
            .then(res => res.json())
            .then( data => {
                console.log(data);
                if(data.deletedCount > 0 ){
                    refetch();
                    toast.success('Product deleted successfully')
                }
            })
        }
    return (
        <div>
        <div>
        <h2 className="text-4xl font-bold text-center mt-6 sm:text-4xl drop-shadow-lg p-6 rounded-lg">My Products</h2>
        </div>
        <div className="divider mx-8"></div>
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
                           <td><button onClick={() => handleAdvertise((addproduct._id))} className="btn btn-sm btn-outline btn-primary mt-3">Advertisement</button></td>
                           <td> <button onClick={() =>handleDeleteProduct(addproduct._id)} className="btn btn-outline btn-sm btn-error mt-3">Delete</button></td>

                       </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyProducts;