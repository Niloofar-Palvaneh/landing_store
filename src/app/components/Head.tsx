import Image from 'next/image'
import React from 'react'
import { DRESS_FOR_THE_POSITION_YOU_ARE_STANDING_IN, SPECIAL_COLLECTION_FOR_WOMEN_WHO_LIVE_UNIQUE, VIEW_PRODUCTS } from '../../../words'
import PrimaryBTN from './PrimaryBTN'

function Head() {
    return (
        <div className="relative bg-[url('/imgs/head1.png')] bg-no-repeat bg-cover bg-center ">
            <div className="p-4 text-white pt-32 pr-24">
                <h1 className="text-5xl text-shadow-lg/30 tracking-wide  w-[25rem] leading-relaxed">{DRESS_FOR_THE_POSITION_YOU_ARE_STANDING_IN}</h1>
                <p className="mt-12 text-xl mb-8">{SPECIAL_COLLECTION_FOR_WOMEN_WHO_LIVE_UNIQUE}</p>
                <PrimaryBTN title={VIEW_PRODUCTS} link="/"/>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/imgs/circle.png" alt="عکس" width={100} height={100} className='w-[15rem]' />
            </div>
        </div>
    )
}

export default Head