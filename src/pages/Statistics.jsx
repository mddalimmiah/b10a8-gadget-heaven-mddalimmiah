import React from 'react';
import Heading from '../components/Heading/Heading';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget-heaven | Statistics</title>
            </Helmet>
            <Heading title={'Statistics'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>
        </div>
    );
};

export default Statistics;