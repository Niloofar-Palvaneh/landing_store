import Image from "next/image";
import Head from "./components/Head";
import Category from "./components/Category";
import Slider from "./components/Slider"
import { sliderItems } from "../../sharedData";
import SecondaryBTN from "./components/SecondaryBTN";
import { BEST_SELLING_PRODUCTS, VIEW_PRODUCTS } from "../../words";

export default function Home() {
  const sampleSlides = [
    'اسلاید ۱',
    'اسلاید ۲',
    'اسلاید ۳',
    'اسلاید ۴',
    'اسلاید ۵',
    'اسلاید ۶',
    'اسلاید ۷',
    'اسلاید ۸',
    'اسلاید ۹',
  ];
  return (
    <>
      <Head />
      <Category />
      <div className="md:grid md:grid-cols-4 flex flex-col mt-8">
        <div className="flex md:flex-col items-center justify-center text-center gap-4">
          <div className="flex md:flex-col items-center justify-center text-center  gap-2">
            <Image className="md:w-24 w-6" src={"/icons/par-par-green.svg"} width={100} height={100} alt="عکس" />
            <h2 className=" md:text-4xl font-bold text-shadow-lg ">{BEST_SELLING_PRODUCTS}</h2> 
          </div>
          <SecondaryBTN title={VIEW_PRODUCTS} link="/" />
        </div>
        <div className="grid col-span-3">
          <Slider items={sliderItems} />
        </div>
      </div>
      <Image src={"/imgs/banner.png"} width={10000} height={10000} alt="banner" className="w-full hidden md:block " />
      <Image src={"/imgs/banner-mobile.png"} width={10000} height={10000} alt="banner" className="w-full block md:hidden  " />

      <p>
        sdmv
      </p>
    </>
  );
}
