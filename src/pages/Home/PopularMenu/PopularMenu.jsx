import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTititle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Button from '../../../components/Button/Button';

const PopularMenu = ({ data }) => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        const popularItems = data.filter(item => item.category === 'popular')
        setMenu(popularItems)
        
    }, [data])
    return (
        <section>
            <SectionTitle
                heading='Popular Items'
                subHeading='From Our Menu'
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Button>View Full Menu</Button>
        </section>
    );
};

export default PopularMenu;