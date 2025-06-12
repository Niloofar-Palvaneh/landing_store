import Image from "next/image";
import Head from "./components/Head";
import Category from "./components/Category";
import Slider from "./components/Slider"
import { sliderItems } from "../../sharedData";
import SecondaryBTN from "./components/SecondaryBTN";
import { BEST_SELLING_PRODUCTS, VIEW_PRODUCTS } from "../../words";
import Gallery from "./components/Gallery";

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
      <Slider items={sliderItems} isBgGreen={false} title={BEST_SELLING_PRODUCTS} btnText={VIEW_PRODUCTS} />
      <Image src={"/imgs/banner.png"} width={10000} height={10000} alt="banner" className="w-full hidden md:block " />
      <Image src={"/imgs/banner-mobile.png"} width={10000} height={10000} alt="banner" className="w-full block md:hidden  " />
      <Slider items={sliderItems} isBgGreen={true} title={BEST_SELLING_PRODUCTS} btnText={VIEW_PRODUCTS} />
      <Gallery />
      <div className="flex bg-red-500 items-center justify-center w-full mt-4 py-4">
        این المنت میره رو گالری بالا
      </div>
    </>
  );
}
