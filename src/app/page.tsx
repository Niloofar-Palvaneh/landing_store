import Image from "next/image";
import Head from "./components/Head";
import Category from "./components/Category";
import Slider from "./components/Slider"
import { articleItems, sliderItems } from "../../sharedData";
import SecondaryBTN from "./components/SecondaryBTN";
import { BEST_SELLING_PRODUCTS, STORE_BLOGS, VIEW_PRODUCTS } from "../../words";
import Gallery from "./components/Gallery";
import ArticleSlider from "./components/ArticleSlider";

export default function Home() {

  return (
    <>
      <Head />
      <Category />
      <Slider items={sliderItems} isBgGreen={false} title={BEST_SELLING_PRODUCTS} btnText={VIEW_PRODUCTS} />
      <Image src={"/imgs/banner.png"} width={10000} height={10000} alt="banner" className="w-full hidden md:block " />
      <Image src={"/imgs/banner-mobile.png"} width={10000} height={10000} alt="banner" className="w-full block md:hidden  " />
      <Slider items={sliderItems} isBgGreen={true} title={BEST_SELLING_PRODUCTS} btnText={VIEW_PRODUCTS} />
      <Gallery />
      <ArticleSlider items={articleItems} isBgGreen={true} title={STORE_BLOGS} btnText={VIEW_PRODUCTS} />
      <div className="flex bg-red-500 items-center justify-center w-full mt-4 py-4">
        این المنت میره رو گالری بالا
      </div>
    </>
  );
}
