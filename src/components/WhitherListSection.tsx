"use client"
import { TourGroup } from "@/entities/TourGroup";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import WhitherCard from "./WhitherCard";

interface WhitherProps {
  listWhither: TourGroup[] | []
}

export default function WhitherListSection({ listWhither }: WhitherProps) {
  const filteredListWhither = listWhither.filter(whither => whither.cover !== "");

  return (
    <section className="bg-background">
      <div className="overflow-hidden w-full h-full flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center">
          <motion.h2
            className="h2 text-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Nossos destinos
          </motion.h2>
          <div className="max-w-[600px] lg:w-full lg:max-w-[1200px] bg-white shadow-xl flex flex-col gap-4">
            {filteredListWhither.map(whither => (
              <WhitherCard
                key={whither.id}
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${whither.cover}`}
                title={whither.title}
                description={whither.description}
                options={whither.type_tour? whither.type_tour : ""}
                level={whither.level? whither.level : ""}
                href={`destinos/${whither.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
