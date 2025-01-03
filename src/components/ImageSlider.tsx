"use client"
import { IImage } from "@/entities/IImage";
import { imagesSlideButtonsController } from "@/utils/imagesSlideButtonsController";
import Image from "next/image";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import ImagesSlideNavigation from "./ImagesSlideNavigation";

interface ImageSliderProps {
  images: IImage[]
}

export default function ImageSlider({ images }: ImageSliderProps) {
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
          {images.map(image => (
            <SwiperSlide key={image.id}>
              <div className="h-full relative inset-0">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${image.id}`}
                  alt="Essa imagem faz parte do carrossel de imagens do passeio"
                  fill
                  priority
                  className="absolute w-auto"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </SwiperSlide>
          ))}
          <ImagesSlideNavigation
            isBeginning={sliderState.isBeginning}
            isEnd={sliderState.isEnd}
          />
        </Swiper>
      </div>
    </div>
  )
}
