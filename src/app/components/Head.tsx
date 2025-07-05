"use client";

import Image from 'next/image';
import React from 'react';
import PrimaryBTN from './PrimaryBTN';
import { useMyTranslation } from '@/hooks/useMyTranslation';
import { TRANSLATION_KEYS } from '../../../i18nKeys';


function Header() {
    const { t } = useMyTranslation();

    return (
        <header className="relative md:bg-[url('/imgs/head1.png')] bg-[url('/imgs/head2.png')] bg-no-repeat bg-cover md:bg-center bg-top">
            <div className="p-4 text-white pt-32 md:pr-24 pr:12 pb-32">
                <h1 className="text-5xl text-shadow-lg/30 tracking-wide w-[25rem] leading-relaxed hidden md:flex">
                    {t(TRANSLATION_KEYS.DRESS_FOR_THE_POSITION_YOU_ARE_STANDING_IN)}
                </h1>
                <p className="mt-12 text-xl mb-8">
                    {t(TRANSLATION_KEYS.SPECIAL_COLLECTION_FOR_WOMEN_WHO_LIVE_UNIQUE)}
                </p>
                <PrimaryBTN title={t(TRANSLATION_KEYS.VIEW_PRODUCTS)} link="/" />
            </div>

            <div className="absolute inset-0 items-center justify-center hidden md:flex">
                <Image src="/imgs/circle.png" alt="عکس" width={100} height={100} className="w-[15rem] opacity-50" />
            </div>

            <Image src="/imgs/HERO.png" alt="عکس" width={100} height={100} className="w-[10rem] absolute bottom-24 md:bottom-0 right-[35%] opacity-60 pb-4" />
            <Image src="/imgs/HERO.png" alt="عکس" width={100} height={100} className="w-[10rem] absolute -bottom-24 left-[15%] opacity-60 hidden md:inline" />
        </header>
    );
}

export default Header;
