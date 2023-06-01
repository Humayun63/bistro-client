import React, { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, validateCaptcha, LoadCanvasTemplateNoReload } from 'react-simple-captcha';

import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const captcha = useRef(null);
    const { login, user, loginWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(6);
        setDisabled(true)
    }, [])

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                form.reset()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Login Success ${user?.displayName}`,
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })

    }

    const handleCaptcha = () => {
        const user_captcha_value = captcha.current.value;
        if (validateCaptcha(user_captcha_value, false)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Login Success ${user?.displayName}`,
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })
    }

    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <div className="login-body">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplateNoReload />
                                </label>
                                <input type="text" placeholder="Type captcha" ref={captcha} onChange={handleCaptcha} className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn bg-[#D1A054] border-0" type="submit" value="Login" />
                            </div>
                            <div className='form-control'>
                                <span className="label-text text-[#D1A054] font-medium">
                                    New here? <Link to='/register' className='underline'>Create a New Account</Link>
                                </span>
                            </div>
                            <div className='form-control'>
                                <span className="label-text font-medium text-center text-lg ">
                                    Or login with
                                </span>
                                <div className='flex gap-4 items-center justify-center mt-2'>
                                    <FaFacebook className='text-3xl cursor-pointer'></FaFacebook>
                                    <FaGoogle className='text-3xl cursor-pointer' onClick={handleGoogleSignIn}></FaGoogle>
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

export default Login;