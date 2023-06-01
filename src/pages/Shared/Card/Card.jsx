import React from 'react';

const Card = ({ img, name, recipe, price }) => {
    console.log(price);
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className='relative'>
                <img src={img} alt="salad" className='w-full'/>
                {
                    price &&
                    <p className='text-white absolute top-0 right-0 mt-4 mr-4 bg-slate-900 px-4 rounded-md'>${price}</p>
                }
            </figure>

            <div className="card-body items-center text-center space-y-3">
                <h2 className="card-title text-center">{name}</h2>
                <p className='text-center'>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#E8E8E8] border-0 rounded-[8px] border-b-[3px] border-b-[#BB8506] uppercase text-[#BB8506] hover:btn-[##1F2937]">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;