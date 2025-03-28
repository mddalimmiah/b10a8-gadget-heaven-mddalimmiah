import React, { useEffect, useState } from 'react';
import { getAllProduct, removeCartProduct } from '../components/utiltiy';
import Heading from '../components/Heading/Heading';
import Card from '../components/Card/Card';
import Cart from '../components/Cart';
import { getAllWishListProduct, removeWishListProduct } from '../components/utiltiy/whislist';
import WishList from '../components/WishList';


const Dashboard = () => {
    
    
    const [products, setProducts] =useState([]);

    const [wishListProducts, setWishListProducts] =useState([]);

    // cart
    useEffect(() => {
        const cartProduct =getAllProduct();
        setProducts(cartProduct);
    }, [])


    // wishList
    useEffect(() => {
        const wishListProduct =getAllWishListProduct();
        setWishListProducts(wishListProduct);
    }, [])

   
    // cart
    const handleRemoved= (product_id) => {
        removeCartProduct(product_id)
        const cartProduct =getAllProduct();
        setProducts(cartProduct); //this 2 line remove korar jonno again useeffect theke niye aste hobe tahle sathe sathe delete hoye jabe
    }

    // wishList
    const handleDelete= (product_id) =>{
        removeWishListProduct(product_id)
        const wishListProduct =getAllWishListProduct();
        setWishListProducts(wishListProduct);
    }
    return (
        <div>
            <Heading title={'Dashboard'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>

            <div className='flex justify-center gap-5 py-5'>
                <button className='btn btn-accent px-16 py-6 rounded-3xl'>Cart</button>
                <button className='btn btn-accent px-16 py-6 rounded-3xl'>WihsList</button>
            </div>

            <div>
                
                <div className='flex justify-between gap-4 items-center py-10'>
                <h2 className='font-bold text-2xl'>Cart</h2>
                    <div className='flex justify-center items-center gap-5 '>
                    <p className='font-bold text-2xl'>Total Cost : </p>
                    <button className='btn btn-primary'>Sort By Price</button>
                    <button className='btn btn-primary'>Purchase</button>
                    </div>
                </div>
            <div>
                
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length > 0 ? (
                products.map(product => (
                   <Card handleRemoved={handleRemoved} product={product} key={product.product_id}></Card>
                    
                ))
            ) : (
                <p className="text-gray-500 text-center col-span-3">No products found</p>
            )}
            </div> */}
            </div>
        <div>
            <h2>Cart</h2>
            <div className="grid grid-rows-1 gap-6">
            {products.length > 0 ? (
                products.map(product => (
                   <Cart handleRemoved={handleRemoved} product={product} key={product.product_id}></Cart>
                    
                ))
            ) : (
                <p className="text-gray-500 text-center col-span-3">No products found</p>
            )}
            </div>
        </div>

        <div>
            <h2>wihsList</h2>
            <div className="grid grid-rows-1 gap-6">
            {wishListProducts.length > 0 ? (
                wishListProducts.map(product => (
                  <WishList handleDelete={handleDelete} product={product} key={product.product_id}></WishList>
                    
                ))
            ) : (
                <p className="text-gray-500 text-center col-span-3">No products found</p>
            )}
            </div>
        </div>
            </div>
            
        </div>
    );
};

export default Dashboard;