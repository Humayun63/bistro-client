import React, { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import Card from '../../Shared/Card/Card';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const Order = () => {
    const tabs = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = tabs.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [items] = useMenu()
    const dessert = items.filter(item => item.category === 'dessert')
    const soup = items.filter(item => item.category === 'soup')
    const salad = items.filter(item => item.category === 'salad')
    const pizza = items.filter(item => item.category === 'pizza')
    const drinks = items.filter(item => item.category === 'drinks')


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover
                img={orderCover}
                title={'OUR SHOP'}
                subtitle={'would you like to try a dish?'}
            ></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                        {
                            salad.map(item => (
                                <Card
                                    key={item._id}
                                    img={item.image}
                                    name={item.name}
                                    recipe={item.recipe}
                                    price={item.price}
                                ></Card>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                        {
                            pizza.map(item => (
                                <Card
                                    key={item._id}
                                    img={item.image}
                                    name={item.name}
                                    recipe={item.recipe}
                                    price={item.price}
                                ></Card>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                        {
                            soup.map(item => (
                                <Card
                                    key={item._id}
                                    img={item.image}
                                    name={item.name}
                                    recipe={item.recipe}
                                    price={item.price}
                                ></Card>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                        {
                            dessert.map(item => (
                                <Card
                                    key={item._id}
                                    img={item.image}
                                    name={item.name}
                                    recipe={item.recipe}
                                    price={item.price}
                                ></Card>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                        {
                            drinks.map(item => (
                                <Card
                                    key={item._id}
                                    img={item.image}
                                    name={item.name}
                                    recipe={item.recipe}
                                    price={item.price}
                                ></Card>
                            ))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default Order;