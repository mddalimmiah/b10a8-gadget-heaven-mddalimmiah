import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../components/Card/Card';
import { useEffect, useState } from 'react';

const Cards = () => {
    const data = useLoaderData();
    const { category } = useParams(); 

      const allProducts = Array.isArray(data?.products) ? data.products : [];

   
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("All Products:", allProducts); 

        if (category) {
           
            const filtered = allProducts.filter(product => 
                product.category.toLowerCase() === category.toLowerCase()
            );
            console.log("Filtered Products:", filtered); 
            setProducts(filtered);
        } else {
            setProducts(allProducts); 
        }
    }, [category, data]); 

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length > 0 ? (
                products.map(product => (
                    <Card product={product} key={product.product_id} />
                ))
            ) : (
                <p className="text-gray-500 text-center col-span-3">No products found</p>
            )}
        </div>
    );
};

export default Cards;
