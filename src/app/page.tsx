"use client"

import Image from "next/image";
import Head from 'next/head'
import Header from "./components/Head";
import Category from "./components/Category";
import Slider from "./components/Slider"
import { articleItems, posts, sliderItems } from "../../sharedData";
import { BEST_SELLING_PRODUCTS, FOLLOW_US, FOOTER_DES, STORE_BLOGS, STORE_UNIQUE_AND_PREMIUM_CLOTHING_FOR_YOUR_TASTE, VIEW_PRODUCTS } from "../../words";
import Gallery from "./components/Gallery";
import ArticleSlider from "./components/ArticleSlider";
import PostsSlider from "./components/PostsSlider";
import Footer from "./components/Footer";
import { TRANSLATION_KEYS } from "../../i18nKeys";
import { useMyTranslation } from "@/hooks/useMyTranslation";



export default function Home() {
 const { t } = useMyTranslation();

  return (
    <>

      <Head>
        <title>فروشگاه لباس | خاص‌ترین استایل‌ها برای شما</title>
        <meta name="description" content="فروشگاه لباس با مجموعه‌ای از خاص‌ترین و پرمیوم‌ترین استایل‌ها برای سلیقه‌ی شما." />
      </Head>

      <main>
        <Header />
        <Category />
        <Slider items={sliderItems} isBgGreen={false} title={t(TRANSLATION_KEYS.BEST_SELLING_PRODUCTS)} btnText={t(TRANSLATION_KEYS.VIEW_PRODUCTS)} />
        <Image src={"/imgs/banner.png"} width={10000} height={10000} alt="banner" className="w-full hidden md:block " />
        <Image src={"/imgs/banner-mobile.png"} width={10000} height={10000} alt="banner" className="w-full block md:hidden  " />
        <Slider items={sliderItems} isBgGreen={true} title={t(TRANSLATION_KEYS.BEST_SELLING_PRODUCTS)} btnText={t(TRANSLATION_KEYS.VIEW_PRODUCTS)} />
        <Gallery />
        <ArticleSlider items={articleItems} isBgGreen={true} title={t(TRANSLATION_KEYS.STORE_BLOGS)} btnText={t(TRANSLATION_KEYS.VIEW_PRODUCTS)} />
        <PostsSlider items={posts} isBgGreen={true} title={t(TRANSLATION_KEYS.FOLLOW_US)} btnText={t(TRANSLATION_KEYS.VIEW_PRODUCTS)} />
        <div className="md:px-12 px-6 mt-8 flex flex-col gap-4 leading-7 ">
          <h4 className="font-bold text-xl ">{t(TRANSLATION_KEYS.STORE_UNIQUE_AND_PREMIUM_CLOTHING_FOR_YOUR_TASTE)}</h4>
          <p className="text-gray-800">{t(TRANSLATION_KEYS.FOOTER_DES)}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
