import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card/Card';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Products = () => {
  const data = useLoaderData();

  // Ensure valid product data
  const allProducts = Array.isArray(data?.products) ? data.products : [];
  const [products, setProducts] = useState(allProducts);

  // Handle Availability: Show only available products
  const handleSortByAvailability = () => {
    const availableProducts = allProducts.filter((product) => product.availability);
    setProducts(availableProducts.length ? availableProducts : allProducts);
  };

  // Handle Price Sorting: Ascending or Descending
  const handleSortByPrice = (order) => {
    const sortedByPrice = [...allProducts].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedByPrice);
  };

  return (
    <div>
      <Helmet>
        <title>Gadget-heaven | Products</title>
      </Helmet>
      {/* Sorting Buttons */}
      <div className="flex justify-between py-6">
        <button onClick={handleSortByAvailability} className="btn bg-blue-500 text-white p-4 rounded-2xl">
          Show Available
        </button>

        <button onClick={() => handleSortByPrice('desc')} className="btn bg-green-500 text-white p-4 rounded-2xl">
          Price: High to Low
        </button>

        <button onClick={() => handleSortByPrice('asc')} className="btn bg-green-500 text-white p-4 rounded-2xl">
          Price: Low to High
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <Card product={product} key={product.product_id} />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
