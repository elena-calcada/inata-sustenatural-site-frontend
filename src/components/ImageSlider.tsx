"use client"
import { imagesSlideButtonsController } from "@/utils/imagesSlideButtonsController";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import ImagesSlideNavigation from "./ImagesSlideNavigation";

export default function ImageSlider() {
  const { sliderState, setSliderState } = imagesSlideButtonsController()
  return(
    <div className="h-full relative w-full flex items-center justify-center z-30 mx-auto">
          <div className="absolute w-full max-w-[1400px] z-40 h-full bg-background">
            <Swiper
              spaceBetween={6}
              breakpoints={{
                320: {
                  slidesPerView: 1.1
                },
                440: {
                  slidesPerView: 1.4
                },
                541: {
                  slidesPerView: 2.1
                },
                641: {
                  slidesPerView: 2.5
                },
                1024: {
                  slidesPerView: 3.1
                },
                1280: {
                  slidesPerView: 4.1
                }
              }}
              onSlideChange={swiper => {
                setSliderState({
                  isBeginning: swiper.isBeginning,
                  isEnd: swiper.isEnd
                })
              }}
              className="w-full h-full"
            >
              <SwiperSlide>
                <div className="h-full bg-lime-400" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-lime-300" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-lime-400" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-lime-300" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-lime-400" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-lime-300" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-lime-400" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-lime-300" />
              </SwiperSlide>
              <ImagesSlideNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
              />
            </Swiper>
          </div>
        </div>
  )
}
