import React from 'react'

function FilterSort() {
  return (
    <div className='hidden justify-between items-center border-t border-b py-6 md:flex'>
      {/* <div className='flex gap-20 items-center'> */}
        <p className='uppercase font-bold text-lg'>3245 items</p>
      {/* </div> */}
      <select className='uppercase px-14 py-2 bg-white font-bold' name="sortby" id="sortby">
        <option className='uppercase' value="recommended">recommended</option>
        <option className='uppercase' value="newest">newest</option>
        <option className='uppercase' value="popular">popular</option>
        <option className='uppercase' value="highToLow">price:high to low</option>
        <option className='uppercase' value="lowToHigh">price:low to high</option>
      </select>
    </div>
  )
}

export default FilterSort