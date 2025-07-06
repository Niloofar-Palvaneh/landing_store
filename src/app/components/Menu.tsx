"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import PrimaryBTN from './PrimaryBTN';

import { useMyTranslation } from '@/hooks/useMyTranslation';
import { menuItems } from '../../../sharedData';
import { TRANSLATION_KEYS } from '../../../i18nKeys';
import Link from 'next/link';

function Menu() {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const isShowMenuHandler = () => setIsShowMenu(prev => !prev);

    const { t, language, changeLanguage } = useMyTranslation();
    // برای تاگل زبان بین fa و en
    const handleLanguageToggle = () => {
        const newLang = language === 'fa' ? 'en' : 'fa';
        changeLanguage(newLang);
    };

    return (
        <>
            <div className='w-full bg-primary text-white flex items-center justify-between px-6 py-4'>
                {/* منوی بالا */}
                <ul className='items-center gap-8 hidden md:flex'>
                    {menuItems.map(item => (
                        <li
                            key={item.id}
                            className='cursor-pointer hover:text-secondary transition-all'
                        >
                            <Link href={item.href}>
                                {t(item.title)}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center gap-8'>
                    <Image className='w-4 cursor-pointer hidden md:inline' alt='جست و جو' src="/icons/search.svg" width={100} height={100} />
                    <Link href={"/shoppingCart"}>
                        <Image className='w-4 cursor-pointer' alt='سبد خرید' src="/icons/bag.svg" width={100} height={100} />
                    </Link>

                    {/* آیکون تغییر زبان (تاگل) */}
                    <svg onClick={handleLanguageToggle} xmlns="http://www.w3.org/2000/svg" className="size-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                    </svg>

                    <div className='hidden md:inline'>
                        <PrimaryBTN title={t(TRANSLATION_KEYS.REGISTER_LOGIN)} link="/" />
                    </div>
                </div>

                <Image onClick={isShowMenuHandler} className='w-6 cursor-pointer inline md:hidden' alt='منو همبرگری' src="/icons/menu.svg" width={100} height={100} />
            </div>

            {/* منوی موبایل */}
            <div className={`${isShowMenu ? "top-0" : "-top-[50rem]"} transition-all absolute w-full p-4 z-50 bg-primary text-white`}>
                <div className='w-full flex justify-end'>
                    <Image onClick={isShowMenuHandler} className='w-8 cursor-pointer' alt='بستن' width={100} height={100} src="/icons/close.svg" />
                </div>
                <ul className='flex items-start flex-col gap-6'>
                    {menuItems.map(item => (
                        <li
                            key={item.id}
                            className='cursor-pointer hover:text-secondary transition-all'
                        >
                            {t(item.title)}
                        </li>
                    ))}
                </ul>
            </div>

            {/* بک‌گراند تیره منوی موبایل */}
            <div
                onClick={isShowMenuHandler}
                className={`w-full h-screen bg-modals absolute z-40 top-0 overflow-hidden transition-all ${isShowMenu ? "flex" : "hidden"}`}
            />
        </>
    );
}

export default Menu;
