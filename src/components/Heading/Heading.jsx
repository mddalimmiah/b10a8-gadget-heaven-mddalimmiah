import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='p-6'>
            <h2 className='text-4xl font-bold text-black text-center'>{title}</h2>
            <p className=' mt-6  w-full lg:w-3/6 mx-auto text-base font-medium text-center'>{subtitle}</p>
        </div>
    );
};

export default Heading;