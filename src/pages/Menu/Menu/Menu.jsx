import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTititle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertCover from '../../../assets/menu/dessert-bg.jpeg'
import pizzaCover from '../../../assets/menu/pizza-bg.jpg'
import saladCover from '../../../assets/menu/salad-bg.jpg'
import soupCover from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [items] = useMenu()
    const dessert = items.filter(item => item.category === 'dessert')
    const soup = items.filter(item => item.category === 'soup')
    const salad = items.filter(item => item.category === 'salad')
    const pizza = items.filter(item => item.category === 'pizza')
    const offered = items.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title='our menu'
                subtitle='would you like to try a dish?'
            ></Cover>
            <SectionTitle
                subHeading="Don't miss"
                heading="Toady's offer"
            ></SectionTitle>
            <MenuCategory 
            items={offered}
            ></MenuCategory>
            <MenuCategory
                items={dessert}
                coverImg={dessertCover}
                title={'dessert'}
                subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
            <MenuCategory
                items={pizza}
                coverImg={pizzaCover}
                title={'pizza'}
                subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
            <MenuCategory
                items={salad}
                coverImg={saladCover}
                title={'salad'}
                subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
            <MenuCategory
                items={soup}
                coverImg={saladCover}
                title={'soup'}
                subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>
        </div>
    );
};

export default Menu;