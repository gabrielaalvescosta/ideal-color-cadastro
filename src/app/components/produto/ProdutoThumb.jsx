import React from 'react';
import Produto from '../components/Produto.js';

const products = [
  {
    id: 1,
    imageSrc: '/product1.jpg',
    title: 'Produto 1',
    price: '$19.99',
  },
  {
    id: 2,
    imageSrc: '/product2.jpg', 
    title: 'Produto 2',
    price: '$29.99',
  },
];

export default function ProdutoThumb() {
  return (
    <div>
      {products.map((product) => (
        <Produto
          key={product.id}
          imageSrc={product.imageSrc}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
