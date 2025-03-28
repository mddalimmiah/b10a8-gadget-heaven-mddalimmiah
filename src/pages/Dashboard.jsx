import { useEffect, useState } from 'react';
import { getAllProduct, removeCartProduct } from '../components/utiltiy';
import Heading from '../components/Heading/Heading';
import Cart from '../components/Cart';
import { getAllWishListProduct, removeWishListProduct } from '../components/utiltiy/whislist';
import WishList from '../components/WishList';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [wishListProducts, setWishListProducts] = useState([]);
    const [activeView, setActiveView] = useState('cart');
    const [isPurchased, setIsPurchased] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);

    // Fetch Cart Products
    useEffect(() => {
        const cartProduct = getAllProduct();
        setProducts(cartProduct);
    }, []);

    // Fetch WishList Products
    useEffect(() => {
        const wishListProduct = getAllWishListProduct();
        setWishListProducts(wishListProduct);
    }, []);

    // Handle Cart Item Removal
    const handleRemoved = (product_id) => {
        removeCartProduct(product_id);
        setProducts(getAllProduct());
    };

    // Handle Wishlist Item Removal
    const handleDelete = (product_id) => {
        removeWishListProduct(product_id);
        setWishListProducts(getAllWishListProduct());
    };

    // Calculate Total Cart Price
    const calculateTotalPrice = () => {
        return products.reduce((total, product) => total + (Number(product.price) || 0), 0);
    };

    // Handle Purchase
    const handlePurchase = () => {
        if (products.length === 0) return;

        const total = calculateTotalPrice();
        setTotalAmount(total);

        setIsPurchased(true);
        setShowModal(true);

        setProducts([]); // Clear Cart
    };

    // Handle Sort By Price (Descending Order)
    const handleSortByPrice = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    };

    return (
        <div>
            <Heading title={'Dashboard'} subtitle={'Explore the latest gadgets!'}></Heading>

            {/* Toggle Buttons */}
            <div className='flex justify-center gap-5 py-5'>
                <button
                    onClick={() => setActiveView('cart')}
                    className={`btn px-16 py-6 rounded-3xl ${activeView === 'cart' ? 'btn-primary' : 'btn-accent'}`}
                >
                    Cart ({products.length})
                </button>
                <button
                    onClick={() => setActiveView('wishlist')}
                    className={`btn px-16 py-6 rounded-3xl ${activeView === 'wishlist' ? 'btn-primary' : 'btn-accent'}`}
                >
                    WishList ({wishListProducts.length})
                </button>
            </div>

            {/* Cart Header */}
            <div className='flex justify-between items-center py-4'>
                <p className='font-bold text-2xl'>Total Cost: ${calculateTotalPrice().toFixed(2)}</p>
                <div className='flex gap-4'>
                    <button className='btn btn-primary' onClick={handleSortByPrice}>Sort By Price</button>
                    <button
                        className='btn btn-success'
                        onClick={handlePurchase}
                        disabled={isPurchased || products.length === 0}
                    >
                        {isPurchased ? 'Purchased' : 'Purchase'}
                    </button>
                </div>
            </div>

            {/* Cart Items */}
            {activeView === 'cart' && (
                <div>
                    <h2 className='font-bold text-2xl py-5'>Cart Items</h2>
                    <div className="grid grid-rows-1 gap-6">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <Cart key={product.product_id} product={product} handleRemoved={handleRemoved} />
                            ))
                        ) : (
                            <p className="text-gray-500 text-center col-span-3">No products found in the cart.</p>
                        )}
                    </div>
                </div>
            )}

            {/* WishList Items */}
            {activeView === 'wishlist' && (
                <div>
                    <h2 className='font-bold text-2xl py-5'>WishList Items</h2>
                    <div className="grid grid-rows-1 gap-6">
                        {wishListProducts.length > 0 ? (
                            wishListProducts.map((product) => (
                                <WishList key={product.product_id} product={product} handleDelete={handleDelete} />
                            ))
                        ) : (
                            <p className="text-gray-500 text-center col-span-3">No products found in the wishlist.</p>
                        )}
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold mb-4">🎉 Purchase Successful!</h2>
                        <p>Your items have been successfully purchased.</p>
                        <p className="text-lg mt-2">Total Amount: <span className="font-bold">${totalAmount.toFixed(2)}</span></p>
                        <button className="btn btn-primary mt-4" onClick={() => setShowModal(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
