"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BEST_SELLING_PRODUCTS, TOMAN, VIEW_PRODUCTS } from "../../../words";
import SecondaryBTN from "./SecondaryBTN";
import PrimaryBTN from "./PrimaryBTN";


const formatPrice = (num: any) => num.toLocaleString("fa-IR");

const ArticleSlider = ({ items, isBgGreen, title, btnText }: any) => {
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3); // ← مقدار پیش‌فرض دسکتاپ
    const total = items.length;

    // ریسپانسیو کردن visibleCount
    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setVisibleCount(1); // موبایل
            } else if (width < 1024) {
                setVisibleCount(2); // تبلت
            } else {
                setVisibleCount(3); // دسکتاپ
            }
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    const next = () => {
        setIndex((prev) => (prev + visibleCount) % total);
    };

    const prev = () => {
        setIndex((prev) => (prev - visibleCount + total) % total);
    };

    const getSlides = () => {
        const slides = [];
        for (let i = 0; i < visibleCount; i++) {
            slides.push(items[(index + i) % total]);
        }
        return slides;
    };

    return (
        <>
            <div className={`md:grid md:grid-cols-4 flex flex-col mt-8 p-4 `}>
                <div className="flex md:flex-col items-center justify-center text-center gap-4">
                    <div className="flex md:flex-col items-center justify-center text-center  gap-2">
                        <Image className="md:w-24 w-6" src={"/icons/par-par-yellow.svg"} width={100} height={100} alt="عکس" />
                        <h2 className=" md:text-4xl font-bold text-shadow-lg ">{title}</h2>
                    </div>
                    <PrimaryBTN title={btnText} link="/" />
                </div>
                <div className="grid col-span-3">
                    <div className="relative w-full max-w-6xl mx-auto p-4 overflow-hidden">

                        {/* دکمه‌ها */}
                        <Image
                            onClick={prev}
                            className="absolute right-0 top-1/2 -translate-y-1/2 shadow p-2 rounded-full z-10 w-10 cursor-pointer"
                            src={"/icons/prev.svg"} width={100} height={100} alt="btn" />
                        <Image
                            onClick={next}
                            className="absolute left-0 top-1/2 -translate-y-1/2  shadow p-2 rounded-full z-10 rotate-180 w-10 cursor-pointer"
                            src={"/icons/prev.svg"} width={100} height={100} alt="btn" />

                        {/* اسلایدها */}
                        <div className="flex transition-transform duration-500 ease-in-out items-stretch">
                            {getSlides().map((item) => (
                                <div
                                    key={item.id}
                                    className={`p-2 min-w-[100%] sm:min-w-[50%] lg:min-w-[33.3333%]`}>
                                    <div className=" relative bg-gray-100 border border-gray-200 shadow-xl p-4 flex flex-col justify-between h-full  overflow-hidden">
                                    <div className=" absolute top-1 right-2 bg-secondary px-2 py-1 z-10 ">
                                        مقالات
                                    </div>

                                        {/* عکس و لایه‌ی هاور */}
                                        <div className="relative w-full overflow-hidden">
                                            <Image
                                                width={100}
                                                height={100}
                                                src={item.img}
                                                alt={item.title}
                                                className="w-full object-contain"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-4 w-full mt-2">
                                            <h3 className="font-bold">{item.title}</h3>
                                            <p className="text-gray-700">{item.des}</p>
                                            <p className="w-full text-start">{item.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ArticleSlider;
