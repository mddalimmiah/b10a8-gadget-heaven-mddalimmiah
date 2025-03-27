import { NavLink, useLocation } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import { FaTrash } from "react-icons/fa";

const Card = ({ product, handleRemoved   }) => {
    const { pathname } =useLocation();
    if (!product) return null;
    
    const { product_id, product_title, product_image, price } = product;

    return (
        <div className="bg-white shadow-md p-4 rounded-lg relative">
            <figure>
                <img 
                    className="h-[200px] w-[300px] object-cover rounded-lg" 
                    src={product_image} 
                    alt={product_title} 
                />
            </figure>
            <div className="mt-2 space-y-2">
                <h2 className="text-lg font-bold">{product_title}</h2>
                <p className="text-gray-600">Price: ${price}</p>
              
                <NavLink className={({ isActive }) =>
          isActive ? "text-yellow-600 font-bold underline" : "text-white"
        }  to={`/product-details/${product_id}`} className={`w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600`}>
                View Details
                </NavLink>
            </div>
            {
                pathname ==='/dashboard' && (
                   <div onClick={() => handleRemoved(product_id)} className="absolute -top-1 right-20 p-3 bg-warning rounded-full cursor-pointer"><FaTrash size={20} /></div>
                )
            }
        </div>
    );
};

export default Card;
