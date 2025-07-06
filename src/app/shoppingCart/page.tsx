import React from 'react'

function ShoppingCart() {
    return (
        <>
            <div className='flex gap-4 md:px-12 px-2 mt-8 '>
                <div className='w-full bg-red-300'>1</div>
                <div className='w-full flex justify-center'>
                    <div className='border border-gray-300 p-2 rounded-xl flex w-1/2 flex-col gap-4'>
                        <div className='flex items-center justify-between w-full text-gray-500'>
                            <p>قیمت کالا ها:</p>
                            <p>1400000</p>
                        </div>
                        <div className='flex items-center justify-between w-full'>
                            <p>مجموع کل:</p>
                            <p>1200000</p>
                        </div>
                        <div className='flex items-center justify-between w-full text-green-600'>
                            <p>سود شما از خرید:</p>
                            <p>200000</p>
                        </div>
                        <button className='bg-red-500 text-white w-full text-center rounded p-2 cursor-pointer '>
                            تکمیل فرایند خرید
                        </button>
                        <p className='text-sm text-gray-400 text-center'>
                            هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart