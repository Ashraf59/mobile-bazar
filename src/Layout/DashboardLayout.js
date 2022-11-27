import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Shared/Navbar/Navbar';
import { FaMobile, FaShoppingBag, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";

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
                        <li className='text-black mb-2 text-lg font-semibold'><Link to='/dashboard/myorder'><FaShoppingCart className='text-slate-400'/>My Orders</Link></li>
                       {
                        isAdmin &&  <li className='text-black text-lg font-semibold'><Link to='/dashboard/allusers'><FaUser className='text-slate-400'/>All Users</Link></li>
                       }
                        
                                <li className='text-black text-lg font-semibold'><Link to='/dashboard/addproducts'><FaMobile className='text-slate-400' /> Add A Products</Link></li>

                                <li className='text-black text-lg font-semibold'><Link to='/dashboard/products'><FaShoppingBag className='text-slate-400'/>My Products</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;