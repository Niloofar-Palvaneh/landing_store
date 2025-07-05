import React from 'react'
import { ABOUT_US, ADDRESS, CONTACT_INFORMATION, CONTACT_US, PHONE_NUMBER, PRODUCTS, QUICK_ACCESS } from '../../../words'
import Image from 'next/image'

function Footer() {
    return (
        <>
            <footer className='grid md:grid-cols-4 grid-cols-2 p-4 md:px-12 md:py-8 bg-primary text-white mt-8'>
                <ul className='flex gap-6 flex-col'>
                    <li className='font-bold'>{CONTACT_INFORMATION}</li>
                    <li>{PHONE_NUMBER}</li>
                    <li>{ADDRESS}</li>
                </ul>
                <ul className=' gap-6 flex-col hidden md:flex'>
                    <li className='font-bold'>{QUICK_ACCESS}</li>
                    <li>{ABOUT_US}</li>
                    <li>{CONTACT_US}</li>
                    <li>{PRODUCTS}</li>
                </ul>
                <ul className=' gap-6 flex-col  hidden md:flex'>
                    <li className='font-bold'>{QUICK_ACCESS}</li>
                    <li>{ABOUT_US}</li>
                    <li>{CONTACT_US}</li>
                    <li>{PRODUCTS}</li>
                    <li>{PRODUCTS}</li>
                </ul>
                <ul className='flex gap-6 flex-col'>
                    <li><Image alt='نماد اعتماد' width={100} height={100} src={"/imgs/footer-1.png"}/></li>
                    <li><Image alt='نماد اعتماد' width={100} height={100} src={"/imgs/footer-2.png"}/></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer