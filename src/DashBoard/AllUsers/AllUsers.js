import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {

    const [deleteUser, setDeleteUser] = useState(null)

    const closeModal = () => {
        setDeleteUser(null)
    }

    // Step:- 02(Admin)
    const {data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://mobile-bazar-server-ten.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    // Step- 03(Admin)
    const handleMakeAdmin = id => {
        fetch(`https://mobile-bazar-server-ten.vercel.app/users/admin/${id}`, {
            method: 'PUT',

            // Step- 16 (jwt)
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
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

    const handleDeleteUser = user => {
        fetch(`https://mobile-bazar-server-ten.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name} deleted successfully`)
                }
            })
    }

    return (
        <div>
            <div>
            <h2 className="text-4xl font-bold text-center mt-6 sm:text-4xl drop-shadow-lg p-6 rounded-lg">All Users</h2>
            <div className="divider mx-8"></div>
            </div>
            <div className="overflow-x-auto shadow shadow-slate-400 mx-8 p-6 mb-10 rounded-lg">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Status</th>
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
                                <td>{user.user}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-outline btn-sm btn-primary'>Make Admin</button>}</td>
                                <td><label onClick={() => setDeleteUser(user)} htmlFor="my-modal" className='btn btn-sm btn-outline btn-error'>Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteUser &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteUser.name} It cannot be undone.`}
                    successAction={handleDeleteUser}
                    closeModal={closeModal}
                    modalData={deleteUser}
                ></ConfirmationModal>}
        </div>
    );
};

export default AllUsers;