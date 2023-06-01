import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Button from '../../../components/Button/Button';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, coverImg, title, subtitle }) => {
    return (
        <section className='my-12'>
            {title &&
                <Cover
                    img={coverImg}
                    title={title}
                    subtitle={subtitle}
                ></Cover>
            }
            <div className='grid md:grid-cols-2 gap-10 my-8 md:px-12'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title ? title : 'salad'}`}><Button>ORDER YOUR FAVOURITE FOOD</Button></Link>
        </section>
    );
};

export default MenuCategory;