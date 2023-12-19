import React from 'react'
import { getProducts } from '@/app/lib/products'
import ProductCard from './ProductCard';

async function ProductList() {
  type productType = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    isNew?: boolean,
    isSoldout?: boolean
  }
  const products = await getProducts();
  return (
    <div className='grid md:grid-cols-responsive sm:grid-cols-2 gap-2 md:gap-10 w-full justify-items-center py-4'>
      {
        products.map((product:productType) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default ProductList