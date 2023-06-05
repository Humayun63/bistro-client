import React from 'react';
import { useQuery } from 'react-query';
import SectionTitle from '../../../components/SectionTititle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery('users', async () => {
        const res = await axiosSecure('/users')
        return res.data
    })
    // const { data: users = [], refetch } = useQuery('users', async () => {
    //     const res = await fetch('http://localhost:5000/users')
    //     return res.json()
    // })

    const handleRole = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} is admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => console.log(error))
    }

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
                fetch(`http://localhost:5000/users/${id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
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
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <SectionTitle
                className="mt-0"
                heading={'manage all users'}
                subHeading={'How many??'}
            ></SectionTitle>
            <section className='bg-white py-1 px-4 rounded-md drop-shadow-lg mx-2'>
                <div className='md:flex items-center justify-between uppercase font-semibold my-12'>
                    <h3 className="text-xl md:text-3xl">Total Users: {users.length}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='uppercase'>
                            <tr>
                                <th className='text-lg'>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((item, index) => (
                                    <tr key={item._id} className='text-[#737373'>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.email}
                                        </td>
                                        <td className='text-center'>
                                            {item.role === 'admin' ? <>
                                                <span>
                                                    <FaUserShield className='text-center p-[3px] text-2xl text-yellow-500 rounded-md cursor-pointer hover:bg-yellow-800 border-yellow-500 border'></FaUserShield>
                                                </span>
                                            </> : <span onClick={() => handleRole(item)}>
                                                <FaUsers className='text-center bg-yellow-600 p-1 text-2xl text-white rounded-md cursor-pointer hover:bg-yellow-800'></FaUsers>
                                            </span>
                                            }
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

export default AllUsers;