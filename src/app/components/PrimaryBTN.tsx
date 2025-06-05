import Link from 'next/link'
import React from 'react'

function PrimaryBTN(props : any) {
    return (
        <Link className='bg-secondary px-4 py-1 text-center font-bold text-black cursor-pointer' href={props.link}>
            {props.title}
        </Link>
    )
}

export default PrimaryBTN