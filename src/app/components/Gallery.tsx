import React from 'react'
import Image from 'next/image'
import PrimaryBTN from './PrimaryBTN'
import { VIEW_PRODUCTS } from '../../../words'
import SecondaryBTN from './SecondaryBTN'

function Gallery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 mt-12 md:h-[1000px]">
            {/* ستون چپ - دو عکس که ارتفاع کل ستون راست رو پر کنن */}
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
                        <p className='text-4xl font-bold [text-shadow:_0px_3px_3px_#e1c019]'>استایلتو بساز</p>
                        <SecondaryBTN link="/" title={VIEW_PRODUCTS} />
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
                        <p className='text-4xl font-bold [text-shadow:_0px_3px_3px_#e1c019]'>استایلتو بساز</p>
                        <SecondaryBTN link="/" title={VIEW_PRODUCTS} />
                    </div>
                </div>
            </div>

            {/* ستون راست - یک عکس بزرگ */}
            <div className="w-full h-full relative group overflow-hidden">
                <Image
                    src="/imgs/gallery-3.png"
                    alt="Image 1"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-white/15 backdrop-blur-md opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center justify-center flex-col gap-8 cursor-pointer">
                    <p className='text-4xl font-bold [text-shadow:_0px_3px_3px_#e1c019]'>استایلتو بساز</p>
                    <SecondaryBTN link="/" title={VIEW_PRODUCTS} />
                </div>
            </div>
        </div>

    )
}

export default Gallery