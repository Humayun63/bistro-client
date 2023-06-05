import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTititle/SectionTitle';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddItem = () => {
    const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const [axiosSecure] = useAxiosSecure()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState(false)
    const onSubmit = data => {
        if (data.category === 'Category') {
            setError(true)
            return
        }

        const formData = new FormData()
        formData.append('image', data.image[0]);


        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                if (imageRes.success) {
                    const { name, recipe, price, category, } = data;
                    const newItem = { name, price: parseFloat(price), category:category.toLowerCase(), image: imageRes.data.display_url, recipe }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                reset()
                            }
                        })
                }
            })
        
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Add User</title>
            </Helmet>
            <SectionTitle
                className="mt-0"
                heading={'add an item'}
                subHeading={"What's new?"}
            ></SectionTitle>
            <section className='bg-[#F3F3F3] py-1 px-4 rounded-md drop-shadow-lg mx-2 my-4'>
                <form className='space-y-4 py-4' onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe name*</span>
                        </label>
                        <input type="text" placeholder="Recipe name" className="input input-bordered w-full"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className='text-red-500'>Name is required</span>}
                    </div>

                    <div className="md:flex justify-between items-center gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select defaultValue={'Category'} className="select select-bordered" {...register("category", { required: true })}>
                                <option disabled>Category</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" placeholder="Price" className="input input-bordered w-full" {...register("price", { required: true })} />
                        </div>
                    </div>
                    {(errors.category || error) && <span className='text-red-500'>Category is required</span>}
                    {errors.price && <span className='text-red-500 block'>Price is required</span>}


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-36" placeholder="Recipe Details" {...register("recipe", { required: true })}></textarea>
                        {errors.recipe && <span className='text-red-500'>Recipe details is required</span>}
                    </div>
                    <input type="file" className="file-input file-input-ghost w-full my-4"  {...register("image", { required: true })} />
                    {errors.image && <span className='text-red-500'>Image Upload is required</span>}
                    <button className='bg-yellow-700 text-white flex gap-1 items-center px-4 py-2 rounded-md'>
                        Add Item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </section>
        </>
    );
};

export default AddItem;