"use client"

import React from 'react'
import { TRANSLATION_KEYS } from '../../../i18nKeys'
import { useMyTranslation } from '@/hooks/useMyTranslation';

function ShoppingCart() {
    const { t } = useMyTranslation();
    return (
        <>
            <div className='flex gap-4 md:px-12 px-2 mt-8 '>
                <div className='w-full bg-red-300'>1</div>
                <div className='w-full flex justify-center'>
                    <div className='border border-gray-300 p-2 rounded-xl flex w-1/2 flex-col gap-4'>
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
                        <button className='bg-red-500 text-white w-full text-center rounded p-2 cursor-pointer '>
                            {t(TRANSLATION_KEYS.COMPLETE_THE_PURCHASE_PROCESS)}
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