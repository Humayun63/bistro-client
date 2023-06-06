import React from 'react';
import { FaBars, FaCalendarAlt, FaEnvelope, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {
    const [, cart] = useCart()
    // TODO: load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    return (
        <>

            <div className="drawer drawer-mobile bg-[#F6F6F6]">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content py-10 mx-6 md:mx-12 ">
                    {/* Page content here */}


                    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                        <FaBars className='text-3xl mb-4'></FaBars>
                    </label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
                        {/* Sidebar content here */}

                        <NavLink className='text-center mb-12' to='/'>
                            <h1 className='font-bold text-2xl'>BISTRO BOSS</h1>
                            <span className='text-base text-[#151515] font-semibold tracking-[7px] text-center'>Restaurant</span>
                        </NavLink>

                        {
                            isAdmin ? <>

                                <li><NavLink className={({ isActive }) => isActive ? 'text-white text-lg uppercase' : 'uppercase text-lg'} to='/dashboard/admin'><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'text-white text-lg uppercase' : 'uppercase text-lg'} to='/dashboard/add-items'><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'text-white text-lg uppercase' : 'uppercase text-lg'} to='/dashboard/manage-items'><FaList></FaList> Manage Items</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'text-white text-lg uppercase' : 'uppercase text-lg'} to='/dashboard/all-users'><FaUsers></FaUsers> All Users</NavLink></li>
                                

                            </> : <>

                                <li><NavLink className={({ isActive }) => isActive ? 'text-white text-lg uppercase' : 'uppercase text-lg'} to='/dashboard/user'><FaHome></FaHome> Users Home</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'text-white text-lg uppercase' : 'uppercase text-lg'} to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'text-white text-lg uppercase' : 'uppercase text-lg'} to='/dashboard/payment-history'><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'text-white text-lg uppercase' : 'uppercase text-lg'} to='/dashboard/my-cart'><FaShoppingCart></FaShoppingCart>
                                    My Cart
                                    <span className="mx-2 badge badge-secondary">{cart.length}</span>
                                </NavLink></li>

                            </>
                        }

                        <hr className='border-1 my-6' />

                        <li><NavLink className={({ isActive }) => isActive ? 'text-white text-lg uppercase' : 'uppercase text-lg'} to='/'><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white text-lg uppercase' : 'uppercase text-lg'} to='/menu'><FaBars></FaBars> Menu</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white text-lg uppercase' : 'uppercase text-lg'} to='/order/salad'><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white text-lg uppercase' : 'uppercase text-lg'} to='/contact'><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                    </ul>

                </div>
            </div>

        </>
    );
};

export default Dashboard;