"use client"

import React from 'react'
import { TRANSLATION_KEYS } from '../../../../i18nKeys'
import { useMyTranslation } from '@/hooks/useMyTranslation';
import Image from 'next/image';
import ShoppingCardBOx from '../../components/ShoppingCardBOx';

function ShoppingCart() {
    const { t } = useMyTranslation();
    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 px-2 md:px-12 mt-8">
                <div className='w-full flex flex-col gap-2'>
                    <ShoppingCardBOx />
                </div>

                <div className='w-full flex justify-center items-start'>
                    <div className='border border-gray-200 shadow-sm p-2 rounded-xl flex w-full md:w-1/2 flex-col gap-4'>
                        <div className='flex items-center justify-between w-full text-gray-500'>
                            <p>{t(TRANSLATION_KEYS.PRODUCT_PRICES)}:</p>
                            <p>1400000</p>
                        </div>
                        <div className='flex items-center justify-between w-full'>
                            <p>{t(TRANSLATION_KEYS.TOTAL_AMOUNT)}:</p>
                            <p>1200000</p>
                        </div>
                        <div className='flex items-center justify-between w-full text-green-600'>
                            <p>{t(TRANSLATION_KEYS.YOUR_PROFIT_FROM_THE_PURCHASE)}:</p>
                            <p>200000</p>
                        </div>
                        <button className="group relative overflow-hidden bg-red-500 text-white w-full text-center rounded p-2 cursor-pointer">
                            <span className="relative z-10">
                                {t(TRANSLATION_KEYS.COMPLETE_THE_PURCHASE_PROCESS)}
                            </span>
                            <span className="absolute left-1/2 top-0 h-full w-0 bg-red-400 opacity-40 transition-all duration-500 group-hover:left-0 group-hover:w-full"></span>
                        </button>
                        <p className='text-sm text-gray-400 text-center'>
                            {t(TRANSLATION_KEYS.PAYMENT_WARNING)}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart