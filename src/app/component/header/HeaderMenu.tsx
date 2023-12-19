import React from 'react'
import iconsearch from '../../resources/iconsearch.png';
import heart from '../../resources/heart.svg'
import Image from 'next/image';
import bag from '../../resources/bag.svg'
import profile from '../../resources/profile.svg'
import Link from 'next/link';

function HeaderMenu() {
    const headerMenu = [
        {
            icon: iconsearch,
            alt: 'search',
            link: '#'
        },
        {
            icon: heart,
            alt: 'heart',
            link: '#'
        },
        {
            icon: bag,
            alt: 'bag',
            link: '#'
        },
        {
            icon: profile,
            alt: 'profile',
            link: '#',
            style: 'hidden md:block'
        }
    ]
  return (
    <div className='flex gap-6 z-10'>
        {
            headerMenu.map(menuItem => (
                <Link className={`${menuItem.style}`} href={menuItem.link}>
                    <Image className='w-5 h-5 md:w-6 md:h-6' src={menuItem.icon} width={24} height={24} alt={menuItem.alt}/>
                </Link>
            ))
        }
        <select className='font-bold uppercase bg-white px-1 hidden md:block' name="language" id="language">
            <option className='font-normal uppercase' value="english">eng</option>
            <option className='font-normal uppercase' value="french">fr</option>
            <option className='font-normal uppercase' value="hindi">hi</option>
        </select>
    </div>
  )
}

export default HeaderMenu