import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { registerUser,updateNamePhoto } = useContext(AuthContext)

    const onSubmit = data => {
       
        registerUser(data.email, data.password)
            .then(() => {
                updateNamePhoto(data.name, data.photoURL)
                .then(()=>{
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Register Success!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                })
                .catch(error =>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.message}`,
                    })
                })
                
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })

    };

    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <div className="login-body">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name?.type === 'required' && <span className='text-red-400 mt-1'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">PhotoURL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL?.type === 'required' && <span className='text-red-400 mt-1'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email?.type === 'required' && <span className='text-red-400 mt-1'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    min: 6,
                                    max: 20,
                                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
                                })}
                                    placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-400 mt-1'>Password is required</span>}
                                {errors.password?.type === 'min' && <span className='text-red-400 mt-1'>Password should be min 6 characters</span>}
                                {errors.password?.type === 'max' && <span className='text-red-400 mt-1'>Password should be maximum 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-400 mt-1'>Password should have at least one lowercase, one uppercase, one special character and minimum 6 characters</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054] border-0" type="submit" value="Register" />
                            </div>
                            <div className='form-control'>
                                <span className="label-text text-[#D1A054] font-medium">
                                    Already registered? <Link to='/login' className='underline'>Go to Login</Link>
                                </span>
                            </div>
                            <div className='form-control'>
                                <span className="label-text font-medium text-center text-lg ">
                                    Or register with
                                </span>
                                <div className='flex gap-4 items-center justify-center mt-2'>
                                    <FaFacebook className='text-3xl cursor-pointer'></FaFacebook>
                                    <FaGoogle className='text-3xl cursor-pointer'></FaGoogle>
                                    <FaGithub className='text-3xl cursor-pointer'></FaGithub>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;