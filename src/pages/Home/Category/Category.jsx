import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import slideImg1 from '../../../assets/home/slide1.jpg'
import slideImg2 from '../../../assets/home/slide2.jpg'
import slideImg3 from '../../../assets/home/slide3.jpg'
import slideImg4 from '../../../assets/home/slide4.jpg'
import slideImg5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTititle/SectionTitle';

const Category = () => {
    return (
        <section className='my-12'>
            <SectionTitle
                heading='ORDER ONLINE'
                subHeading='From 11:00am to 10:00pm'
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slideImg1} alt="" />
                    <p className='drop-shadow-2xl text-white -mt-20 py-12 tracking-widest text-center font-medium text-xl'>Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImg2} alt="" />
                    <p className='drop-shadow-2xl text-white -mt-20 py-12 tracking-widest text-center font-medium text-xl'>Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImg3} alt="" />
                    <p className='drop-shadow-2xl text-white -mt-20 py-12 tracking-widest text-center font-medium text-xl'>Soup</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImg4} alt="" />
                    <p className='drop-shadow-2xl text-white -mt-20 py-12 tracking-widest text-center font-medium text-xl'>Cake</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImg5} alt="" />
                    <p className='drop-shadow-2xl text-white -mt-20 py-12 tracking-widest text-center font-medium text-xl'>SaladX</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;