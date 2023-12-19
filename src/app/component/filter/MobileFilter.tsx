import React from 'react'

function MobileFilter() {
  return (
    <div className='flex items-center justify-between border-t border-b py-3 md:hidden'>
        <p className='uppercase font-bold flex-1 text-center'>filter</p>
        <select className='uppercase bg-white font-bold flex-1 text-center' name="sortby" id="sortby">
            <option className='uppercase' value="recommended">recommended</option>
            <option className='uppercase' value="newest">newest</option>
            <option className='uppercase' value="popular">popular</option>
            <option className='uppercase' value="highToLow">price:high to low</option>
            <option className='uppercase' value="lowToHigh">price:low to high</option>
        </select>
    </div>
  )
}

export default MobileFilter