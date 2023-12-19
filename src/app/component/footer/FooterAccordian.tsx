'use client'

import React, { useState } from 'react'
import arrowDownWhite from '../../resources/arrowDownWhite.svg'
import Image from 'next/image'

function FooterAccordian( {props} ) {
    const [isOpen, setOpen] = useState(false);
  return (
    <div className='py-6 border-b border-white relative'>
        <p className='font-bold uppercase mb-4'>{props.title}</p>
        {isOpen && props.options.map(option => (<div key={option} className='flex justify-between items-center mb-2'>
            <p className='text-sm uppercase font-bold'>{option}</p>
        </div>))}
        <Image onClick={()=>setOpen(!isOpen)} className='absolute text-white top-6 right-0' src={arrowDownWhite} width={20} height={20} alt='down arrow' />
    </div>
  )
}

export default FooterAccordian