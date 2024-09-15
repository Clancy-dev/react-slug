
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//This below will be the one shown on the browser

export default function CategoryListing({data}) {
  return (
    <section className='category-listing'>
      <div className="section-header">
         <h2>Shop by categories</h2>
      </div>

      <div className="grid-col-4">


        {/* <Link href='#' className='grid-card'>
        <div className="category-image">
        <Image src="/categories/fridges.jfif" fill alt='some text'/>
        </div>
        <h2 className='category-title'>Category Title</h2>
        </Link> */}

        {/* Note */}
        {/* since they are 4 we are going to map through the overall data to get one single card to apply to the rest. */}

        {

      data.map((category)=>{
            return(
              <Link href='#' className='grid-card' key={category.id}>
              <div className="category-image">
              <Image src={category.image} fill alt={category.title}/>
              </div>
              <h2 className='category-title'>{category.title}</h2>
              </Link> 
            )

            
          })




        }

       

        
      
      </div>

      



    </section>
  )
}
