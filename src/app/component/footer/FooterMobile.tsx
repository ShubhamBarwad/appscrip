import React from 'react'
import Container from '../Container'
import FooterAccordian from './FooterAccordian'
import Image from 'next/image'
import gpay from '../../resources/gpay.svg'

function FooterMobile() {
    const mettamuse = {
        title: 'mettā muse',
        options: [
            'about us',
            'stories',
            'artisan',
            'boutiques',
            'contact us',
            'EU Compliances Docs'
        ]
    }
    const quickLinks = {
        title: 'quick links',
        options: [
            'orders & shipping',
            'join/login as a seller',
            'payment & pricing',
            'return & refunds',
            'FAQs',
            'privacy policy',
            'Terms & Conditions'
        ]
    }

  return (
    <footer className='bg-black text-white md:hidden'>
        <Container>
            <div className='py-6 md:py-20'>
                <div className='flex flex-col md:flex-row pb-6 border-b border-white'>
                    <div className='flex flex-col gap-6 flex-1 '>
                        <p className='uppercase text-xl font-bold'>be the first to know</p>
                        <p>sign up for updates from mettā muse.</p>
                        <div className='flex flex-row flex-nowrap'>
                            <input className='w-44 p-4' type="text" name="email" id="email" placeholder='Enter your email...' />
                            <button className='border border-gray-700 text-gray-700 p-4 uppercase rounded-md ml-4'>subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='py-6  border-b border-white'>
                    <p className='font-bold uppercase mb-4'>call us</p>
                    <div className='flex justify-between items-center'>
                        <p className='text-sm'>+44 221 133 5360</p>
                        <p className='text-sm'>customercare@mettamuse.com</p>
                    </div>
                </div>
                <div className='py-6  border-b border-white'>
                    <p className='font-bold uppercase mb-4'>currency</p>
                    <div className='flex justify-between items-center'>
                        <p className='text-sm uppercase font-bold'>usd</p>
                    </div>
                </div>
                <FooterAccordian props={mettamuse}/>
                <FooterAccordian props={quickLinks}/>
                <div className='py-6  border-b border-white'>
                <p className='font-bold mb-4'>mettā muse Accepts</p>
                    <div className='flex gap-2'>
                        <Image src={gpay} width={45} height={28} alt='gpay'/>
                        <Image src={gpay} width={45} height={28} alt='gpay'/>
                        <Image src={gpay} width={45} height={28} alt='gpay'/>
                        <Image src={gpay} width={45} height={28} alt='gpay'/>
                        <Image src={gpay} width={45} height={28} alt='gpay'/>
                        <Image src={gpay} width={45} height={28} alt='gpay'/>
                    </div>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default FooterMobile