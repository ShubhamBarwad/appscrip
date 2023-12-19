import React from 'react'
import Logo from './Logo'
import Container from '../Container'
import Businessname from './Businessname'
import HeaderMenu from './HeaderMenu'
import MegaMenu from './MegaMenu'


function Header() {
  return (
    <header className='py-4 md:pt-10 md:pb-6 shadow-md'>
        <Container>
            <div className='flex w-full justify-between items-center relative'>
                <Logo/>
                <Businessname/>
                <HeaderMenu/>
            </div>
            <MegaMenu/>
        </Container>
    </header>
  )
}

export default Header