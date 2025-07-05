"use client"

import React from 'react'
import Image from 'next/image'
import { useMyTranslation } from '@/hooks/useMyTranslation';
import { TRANSLATION_KEYS } from '../../../i18nKeys';

function Footer() {
    const { t } = useMyTranslation();
    return (
        <>
            <footer className='grid md:grid-cols-4 grid-cols-2 p-4 md:px-12 md:py-8 bg-primary text-white mt-8'>
                <ul className='flex gap-6 flex-col'>
                    <li className='font-bold'>{t(TRANSLATION_KEYS.CONTACT_INFORMATION)}</li>
                    <li>{t(TRANSLATION_KEYS.PHONE_NUMBER)}</li>
                    <li>{t(TRANSLATION_KEYS.ADDRESS)}</li>
                </ul>
                <ul className=' gap-6 flex-col hidden md:flex'>
                    <li className='font-bold'>{t(TRANSLATION_KEYS.QUICK_ACCESS)}</li>
                    <li>{t(TRANSLATION_KEYS.ABOUT_US)}</li>
                    <li>{t(TRANSLATION_KEYS.CONTACT_US)}</li>
                    <li>{t(TRANSLATION_KEYS.PRODUCTS)}</li>
                </ul>
                <ul className=' gap-6 flex-col  hidden md:flex'>
                    <li className='font-bold'>{t(TRANSLATION_KEYS.QUICK_ACCESS)}</li>
                    <li>{t(TRANSLATION_KEYS.ABOUT_US)}</li>
                    <li>{t(TRANSLATION_KEYS.CONTACT_US)}</li>
                    <li>{t(TRANSLATION_KEYS.PRODUCTS)}</li>
                    <li>{t(TRANSLATION_KEYS.PRODUCTS)}</li>
                </ul>
                <ul className='flex gap-6 flex-col'>
                    <li><Image alt='نماد اعتماد' width={100} height={100} src={"/imgs/footer-1.png"} /></li>
                    <li><Image alt='نماد اعتماد' width={100} height={100} src={"/imgs/footer-2.png"} /></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer