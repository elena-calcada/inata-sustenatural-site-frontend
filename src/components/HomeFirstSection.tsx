"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HomeFirstSection() {
  return (
    <section className="relative mt-[75px] w-full h-[85vh] flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/initialImage2.png"
          alt="Capa da página inicial"
          fill
          quality={100}
          priority
          className="object-cover"
        />
      </div>

      <div className="container w-full flex flex-col items-center justify-center gap-8 lg:items-start lg:justify-start 2xl:h-[50vh]">
        <motion.h1
          className="h1 text-center !text-white !font-extrabold xs:text-[54px] leading-none sm-lg:text-7xl lg:text-8xl lg:text-start"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Inata Sustenatural
        </motion.h1>
        <motion.p
          className="p !font-semibold text-center !text-white !text-base max-w-[500px] xs:!text-base xs:max-w-[400px] lg:max-w-[900px] sm-lg:!text-xl lg:!text-xl lg:text-start"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Os melhores pesseios turísticos da Grande Vitória / ES. Atividades, diversão, aventuras e vivências ao ar livre.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link
            href="/destinos"
            className="flex gap-4 items-center justify-center py-4 px-8 bg-greenButtonHover text-greenButtonText font-bold text-2xl xs:text-lg rounded-xl hover:bg-greenButtonBg transition-all"
        >
            <span>Nossos Passeios</span>
            <FaArrowRightLong/>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
