import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { product_id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                
                // Ensure the `products` key exists and is an array
                if (!data.products || !Array.isArray(data.products)) {
                    throw new Error("Unexpected data format. Expected an array inside 'products'.");
                }

                // Find product by `product_id`
                const foundProduct = data.products.find((p) => p.product_id === product_id);

                if (!foundProduct) {
                    throw new Error("Product not found");
                }

                setProduct(foundProduct);
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
    const { product_title, product_image, price, description, Specification,  } = product;

    return (
        <div className="bg-white shadow-md p-4 rounded-lg flex gap-6">
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
            </div>
        </div>
    );
};

export default ProductDetails;
