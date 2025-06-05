"use client"
import React, { useState } from 'react'
import { menuItems } from './../../../sharedData'
import Image from 'next/image'
import PrimaryBTN from './PrimaryBTN'

function Menu() {
    const [isShowMenu, setIsShowMenu] = useState(false)
    const isShowMenuHandler = () => {
        setIsShowMenu(!isShowMenu)
    }

    return (
        <>
            <div className='w-full bg-primary text-white flex items-center justify-between px-6 py-4 '>
                <ul className='items-center gap-8 hidden md:flex'>
                    {
                        menuItems.map(item => (
                            <li className='cursor-pointer hover:text-secondary transition-all' key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
                <div className='flex items-center gap-8'>
                    <Image className='w-4 cursor-pointer hidden md:inline' alt='جست و جو' src={"/icons/search.svg"} width={100} height={100} />
                    <Image className='w-4 cursor-pointer' alt='سبد خرید' src={"/icons/bag.svg"} width={100} height={100} />
                    <div className='hidden md:inline'>
                        <PrimaryBTN title="ثبت نام / ورود" link="/" />
                    </div>
                </div>
                <Image onClick={isShowMenuHandler} className='w-6 cursor-pointer inline md:hidden' alt='منو همبرگری' src={"/icons/menu.svg"} width={100} height={100} />
            </div>
            <div className={`${isShowMenu ? "top-0" : "-top-[50rem]"} transition-all absolute w-full p-4 z-50 bg-primary text-white`}>
                <div className='w-full flex justify-end '>
                    <Image onClick={isShowMenuHandler} className='w-8 cursor-pointer' alt='بستن' width={100} height={100} src={'/icons/close.svg'} />
                </div>
                <ul className='flex items-start flex-col gap-6'>
                    {
                        menuItems.map(item => (
                            <li className='cursor-pointer hover:text-secondary transition-all' key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
            <div onClick={isShowMenuHandler} className={`w-full h-screen bg-modals absolute z-40 top-0 overflow-hidden transition-all ${isShowMenu ? "flex" : "hidden"}`}></div>
        </>
    )
}

export default Menu