import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const Card = ({ item }) => {
    const { image, name, recipe, price, _id } = item || {}
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [refetch] = useCart()

    const handleAddCart = item => {
        if (!user) {
            Swal.fire({
                title: 'Login First',
                text: "You need to Login First",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        } else {
            const addedItem = { itemId: _id, image, name, recipe, price, email: user?.email }

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addedItem)
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                })
                .catch(error => console.log(error))


        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className='relative'>
                <img src={image} alt="salad" className='w-full' />
                {
                    price &&
                    <p className='text-white absolute top-0 right-0 mt-4 mr-4 bg-slate-900 px-4 rounded-md'>${price}</p>
                }
            </figure>

            <div className="card-body items-center text-center space-y-3">
                <h2 className="card-title text-center">{name}</h2>
                <p className='text-center'>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddCart(item)} className="btn bg-[#E8E8E8] border-0 rounded-[8px] border-b-[3px] border-b-[#BB8506] uppercase text-[#BB8506] hover:btn-[##1F2937]">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;