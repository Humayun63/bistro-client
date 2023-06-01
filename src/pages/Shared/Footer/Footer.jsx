import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer>
            <div className=" md:flex  justify-between">
                <div className='bg-[#1F2937] text-center p-10 md:w-1/2'>
                    <h3 className='uppercase text-3xl text-white my-5'>Contact us</h3>
                    <p className='text-white text-center'>123 ABS Street, Uni 21, Bangladesh</p>
                    <p className='text-white text-center'>+88 123456789</p>
                    <p className='text-white text-center'>Mon - Fri: 08:00 - 22:00</p>
                    <p className='text-white text-center'>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='bg-[#111827] p-10 md:w-1/2'>
                    <h3 className='uppercase text-3xl text-white my-5 text-center'>Follow US</h3>
                    <p className='text-white text-center'>Join us on social media</p>
                    <div className='flex gap-4 justify-center my-4'>
                        <FaFacebook className='text-3xl text-white hover:text-blue-100'></FaFacebook>
                        <FaTwitter className='text-3xl text-white hover:text-slate-100'></FaTwitter>
                        <FaInstagram className='text-3xl text-white hover:text-slate-100'></FaInstagram>
                    </div>
                </div>
            </div>
            <div className="footer bg-[#151515] footer-center p-4  text-base-content text-white">
                <div>
                    <p>Copyright © CulinaryCloud. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;