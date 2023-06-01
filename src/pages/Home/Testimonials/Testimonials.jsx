import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTititle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <section className='my-12'>
            <SectionTitle
                subHeading={'What our client say'}
                heading={'testimonials'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {

                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='mx-24 my-16 text-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                className='mx-auto'
                                loop={true}
                            />
                            <FaQuoteLeft className='mx-auto my-4 text-4xl'></FaQuoteLeft>
                            <p className="text-center my-4">{review.details}</p>
                            <h3 className="text-3xl text-center text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;