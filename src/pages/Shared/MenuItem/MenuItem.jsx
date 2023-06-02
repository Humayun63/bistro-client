import React from 'react';

const MenuItem  = ({item}) => {
    const {name, recipe, image, price} = item 
    return (
        <div className='flex space-x-2'>
            <img src={image} alt="Not Found" className='w-[100px]' style={{borderRadius: '0 2000px 200px 200px'}} />
            <div>
                <h3 className='text-[#151515] text-xl uppercase'>{name}---------------</h3>
                <p className='text-[#151515] my-2'>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;