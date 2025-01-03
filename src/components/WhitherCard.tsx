"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface WhitherCardProps {
  src: string;
  title: string;
  description: string;
  options: string;
  level: string;
  href: string;
  text: string;
}

export default function WhitherCard({
  description,
   href,
   level,
   options,
   src,
   title,
   text
  }: WhitherCardProps) {
  return(
    <motion.div
    className="w-full shadow-lg bg-white"
    variants={fadeIn("up", 0.6)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.03 }}
  >
    <div className="w-full p-4 sm:p-6 flex flex-col items-center justify-center lg:flex-row lg:gap-8">
      <div className="w-[337px] h-[228px] lg-xl:w-1/3 xl:w-1/4 lg:min-h-[228px] mb-4 lg:mb-0 mx-auto relative">
        <Image
          src={src}
          style={{ objectFit: 'cover' }}
          fill
          alt=""
          priority
          className="z-40 absolute w-auto"
        />
      </div>
      <div className="lg-xl:w-2/3 xl:w-3/4 flex flex-col gap-4">
        <span className="font-bold text-xl text-center lg:text-start">{ title }</span>
        <p className="text-center lg:text-start">{ description }</p>
        <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-between sm:gap-0">
          <div>
            <p className="mb-[2px] italic">Opcões: <span className="font-semibold italic">{ options }</span></p>
            <p className="italic">Nível de esforço: <span className="font-semibold italic">{ level }</span></p>
          </div>
          <Link
            href={href}
            className="border-[3px] border-blueColor-base px-3 py-2 rounded-md text-blueColor-base font-bold hover:bg-blueColor-base hover:text-white transition-all"
          >
            {text}
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
  )
}
