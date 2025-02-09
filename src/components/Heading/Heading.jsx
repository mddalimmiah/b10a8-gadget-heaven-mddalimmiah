import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='text-center text-white'>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='text-base font-light'>{subtitle}</p>
        </div>
    );
};

export default Heading;