import Image from "next/image";
import Head from "./components/Head";
import Category from "./components/Category";
import Slider from "./components/Slider"
import { sliderItems } from "../../sharedData";

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
      <div className="grid grid-cols-2 ">
        <div className="bg-red-500">
          sdlkcmd
        </div>
        <div >
          <Slider items={sliderItems} />
        </div>
      </div>
      <p>
        sdmv
      </p>
    </>
  );
}
