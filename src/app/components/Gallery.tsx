"use client"

import React from 'react'
import Image from 'next/image'
import { VIEW_PRODUCTS } from '../../../words'
import SecondaryBTN from './SecondaryBTN'
import { useMyTranslation } from '@/hooks/useMyTranslation';
import { TRANSLATION_KEYS } from '../../../i18nKeys'

function Gallery() {
    const { t } = useMyTranslation();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 mt-12 md:h-[1000px]">
            <div className="grid grid-rows-2 gap-4 h-full">
                <div className="w-full h-full relative group overflow-hidden">
                    <Image
                        src="/imgs/gallery-1.png"
                        alt="Image 2"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-white/15 backdrop-blur-md opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center justify-center flex-col gap-8 cursor-pointer">
                        <p className='text-4xl font-bold [text-shadow:_0px_3px_3px_#e1c019]'>{t(TRANSLATION_KEYS.CREATE_YOUR_STYLE)}</p>
                        <SecondaryBTN link="/" title={t(TRANSLATION_KEYS.VIEW_PRODUCTS)} />
                    </div>
                </div>
                <div className="w-full h-full relative group overflow-hidden">
                    <Image
                        src="/imgs/gallery-2.png"
                        alt="Image 3"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-white/15 backdrop-blur-md opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center justify-center flex-col gap-8 cursor-pointer">
                        <p className='text-4xl font-bold [text-shadow:_0px_3px_3px_#e1c019]'>{t(TRANSLATION_KEYS.CREATE_YOUR_STYLE)}</p>
                        <SecondaryBTN link="/"  title={t(TRANSLATION_KEYS.VIEW_PRODUCTS)} />
                    </div>
                </div>
            </div>

            <div className="w-full h-full relative group overflow-hidden">
                <Image
                    src="/imgs/gallery-3.png"
                    alt="Image 1"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-white/15 backdrop-blur-md opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center justify-center flex-col gap-8 cursor-pointer">
                    <p className='text-4xl font-bold [text-shadow:_0px_3px_3px_#e1c019]'>{t(TRANSLATION_KEYS.CREATE_YOUR_STYLE)}</p>
                    <SecondaryBTN link="/"  title={t(TRANSLATION_KEYS.VIEW_PRODUCTS)} />
                </div>
            </div>
        </div>

    )
}

export default Gallery