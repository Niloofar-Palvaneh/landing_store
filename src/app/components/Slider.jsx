"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BEST_SELLING_PRODUCTS, TOMAN, VIEW_PRODUCTS } from "../../../words";
import SecondaryBTN from "./SecondaryBTN";
import PrimaryBTN from "./PrimaryBTN";


const formatPrice = (num) => num.toLocaleString("fa-IR");

const Slider = ({ items, isBgGreen, title, btnText }) => {
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
      <div className={`md:grid md:grid-cols-4 flex flex-col mt-8 ${isBgGreen && "bg-primary"}`}>
        {
          isBgGreen ? (
            <div className="flex md:flex-col items-center justify-center text-center gap-4">
              <div className="flex md:flex-col items-center justify-center text-center  gap-2">
                <Image className="md:w-24 w-6" src={"/icons/par-par-yellow.svg"} width={100} height={100} alt="عکس" />
                <h2 className=" md:text-4xl font-bold text-shadow-lg text-white">{title}</h2>
              </div>
              <PrimaryBTN title={btnText} link="/" />
            </div>
          ) : (
            <div className="flex md:flex-col items-center justify-center text-center gap-4">
              <div className="flex md:flex-col items-center justify-center text-center  gap-2">
                <Image className="md:w-24 w-6" src={"/icons/par-par-green.svg"} width={100} height={100} alt="عکس" />
                <h2 className=" md:text-4xl font-bold text-shadow-lg ">{title}</h2>
              </div>
              <SecondaryBTN title={btnText} link="/" />
            </div>
          )
        }
        <div className="grid col-span-3">
          <div className="relative w-full max-w-6xl mx-auto p-4 overflow-hidden">
            {/* دکمه‌ها */}
            <Image
              onClick={prev}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 w-10 cursor-pointer"
              src={"/icons/prev.svg"} width={100} height={100} alt="btn" />
            <Image
              onClick={next}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 rotate-180 w-10 cursor-pointer"
              src={"/icons/prev.svg"} width={100} height={100} alt="btn" />

            {/* اسلایدها */}
            <div className="flex transition-transform duration-500 ease-in-out items-stretch">
              {getSlides().map((item) => (
                <div
                  key={item.id}
                  className={`p-2 min-w-[100%] sm:min-w-[50%] lg:min-w-[33.3333%]`}
                >
                  <div className="bg-gray-100 border border-gray-200 shadow-xl p-4 flex flex-col justify-between h-full relative group overflow-hidden">

                    {/* عکس و لایه‌ی هاور */}
                    <div className="relative w-full overflow-hidden">
                      <Image
                        width={100}
                        height={100}
                        src={item.img}
                        alt={item.title}
                        className="w-full object-contain"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-16 bg-white/30 backdrop-blur-md flex items-center justify-center gap-4 text-sm font-bold text-gray-800 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                        <div className="border border-gray-600 text-gray-600 p-1 w-6 h-6 text-center">S</div>
                        <div className="border border-gray-600 text-gray-600 p-1 w-6 h-6 text-center">M</div>
                        <div className="border border-gray-600 text-gray-600 p-1 w-6 h-6 text-center">XL</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full mt-2">
                      <h3>{item.title}</h3>
                      <Image src={"/icons/galb.svg"} width={100} height={100} alt="پسندیدن" className="w-4" />
                    </div>

                    <div className="w-full flex justify-between items-end mt-auto">
                      {item.discountPercentage > 0 ? (
                        <div className="flex flex-col items-end gap-1 w-full">
                          <p className="text-gray-400 line-through text-sm w-full">
                            {formatPrice(item.priceBeforeDiscount)} {TOMAN}
                          </p>
                          <div className="w-full flex items-center justify-between">
                            <span className="text-red-500">{formatPrice(item.price)} {TOMAN}</span>
                          </div>
                          <span className="bg-secondary p-1 text-sm font-medium absolute top-0 left-2">
                            {item.discountPercentage}%
                          </span>
                        </div>
                      ) : (
                        <span className="w-full text-start">
                          {formatPrice(item.price)} {TOMAN}
                        </span>
                      )}
                      <div className="flex items-center gap-1 mb-1">
                        {
                          item.colors.slice(0, 3).map(itemColor => (
                            <div key={itemColor.id} className={`w-4 h-4 bg-${itemColor.color}`}></div>
                          ))
                        }
                        {item.colors.length > 3 && (
                          <div className="w-6 h-6 rounded-full bg-gray-200 text-xs flex items-center justify-center font-bold text-gray-700">
                            +{item.colors.length - 3}
                          </div>
                        )}
                      </div>
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

export default Slider;
