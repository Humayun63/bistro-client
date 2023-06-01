import React from 'react';
import SectionTitle from '../../../components/SectionTititle/SectionTitle';
import featuredIgm from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className='featured-item text-white pt-8 my-20 relative'>
            <SectionTitle
                subHeading='Check It Out'
                heading='Featured Item'
            ></SectionTitle>
            <div className='absolute inset-0 bg-slate-700 bg-opacity-25'></div>
            <div className='md:flex justify-center items-center pt-12 pb-20 px-36 relative z-10'>
                <div>
                    <img src={featuredIgm} alt="" />
                </div>
                <div className='md:ml-10 text-white'>
                    <p>Aug 20, 2029</p>
                    <p className="uppercase text-3xl my-2">where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, rerum expedita. Tempora nihil aliquid neque, mollitia ullam nemo ad ea omnis voluptatem. Molestiae consequuntur quasi, dolorum facilis perferendis error tempore, autem recusandae odit commodi amet aspernatur, aut distinctio quibusdam quia voluptatum. Odio maiores illo quibusdam qui perferendis eaque unde quidem.</p>
                    <button className="btn btn-outline border-x-0 border-t-0 border-4 text-white border-b-white mt-4">Order Now</button>
                </div>
            </div>
        </section>

    );
};

export default Featured;