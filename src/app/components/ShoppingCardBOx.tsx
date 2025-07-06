import Image from 'next/image'
import React from 'react'
import { TRANSLATION_KEYS } from '../../../i18nKeys'
import { useMyTranslation } from '@/hooks/useMyTranslation';

function ShoppingCardBOx() {
    const { t } = useMyTranslation();
    return (
        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl shadow-sm bg-white w-full  hover:bg-gray-50 transition-all">
            <Image
                src="/imgs/cot.png" width={100} height={100}
                alt="image product"
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
    )
}

export default ShoppingCardBOx