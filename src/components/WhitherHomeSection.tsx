"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhitherHomeSection() {
  return (
    <section className="relative mt-[75px] w-full h-[50vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-cover-whither">
      <div className="container w-full flex flex-col items-center justify-center gap-4 2xl:gap-8 lg:items-start lg:justify-start">
        <motion.h1
          className="h1 text-center !text-white !font-bold xs:text-[54px] leading-none sm-lg:text-7xl lg:text-7xl 2xl:text-8xl lg:text-start"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Nossos passeios
        </motion.h1>
        <motion.p
          className="p !font-medium text-center !text-white !text-base max-w-[400px] xs:!text-base xs:max-w-[400px] lg:max-w-[700px] sm-lg:!text-xl lg:!text-lg lg:text-start"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Conheça todas as nossas opções de passeios e atividades ao ar livre na Grande Vitória / ES. Aventure-se!!!
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link
            href="/destinos"
            className="flex gap-2 items-center justify-center py-4 px-8 bg-greenButtonHover text-greenButtonText font-bold text-lg xs:text-lg rounded-xl hover:bg-greenButtonBg transition-all"
        >
            <FaWhatsapp className="h-6 w-6"/>
            <span>Reservar passeio</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
