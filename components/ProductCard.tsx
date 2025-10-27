import React from 'react';
import { Product } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useAppContext();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform hover:scale-105 hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={product.imageUrl || `https://picsum.photos/400/300?random=${product.id}`}
          alt={product.title}
        />
        <div className="absolute top-2 right-2 bg-[#103a85] text-yellow-300 text-xs font-bold px-2 py-1 rounded-full">{product.category}</div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-2 flex-grow">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="mt-auto pt-4 border-t border-gray-200">
           <p className="text-lg font-bold text-center text-[#1e4ba0] mb-3">
            {product.price}
          </p>
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <Plus className="w-5 h-5"/>
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;