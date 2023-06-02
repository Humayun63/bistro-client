import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useCart from '../../../hooks/useCart';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [,cart] = useCart()

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully logout!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })
    }

    const navOptions = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-semibold' : 'text-white uppercase'} >Home</NavLink></li>
        <li><NavLink to='/menu' className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-semibold' : 'text-white uppercase'} >our menu</NavLink></li>
        <li><NavLink to='/order/salad' className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-semibold' : 'text-white uppercase'} >order food</NavLink></li>
        <li>
            <Link to='/'>
                <button className="btn">
                    Cart
                    <div className="mx-2 badge badge-secondary">{cart.length}</div>
                </button>
            </Link>
        </li>
    </>

    return (
        <>
            <div className="navbar fixed z-30  max-w-screen-xl bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-opacity-90 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>

                    <div className='uppercase btn-ghost mx-4'>
                        <p className='text-2xl font-bold'>bistro boss</p>
                        <p className='font-medium text-center text-base tracking-[0.38em]'>Restaurant</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu  menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <img src={user?.photoURL} alt={`${user?.displayName}`} title={user?.displayName} className='w-16 rounded-full mx-4' />
                                <button className='btn' onClick={handleLogout}>LogOut</button>
                            </> :
                            <Link className='btn' to='login'>SignIn</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;