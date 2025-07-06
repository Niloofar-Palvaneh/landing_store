"use client"

import React from 'react'
import { TRANSLATION_KEYS } from '../../../i18nKeys'
import { useMyTranslation } from '@/hooks/useMyTranslation';
import Image from 'next/image';

function ShoppingCart() {
    const { t } = useMyTranslation();
    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 px-2 md:px-12 mt-8">
                <div className='w-full flex flex-col gap-2'>
                    <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl shadow-sm bg-white w-full  hover:bg-gray-50 transition-all">
                        <Image
                            src="/imgs/cot.png" width={100} height={100}
                            alt="Product Image"
                            className="w-20 h-20 object-cover rounded-md border" />
                        <div className="flex flex-col flex-1">
                            <h3 className="text-sm font-semibold text-gray-800">نام محصول</h3>
                            <p className="text-sm text-gray-500 mt-1">قیمت: ۱۲۵٬۰۰۰ تومان</p>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                                    <span className="text-sm font-medium">2</span>
                                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                                </div>
                                <button className="text-red-500 text-sm border-red-500 border px-2 py-1 cursor-pointer rounded">{t(TRANSLATION_KEYS.DELETE)}</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl shadow-sm bg-white w-full  hover:bg-gray-50 transition-all">
                        <Image
                            src="/imgs/cot.png" width={100} height={100}
                            alt="Product Image"
                            className="w-20 h-20 object-cover rounded-md border" />
                        <div className="flex flex-col flex-1">
                            <h3 className="text-sm font-semibold text-gray-800">نام محصول</h3>
                            <p className="text-sm text-gray-500 mt-1">قیمت: ۱۲۵٬۰۰۰ تومان</p>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                                    <span className="text-sm font-medium">2</span>
                                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                                </div>
                                <button className="text-red-500 text-sm border-red-500 border px-2 py-1 cursor-pointer rounded">{t(TRANSLATION_KEYS.DELETE)}</button>
                            </div>
                        </div>
                    </div>
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