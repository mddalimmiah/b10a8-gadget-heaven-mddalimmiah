import React, { useEffect, useState } from 'react';
import { getAllProduct, removeCartProduct } from '../components/utiltiy';
import Heading from '../components/Heading/Heading';
import Card from '../components/Card/Card';


const Dashboard = () => {
    
    
    const [products, setProducts] =useState([]);

    useEffect(() => {
        const cartProduct =getAllProduct();
        setProducts(cartProduct);
    }, [])

    const handleRemoved= (product_id) => {
        removeCartProduct(product_id)
        const cartProduct =getAllProduct();
        setProducts(cartProduct); //this 2 line remove korar jonno again useeffect theke niye aste hobe tahle sathe sathe delete hoye jabe
    }
    return (
        <div>
            <Heading title={'Dashboard'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length > 0 ? (
                products.map(product => (
                   <Card handleRemoved={handleRemoved} product={product} key={product.product_id}></Card>
                    
                ))
            ) : (
                <p className="text-gray-500 text-center col-span-3">No products found</p>
            )}
        </div>
            
        </div>
    );
};

export default Dashboard;