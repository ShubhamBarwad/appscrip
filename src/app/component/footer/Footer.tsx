import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import gpay from '../../resources/gpay.svg'
import instagram from '../../resources/instagram.svg'

function Footer() {
  return (
    <footer className='bg-black text-white hidden md:block'>
        <Container>
            <div className='py-6 md:py-20'>
                <div className='flex flex-col md:flex-row pb-6 border-b border-white'>
                    <div className='flex flex-col gap-6 flex-1 '>
                        <p className='uppercase text-xl font-bold'>be the first to know</p>
                        <p>sign up for updates from mettā muse.</p>
                        <div className='mt-6 w-full flex flex-row flex-nowrap'>
                            <input className='py-3 px-6' type="text" placeholder='Enter your email...' />
                            <button className='border border-gray-700 text-gray-700 py-3 px-5 uppercase rounded-md ml-4'>subscribe</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 flex-1'>
                        <p className='uppercase text-xl first-letter font-bold'>contact us</p>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                        <p className='uppercase text-xl first-letter font-bold mt-2'>currency</p>
                        <p className='uppercase font-bold'>usd</p>
                        <p className='text-xs'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
                <div className='flex justify-between items-start'>
                    <div className='flex flex-col gap-4'>
                        <p className='mb-1 font-bold text-2xl'>mettā muse</p>
                        <p className='capitalize text-lg'>About Us</p>
                        <p className='capitalize text-lg'>Stories</p>
                        <p className='capitalize text-lg'>Artisan</p>
                        <p className='capitalize text-lg'>Boutiques</p>
                        <p className='capitalize text-lg'>Contact Us</p>
                        <p className='capitalize text-lg'>EU Compliances Docs</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='mb-1 uppercase font-bold text-2xl'>quick links</p>
                        <p className='capitalize text-lg'>orders & shipping</p>
                        <p className='capitalize text-lg'>join/login as a seller</p>
                        <p className='capitalize text-lg'>payment & pricing</p>
                        <p className='capitalize text-lg'>return & refunds</p>
                        <p className='capitalize text-lg'>FAQs</p>
                        <p className='capitalize text-lg'>privacy policy</p>
                        <p className='capitalize text-lg'>Terms & Conditions</p>
                    </div>
                    <div>
                        <p className='mb-6 uppercase font-bold text-2xl'>follow us</p>
                        <div className='flex gap-3 mb-12'>
                            <Image src={instagram} width={32} height={32} alt='instagram' />
                            <Image src={instagram} width={32} height={32} alt='instagram' />
                        </div>
                        <p className='mb-4 font-bold text-2xl'>mettā muse Accepts</p>
                        <div className='flex gap-2'>
                            <Image src={gpay} width={56} height={35} alt='gpay'/>
                            <Image src={gpay} width={56} height={35} alt='gpay'/>
                            <Image src={gpay} width={56} height={35} alt='gpay'/>
                            <Image src={gpay} width={56} height={35} alt='gpay'/>
                            <Image src={gpay} width={56} height={35} alt='gpay'/>
                            <Image src={gpay} width={56} height={35} alt='gpay'/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer