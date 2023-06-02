import React from 'react';

const SectionTitle = ({heading, subHeading, className}) => {
    return (
        <div className={`md:w-5/12 mx-auto my-8 ${className}`}>
            <p className='text-yellow-600 text-center mb-2'>---{subHeading}---</p>
            <h3 className='text-3xl text-center uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;