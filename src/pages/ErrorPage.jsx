import React from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget-heaven | Error Page</title>
            </Helmet>
            <h2 className='text-center text-4xl'>Page not Found</h2>
            <p className='text-center'>404</p>
        </div>
    );
};

export default ErrorPage;