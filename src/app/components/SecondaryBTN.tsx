import Link from 'next/link'
import React from 'react'

function SecondaryBTN(props : any) {
    return (
        <Link className=' bg-primary px-4 py-1 text-center  text-white cursor-pointer' href={props.link}>
            {props.title}
        </Link>
    )
}

export default SecondaryBTN