'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import ArrowDown from '../../resources/ArrowDown.svg'

function Filter() {
    const filters =[
        {
            label: 'ideal for',
            fil: 'all'
        },
        {
            label: 'ocassion',
            fil: 'all'
        },
        {
            label: 'work',
            fil: 'all'
        },
        {
            label: 'fabric',
            fil: 'all'
        },
        {
            label: 'segment',
            fil: 'all'
        },
        {
            label: 'suitable for',
            fil: 'all'
        },
        {
            label: 'raw materials',
            fil: 'all'
        },
        {
            label: 'pattern',
            fil: 'all'
        }
    ];
    const [isFilterOn, setFilterState] = useState(false);
  return (
    <>
        <aside className='relative hidden md:block'>
            {isFilterOn&&<p onClick={()=>setFilterState(false)} className='hidden md:block uppercase underline cursor-pointer absolute w-max -top-14 left-40 lg:left-80'>hide filter</p>}
            {!isFilterOn&&<p onClick={()=>setFilterState(true)} className='hidden md:block uppercase underline cursor-pointer absolute w-max -top-14 left-40 lg:left-80'>show filter</p>}
            {isFilterOn&&<div className='w-80 '>
                <div className='border-b py-6 flex items-center gap-2'>
                    <input className='w-5 h-5' type="checkbox" name="customizable" id="customizable" />
                    <label className='uppercase font-bold text-lg' htmlFor="customizable">customizable</label>
                </div>
                {
                    filters.map(filter => (
                        <div key={filter.label} className='border-b py-6 flex justify-between items-start'>
                            <div>
                                <p className='uppercase text-lg font-bold mb-2'>{filter.label}</p>
                                <p className='capitalize'>{filter.fil}</p>
                            </div>
                            <Image className='cursor-pointer mt-1' src={ArrowDown} alt='down arrow'/>
                        </div>
                    ))
                }
            </div>}
        </aside>
    </>
  )
}

export default Filter