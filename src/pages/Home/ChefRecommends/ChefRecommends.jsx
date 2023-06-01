import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTititle/SectionTitle';
import Card from '../../Shared/Card/Card';

const ChefRecommends = ({ data }) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const selectedItems = data.filter(item => item.category === 'salad').slice(0, 3)
        setItems(selectedItems)
        console.log(items)
    }, [data])

    return (
        <section className='my-8'>
            <SectionTitle
                heading='chef recommends'
                subHeading='Should Try'
            ></SectionTitle>
            <div className='md:flex  items-center gap-4 justify-between'>
                {
                    items.map(item => (
                        <Card
                            key={item._id}
                            img={item.image}
                            name={item.name}
                            recipe={item.recipe}
                        ></Card>
                    ))
                }
            </div>
        </section>
    );
};

export default ChefRecommends;