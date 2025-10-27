import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { useAppContext } from '../contexts/AppContext';

const ProductGrid: React.FC = () => {
  const { selectedCategory } = useAppContext();
  
  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
