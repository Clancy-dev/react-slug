import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//This below will be the one shown on the browser

export default function ProductListing({data,title,headerBg}) {
  return (
        <section className='category-listing product-listing'>
      <div className="section-header" style={{background:headerBg}}>
         <h2>{title}</h2>
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

  data.map((product)=>{
            return(
            <Link href={`/detailes/${product.slug}`}className='grid-card' key={product.id}>
              <div className="category-image">
              <Image src={product.image} fill alt={product.title}/>
              </div>
              <h2 className='category-title'>{product.title}</h2>
              </Link> 
            )

            
          })




        }

       

        
      
      </div>

      



    </section>
      

  )
}
