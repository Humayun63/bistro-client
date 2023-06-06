import React from 'react';
import useCart from '../../../hooks/useCart';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTititle/SectionTitle';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [refetch, cart] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })


            }
        })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <SectionTitle
                className="mt-0"
                heading={'wanna add more?'}
                subHeading={'My Cart'}
            ></SectionTitle>
            <section className='bg-white py-1 px-4 rounded-md drop-shadow-lg mx-2'>
                <div className='md:flex items-center justify-between uppercase font-semibold my-12'>
                    <h3 className="text-xl md:text-3xl">Total Items: {cart.length}</h3>
                    <h3 className="text-xl md:text-3xl">Total Price: ${total.toFixed(2)}</h3>
                    <Link to='/dashboard/payment'>
                        <button className="btn btn-sm bg-yellow-600 border-0">Pay</button>
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full uppercase">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-lg'>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th className='text-end pr-12'>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => (
                                    <tr key={item._id} className='text-[#737373'>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>

                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>


                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td className='text-end pr-12'>
                                            ${item.price}
                                        </td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn hover:bg-yellow-500 border-0 btn-sm text-white bg-red-600">
                                                <FaTrashAlt></FaTrashAlt>
                                            </button>
                                        </th>
                                    </tr>
                                ))
                            }


                        </tbody>

                    </table>
                </div>
            </section>
        </>
    );
};

export default MyCart;