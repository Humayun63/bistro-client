import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefServices from '../ChefServece/ChefServices';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../hooks/useMenu';


const Home = () => {
    const [items] = useMenu()

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefServices></ChefServices>
            <PopularMenu data={items}></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends data={items}></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;