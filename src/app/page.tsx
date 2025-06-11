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
      <div className="grid grid-cols-4 ">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <Image src={"/icons/par-par-green.svg"} width={100} height={100} alt="عکس" />
          <h2 className="text-4xl font-bold text-shadow-lg">{BEST_SELLING_PRODUCTS}</h2>
          <SecondaryBTN title={VIEW_PRODUCTS} link="/" />
        </div>
        <div className="grid col-span-3">
          <Slider items={sliderItems} />
        </div>
      </div>
      <p>
        sdmv
      </p>
    </>
  );
}
