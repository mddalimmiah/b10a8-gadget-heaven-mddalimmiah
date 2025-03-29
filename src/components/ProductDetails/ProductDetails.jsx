import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { addCartProduct, getAllProduct } from "../utiltiy";
import { addWishListProduct, getAllWishListProduct } from "../utiltiy/whislist";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
    const { product_id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isCartProduct, setIsCartProduct] =useState(false);
    // wishlist
    const [isWishListProduct, setIsWishListProduct]=useState(false);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch product data");
                }
                return res.json();
            })
            .then((data) => {
                console.log("Fetched Data:", data);

                
                if (!data.products || !Array.isArray(data.products)) {
                    throw new Error("Unexpected data format. Expected an array inside 'products'.");
                }

                
                const foundProduct = data.products.find((p) => p.product_id === product_id);
                
                if (!foundProduct) {
                    throw new Error("Product not found");
                }

                setProduct(foundProduct);
                // cart product
                const cartProduct =getAllProduct();
                const isExist=cartProduct.find(item => item.product_id ==foundProduct.product_id);

                // wishlist
                const wishListProduct= getAllWishListProduct();
                const isExist2=wishListProduct.find(item => item.product_id ==foundProduct.product_id);

                if(isExist2){
                    setIsWishListProduct(true);
                }

                if(isExist){
                    setIsCartProduct(true);
                }
                setLoading(false);

            })
            .catch((error) => {
                console.error("Error fetching product:", error);
                setError(error.message);
                setLoading(false);
            });
    }, [product_id]);

    if (loading) return <p className="text-center text-gray-500">Loading product details...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    if (!product) return <p className="text-center text-red-500">Product not found</p>;

    // Destructure product data
    const { product_title, product_image, price, description, Specification,rating } = product;

// cart
    const handleCartClicked = (product) =>{
        addCartProduct(product)
        setIsCartProduct(true);
        // getAllProduct()
    }
// wishlist
    const handleWishClicked = (product) =>{
        
       
        addWishListProduct(product)
        setIsWishListProduct(true);

    }
    return (
        <div>
            <Helmet>
                <title>Gadget-heaven | ProductDetails</title>
            </Helmet>
            <div className="bg-white shadow-md p-4 rounded-lg flex gap-6  justify-center items-center">
            <figure>
                <img
                    className="h-[200px] w-full object-cover rounded-lg"
                    src={product_image}
                    alt={product_title}
                />
            </figure>
            <div className="mt-2 space-y-2">
                <h2 className="text-3xl font-semibold">{product_title}</h2>
                <p className="text-gray-600 font-semibold text-xl">Price: ${price}</p>
                <button className="btn outline rounded-4xl">In Stock</button>
                <p>{description}</p>
                <div>
                    <h3 className="font-semibold text-lg mt-2">Specifications:</h3>
                    <ul className="list-decimal list-inside">
                        {Specification.map((spec, index) => (
                            <li key={index}> {spec}</li>
                        ))}
                    </ul>
                </div>
                <h2 className="font-bold">Rating:</h2>
                <div className="flex gap-4">
                    
                    <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star"  />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    
                </div>
                {rating}
                </div>

            </div>

           
        </div>
       <div>
       <div className="flex justify-center items-center">
                <div className='bg-white rounded-full flex  '>
                    <NavLink disabled={isCartProduct}  
                    onClick={()=> handleCartClicked(product)}  className={`flex btn justify-center items-center bg-[#9538E2] rounded-3xl p-3 gap-4 text-white`}>Add To Cart <AiOutlineShoppingCart /> 
                    </NavLink>
                </div>

                <div className='bg-white btn rounded-full flex justify-center items-center px-4 w-10 h-10'>
                    <NavLink
                    disabled={isWishListProduct}
                    onClick={()=> handleWishClicked(product)} className={`text-3xl ml-4`}><FaRegHeart /> </NavLink>
                </div>
            </div>
       </div>
        </div>
        
    );
};

export default ProductDetails;
