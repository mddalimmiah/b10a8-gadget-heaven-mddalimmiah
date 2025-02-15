import {  useLocation, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {product_id} =useParams();
    const location = useLocation();
    const product = location.state?.product; 
    // const {product_id, product_title, product_image, price,description } =product;
    console.log(product)
    return (
        <div>
            <div className="bg-white shadow-md p-4 rounded-lg flex gap-6">
            <figure>
                <img 
                    className="h-[200px] w-full object-cover rounded-lg" 
                    src={product.product_image} 
                    alt={product.product_title} 
                />
            </figure>
            <div className="mt-2 space-y-2">
                <h2 className="text-3xl font-semibold">{product.product_title}</h2>
                <p className="text-gray-600  font-semibold text-xl">Price: ${product.price}</p>
                <button className='btn outline rounded-4xl'>In Stock</button>
                <p>{product.description}</p>
                <p>
                   {product.Specification}
                </p>
              
                
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;