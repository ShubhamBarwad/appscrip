import Link from 'next/link'
import React from 'react'

function MegaMenu() {
    const megaMenuItems = [
        {
            text: 'shop',
            href: '#'
        },
        {
            text: 'skills',
            href: '#'
        },
        {
            text: 'stories',
            href: '#'
        },
        {
            text: 'about',
            href: '#'
        },
        {
            text: 'contact us',
            href: '#'
        }
    ]
  return (
    <div className='items-center justify-center hidden md:flex'>
        <div className='flex gap-16 mt-14'>
            {
                megaMenuItems.map(menuItem => (
                    <Link key={menuItem.text} className='uppercase text-xl font-bold' href={menuItem.href}>{menuItem.text}</Link>
                ))
            }
        </div>
    </div>
  )
}

export default MegaMenu