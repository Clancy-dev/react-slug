import React from 'react'

import { getProducts } from './api/products/route';
import CategoryListing from '@/components/CategoryListing';
import ProductListing from '@/components/ProductListing';
import { getCategories } from './api/categories/route';
export default async function page() {
  //we now fetch our categories here
  //Note await moves with async, so if you use await even up change it to async
  const categories = await getCategories();
  const products = await getProducts();
  // console.log(products);
  //it will appear on the terminal server side i you don't put use client above to indicate client side to appear in the normal console
  //it is good at this level we have all the data, it is visible we have successfully fetched the categories and the products.

  // lastly:Filtering
  // 1.Filter for all Televisions
  const allTelevisions = products.filter((product)=>product.category_id==1);
  // 2.Filter for all Fridges
  const allFridges = products.filter((product)=>product.category_id==2);
  // 3.Filter for all Microwaves
  const allMicrowaves = products.filter((product)=>product.category_id==3);
  // 4.Filter for all Laundry Machines
  const allLaundryMachines = products.filter((product)=>product.category_id==4);
  
  return (
    <div className='home-page'>

      <a href="./contact">Contact</a>
      {/* <div className="category-listing"></div>
      {/* <div className="product-listing"></div> */}
      {/* Instead of this above just use the components below */} 

      <CategoryListing data={categories}/>
      <ProductListing data={products} title="All Products" headerBg="blue"/>
      {/* Now we are filtering the products */}
      <ProductListing data={allTelevisions} title="All Televisions" headerBg="green"/>
      <ProductListing data={allFridges} title="All Fridges" headerBg="purple"/>
      <ProductListing data={allMicrowaves} title="All Microwaves" headerBg="black"/>
      <ProductListing data={allLaundryMachines} title="All Laundry Machines" headerBg="grey"/>

    </div>
  )
}
