"use client"
import { IImage } from '@/entities/IImage';
import ImageSlider from './ImageSlider';

interface ImageSliderProps {
  images: IImage[]
}

export default function Tours({ images }: ImageSliderProps) {
  return(
    <>
      <section className="mt-[75px] w-full h-[32vh]">
        <ImageSlider
          images={images}
        />
      </section>
      <section className="relative w-full">
        <div className="container">
          OUTRA SEÇÃO
        </div>
      </section>
    </>
  )
}
