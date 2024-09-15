import { getProducts } from '@/app/api/products/route';
import React from 'react';
 // Adjust the path based on your structure

 export default async function page({ params }) {

  const { slug } = params;
  const products = await getProducts();
  const product = products.find(product => product.slug === slug);

  if (!product) {
    return <p>Product not found</p>;
  }
   return (
     <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <p>{product.detailed_description}</p>
       <p>Price: ${product.currentPrice}</p>
       <p>Brand: {product.brand}</p>
       <p>Ratings: {product.ratings}</p>
       
     </div>
   )
 }
 



