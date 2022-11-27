import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    // Step:- 02(Admin)
    const {data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    // Step- 03(Admin)
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',

            // Step- 16 (jwt)
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            // Step- 04(Admin)
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successful.')
                refetch();
            }
        })
    }

    return (
        <div>
            <div>
            <h2 className="text-4xl font-bold text-center mb-5 mt-20 sm:text-4xl drop-shadow-lg p-6 rounded-lg">All Users</h2>
            </div>
            <div className="overflow-x-auto shadow shadow-slate-400 mx-8 p-6 mb-10 rounded-lg">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody className='text-black'>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;