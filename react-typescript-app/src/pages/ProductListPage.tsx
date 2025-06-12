// react-typescript-app/src/pages/ProductListPage.tsx
import React, { useEffect, useState } from 'react';
import ProductCard, { Product } from '../components/ProductCard';

// Mock data - replace with API call later
const mockProducts: Product[] = [
  { id: 1, name: "Classic T-Shirt", price: 19.99, description: "A comfortable and stylish classic t-shirt.", imageUrl: "https://via.placeholder.com/300x300.png?text=Classic+T-Shirt" },
  { id: 2, name: "Running Shoes", price: 79.99, description: "Lightweight running shoes for optimal performance.", imageUrl: "https://via.placeholder.com/300x300.png?text=Running+Shoes" },
  { id: 3, name: "Bluetooth Headphones", price: 49.99, description: "Wireless Bluetooth headphones with noise cancellation.", imageUrl: "https://via.placeholder.com/300x300.png?text=Bluetooth+Headphones" },
];

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Replace this with:
        // const response = await fetch('/api/products'); // Assuming proxy is set up or full URL
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data = await response.json();
        // setProducts(data);
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        setProducts(mockProducts);
        setError(null);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
