import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 m-2 w-60">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.price}</p>
      <p className="text-gray-500">{product.description}</p>
    </div>
  );
};

export default ProductCard;
