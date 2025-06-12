// react-typescript-app/src/components/ProductCard.tsx
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
