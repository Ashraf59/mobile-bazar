import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';


const MyOrders = () => {

    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/myorder?email=${user?.email}`;

    const {data: order, isLoading = [] } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await fetch(url, {
                // Step- 04 (jwt)
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            }); 
            const data = await res.json();
            // console.log(data);
            return data;
        }
    });

    if(isLoading){
        return <Spinner/>
    }

    return (
        <div>
            <div>
            <h2 className="text-4xl font-bold text-center mt-6 sm:text-4xl drop-shadow-lg p-6 rounded-lg">My Orders</h2>
            <div className="divider mx-8"></div>
            </div>
            <div className="overflow-x-auto shadow shadow-slate-400 mx-8 p-6 rounded-lg mb-10">
                <table className="table sm:w-1/4 lg:w-full ">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Title</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody className='text-black'>
                        {
                            order &&
                            order.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={booking.image} alt='' />
                                    </div>
                                </div>
                                </td>
                                <td>{booking.model}</td>
                                <td>{booking.address}</td>
                                <td>{booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                        to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button className='btn btn-primary btn-sm'>Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span
                                        className=' text-green-500'
                                        >Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;