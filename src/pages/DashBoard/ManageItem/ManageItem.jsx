import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTititle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../hooks/useMenu';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItem = () => {
    const [items, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()
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

                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        refetch()
                        if (res.data.deletedCount > 0) {
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

                <h3 className="text-xl md:text-3xl my-4 font-semibold">Total Items: {items.length}</h3>

                <div className="overflow-x-auto">
                    <table className="table w-full uppercase">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-lg'>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th className='text-end pr-12'>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, index) => (
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
                                        <td>
                                            <button onClick={() => handleDelete(item._id)} className="btn hover:bg-yellow-500 border-0 btn-sm text-white bg-yellow-600">
                                                <FaEdit></FaEdit>
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(item._id)} className="btn hover:bg-yellow-500 border-0 btn-sm text-white bg-red-600">
                                                <FaTrashAlt></FaTrashAlt>
                                            </button>
                                        </td>
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

export default ManageItem;