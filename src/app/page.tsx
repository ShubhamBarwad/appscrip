import Image from 'next/image'
import Description from './component/categoryDescription/Description'
import Container from './component/Container'
import Filter from './component/filter/Filter'
import ProductList from './component/productList/ProductList'
import FilterSort from './component/productList/FilterSort'
import Banner from './component/Banner'
import MobileFilter from './component/filter/MobileFilter'

export default function Home() {
  return (
    <main>
      {/* <Description /> */}
      <Container>
        <Banner/>
        <FilterSort />
        <MobileFilter />
        <div className='flex gap-4'>
          <Filter />
          <ProductList />
        </div>
      </Container>
    </main>
  )
}
