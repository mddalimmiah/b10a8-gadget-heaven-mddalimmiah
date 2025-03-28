import { useLocation } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
const Cart = ({ product, handleRemoved   }) => {
    
        const { pathname } =useLocation();
    if (!product) return null;
    
    const { product_id, product_title, product_image, price, description } = product;

    return (
        <div className="bg-white shadow-md p-4 rounded-lg relative flex">
            <figure>
                <img 
                    className="h-[200px] w-[300px] object-cover rounded-lg" 
                    src={product_image} 
                    alt={product_title} 
                />
            </figure>
            <div className="mt-2 space-y-2">
                <h2 className="text-lg font-bold">{product_title}</h2>
                <p className="text-gray-600">{description}</p>
                <p className="text-gray-600">Price: ${price}</p>
                
           
            </div>
            {
                pathname ==='/dashboard' && (
                   <div onClick={() => handleRemoved(product_id)} className="absolute -top-1 right-20 p-3 bg-warning rounded-full cursor-pointer"><FaTrash size={20} /></div>
                )
            }
        </div>
    );
};

export default Cart;