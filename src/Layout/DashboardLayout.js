import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Navbar/>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li className='text-black mb-2'><Link to='/dashboard/myorder'>My Orders</Link></li>
                       {
                        isAdmin &&  <li className='text-black'><Link to='/dashboard/allusers'>All Users</Link></li>
                       }
                        {/* {
                            isAdmin && <>
                                <li className='text-black'><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                            </>
                        } */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;