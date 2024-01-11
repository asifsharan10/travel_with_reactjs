// Products.js

import React from 'react';
import '../../App.css';
import './Products.css';

const productsData = [
  { id: 1, name: 'City Tour Package', price: '$299', description: 'Explore the best of the city with our guided tours.' },
  { id: 2, name: 'Beach Resort Getaway', price: '$499', description: 'Relax and unwind at our luxurious beach resorts.' },
  { id: 3, name: 'Adventure Expedition', price: '$399', description: 'Embark on thrilling adventures with our expert guides.' },
  // Add more products as needed
];

export default function Products() {
  return (
    <div className='products-container'>
      <h1 className='products-title'>Our Products</h1>
      <div className='products-list'>
        {productsData.map(product => (
          <div key={product.id} className='product-card'>
            <h2>{product.name}</h2>
            <p className='product-price'>{product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
