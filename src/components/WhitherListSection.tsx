"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import WhitherCard from "./WhitherCard";

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
          <div className="flex flex-col gap-4">
            <WhitherCard
              src="/assets/aboult.png"
              title="Pico da Bandeira"
              description="Lorem ipsum dolor sit amet. Sed beatae quia id sapiente eius non magnam repellendus. Rem doloremque officia aut fugiat facere qui galisum provident sed dolores amet qui voluptas Quis nam omnis dolorem Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Sed beatae quia id sapiente eius non magnam repellendus. Rem doloremque officia aut fugiat facere qui galisum provident sed dolores amet qui voluptas Quis nam omnis dolorem Lorem ipsum dolor sit amet."
              options="Psseio a pé"
              level="Alto"
              href="/"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
