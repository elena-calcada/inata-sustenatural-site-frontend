"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WhitherListSection() {
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

          <motion.div
            className="max-w-[600px] lg:w-full lg:max-w-[1200px] bg-white shadow-xl"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.03 }}
          >
            <div className="w-full p-4 sm:p-6 flex flex-col items-center justify-center lg:flex-row lg:gap-8">
              <div className="w-[337px] h-[228px] lg-xl:w-1/3 xl:w-1/4 lg:min-h-[228px] mb-4 lg:mb-0 mx-auto relative">
                <Image
                  src="/assets/aboult.png"
                  style={{ objectFit: 'cover' }}
                  fill
                  alt=""
                  priority
                  className="z-40 absolute w-auto"
                />
              </div>
              <div className="lg-xl:w-2/3 xl:w-3/4 flex flex-col gap-4">
                <span className="font-bold text-xl text-center lg:text-start">Pico da Bandeira</span>
                <p className="text-center lg:text-start">
                  Lorem ipsum dolor sit amet. Sed beatae quia id sapiente eius non magnam repellendus. Rem doloremque officia aut fugiat facere qui galisum provident sed dolores amet qui voluptas Quis nam omnis dolorem Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Sed beatae quia id sapiente eius non magnam repellendus. Rem doloremque officia aut fugiat facere qui galisum provident sed dolores amet qui voluptas Quis nam omnis dolorem Lorem ipsum dolor sit amet.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="mb-[2px] italic">Opcões: <span className="font-semibold italic">Psseio a pé</span></p>
                    <p className="italic">Nível de esforço: <span className="font-semibold italic">Alto</span></p>
                  </div>
                  <Link
                    href={"/"}
                    className="border-[3px] border-blueColor-base px-3 py-2 rounded-md text-blueColor-base font-bold hover:bg-blueColor-base hover:text-white transition-all"
                  >
                    Ver opções
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
