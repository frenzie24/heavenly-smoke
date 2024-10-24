import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { name: 'Product 1', price: '$10', description: 'Description 1' },
    { name: 'Product 2', price: '$15', description: 'Description 2' },
    { name: 'Product 3', price: '$20', description: 'Description 3' },
  ];

  return (
    <div className="flex justify-center flex-wrap">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
