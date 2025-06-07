import React from 'react'
import { categoryItems } from '../../../sharedData'
import Image from 'next/image'

function Category() {
  return (
    <div className='flex  gap-6 items-center w-full overflow-x-scroll overflow-y-hidden  mt-8 category'>
        {
            categoryItems.map(item =>(
                <div key={item.id} className='z-10 w-full'>
                    <Image src={item.imgURL} alt={item.name} width={100} height={100} className='min-w-24 md:w-full'/>
                    <h3 className='w-full text-center mt-2 md:text-xl md:font-bold'>{item.name}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default Category