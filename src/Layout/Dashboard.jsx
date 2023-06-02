import React from 'react';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
        
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content my-10 mx-16">
                    {/* Page content here */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-red-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link><FaHome></FaHome> User Home</Link></li>
                        <li><Link><FaCalendarAlt></FaCalendarAlt> Reservation</Link></li>
                        <li><Link><FaWallet></FaWallet> Payment History</Link></li>
                        <li><Link><FaShoppingCart></FaShoppingCart> My Cart</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
            
        </>
    );
};

export default Dashboard;