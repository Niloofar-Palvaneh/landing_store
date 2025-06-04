import React from 'react'
import {menuItems} from './../../../sharedData'


function Menu() {

    return (
        <>
            <div className='w-full bg-primary text-white'>
                <ul>
                    {
                        menuItems.map(item => (
                            <li key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Menu