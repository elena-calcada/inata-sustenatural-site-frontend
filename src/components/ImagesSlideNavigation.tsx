"use client"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSwiper } from "swiper/react";

interface ImagesSliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export default function ImagesSlideNavigation({ isBeginning, isEnd }: ImagesSliderNavigationProps) {
  const swiper = useSwiper();
  return (
    <div className="absolute container !py-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between z-50">
      <button
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
        className="enabled:hover:bg-black/30 transition-colors p-1 rounded-full disabled:opacity-40"
      >
        <BsChevronLeft className="w-16 h-16 text-white pr-1"/>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        className="enabled:hover:bg-black/30 transition-colors p-1 rounded-full disabled:opacity-40"
      >
        <BsChevronRight className="w-16 h-16 text-white pl-1"/>
      </button>
    </div>
  )
}
