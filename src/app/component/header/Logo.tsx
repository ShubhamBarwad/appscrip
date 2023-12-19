import Image from 'next/image'
import React from 'react'
import logo from '../../resources/Logo.png'
import hamburger from '../../resources/hamburger.svg'

function Logo() {
  return (
    <div className='z-10 flex gap-4'>
        <Image className='md:hidden' src={hamburger} width={20} height={20} alt="hamburger menu"/>
        <Image className='w-5 h-5 md:w-9 md:h-9' src={logo} width={36} height={36} alt='logo' />
    </div>
  )
}

export default Logo