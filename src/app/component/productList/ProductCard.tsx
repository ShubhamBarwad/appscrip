'use client'
import React, { useState } from 'react'
import heart from '../../resources/heart2.svg'
import heartRed from '../../resources/heartred.svg'
import Image from 'next/image';
import Link from 'next/link';


function ProductCard({product}) {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div key={product.id} className='md:w-[300px] w-40 flex flex-col items-stretch relative cursor-pointer duration-100 md:hover:shadow-xl md:hover:-translate-y-1'>
      {
        product.isNew && <p className='uppercase absolute top-5 left-5 font-bold text-sm'>new product</p>
      }
      {
        product.isSoldout && 
          <div className='bg-white py-4 absolute top-[169px] left-0 w-full'>
            <p className='uppercase text-center text-[20px]'>out of stock</p>
          </div>
      }
        <div className='object-contain flex items-center justify-center h-[399px] '>
            <Image className='overflow-hidden' src={product.image} width={150} height={200} style={{width:'200px', height:'auto'}} alt={product.title}/>
        </div>
        <p className='pl-1 w-3/4 truncate uppercase text-sm md:text-lg font-bold'>{product.title}</p>
        <p className='pl-1 truncate text-[10px] md:text-sm text-gray-400'><Link href={'#'} className='underline'>Sign in</Link> or Create an account to see pricing</p>
        <div className='absolute bottom-4 md:bottom-0 right-0'>
          {
            !isFavourite ?
              <Image className='cursor-pointer' onClick={()=>setIsFavourite(true)} src={heart} width={24} height={24} alt='favourite' />
              :
              <Image className='cursor-pointer' onClick={()=>setIsFavourite(false)} src={heartRed} width={24} height={24} alt='favourite' />
          }
            
        </div>
    </div>
  )
}

export default ProductCard