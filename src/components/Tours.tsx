"use client"
import { IImage } from '@/entities/IImage';
import { ITourItem } from '@/entities/ITourItem';
import { TourGroup } from '@/entities/TourGroup';
import { fadeIn } from '@/utils/variants';
import { motion } from "framer-motion";
import ImageSlider from './ImageSlider';
import { NavLink } from './NavLink';
import WhitherCard from './WhitherCard';

interface ImageSliderProps {
  images: IImage[];
  tourItems: ITourItem[];
  tourGroup: TourGroup;
}

export default function Tours({ images, tourItems, tourGroup }: ImageSliderProps) {
  const filteredtourItems = tourItems.filter(item => item.cover !== "");

  return(
    <main className="bg-background">
      <section className="mt-[75px] w-full h-[32vh]">
        <ImageSlider
          images={images}
        />
      </section>

      <div className="max-w-[1400px] pt-2 2xl:px-0 px-4 mx-auto">
        <nav className="w-full text-base font-medium">
          <NavLink href="/">home</NavLink>
          <span className="text-blueColor-dark"> / </span>
          <NavLink href="/passeios">passeios</NavLink>
          <span className="text-blueColor-dark"> / </span>
          <NavLink href={`/passeios/${tourGroup.slug}`}>{tourGroup.slug}</NavLink>
        </nav>
      </div>

      <section className="relative w-full">
        <div className="overflow-hidden w-full h-full flex items-center justify-center">
          <div className="container flex flex-col items-center justify-center">
            <motion.h1
              className="h2 !text-4xl text-center"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              {`Opções de passeios para o ${tourGroup.title}`}
            </motion.h1>
            <div className="max-w-[600px] lg:w-full lg:max-w-[1200px] flex flex-col gap-4">
              {filteredtourItems.map(item => (
                <WhitherCard
                  key={item.id}
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.cover}`}
                  title={item.title}
                  description={item.short_description}
                  options={item.type? item.type : ""}
                  level={item.level? item.level : ""}
                  href={`${tourGroup.slug}/${item.slug}`}
                  text="Ver detalhes"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
     </main>
  )
}
