"use client"
import Image from "next/image";
import React, { useState } from "react";
import { TOMAN } from "../../../words";

const formatPrice = (num) => num.toLocaleString("fa-IR");

const Slider = ({ items }) => {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const total = items.length;

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
    <div className="relative w-full max-w-6xl mx-auto p-4 overflow-hidden">
      {/* دکمه‌ها */}
      <Image
        onClick={prev}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 w-12"
        src={"/icons/prev.svg"} width={100} height={100} alt="btn" />
      <Image
        onClick={next}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10  rotate-180  w-12"
        src={"/icons/prev.svg"} width={100} height={100} alt="btn" />
      {/* اسلایدها */}
      <div className="flex transition-transform duration-500 ease-in-out ">
        {getSlides().map((item) => (
          <div
            key={item.id}
            className="min-w-[33.3333%] p-2"
          >
            <div className="bg-gray-100 border border-gray-200 shadow-xl  p-4 flex flex-col items-center gap-3 relative">
              <Image
                width={100} height={100}
                src={item.img}
                alt={item.title}
                className="w-full object-contain"
              />
              <div className="flex items-center justify-between w-full">
                <h3>{item.title}</h3>
                <Image src={"/icons/galb.svg"} width={100} height={100} alt="پسندیدن" className="w-4" />
              </div>
              <div className="w-full flex justify-between items-end">
                {item.discountPercentage > 0 ? (
                  <div className="flex flex-col items-end gap-1">
                    <p className="text-gray-400 line-through text-sm text-start w-full block">
                      {formatPrice(item.priceBeforeDiscount)} {TOMAN}
                    </p>
                    <div className="w-full flex items-center justify-between">
                      <span className="text-red-500 ">{formatPrice(item.price)} {TOMAN}</span>

                    </div>
                    <span className=" bg-secondary p-1 text-sm font-medium absolute top-0 left-2">
                      {item.discountPercentage}%
                    </span>
                  </div>
                ) : (
                  <span className="text-start w-full">
                    {formatPrice(item.price)} {TOMAN}
                  </span>
                )}
                <div className="flex items-center gap-1 mb-1">
                  {
                    item.colors.slice(0, 3).map(itemColor => (
                      <div
                        key={itemColor.id}
                        className={`w-4 h-4 bg-${itemColor.color}`}
                      ></div>
                    ))
                  }

                  {
                    item.colors.length > 3 && (
                      <div className="w-6 h-6 rounded-full bg-gray-200 text-xs flex items-center justify-center font-bold text-gray-700">
                        +{item.colors.length - 3}
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
