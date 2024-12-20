"use client"
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeAboultSection() {
  return (
    <section className="bg-background">
      <div className="overflow-hidden w-full h-full flex items-center justify-center">
        <div className="container">
          <motion.h2
            className="h2 text-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            Quem é o Inata?
          </motion.h2>
          <div className="w-full flex flex-col gap-8 items-center justify-center xl:flex-row xl:gap-16">
            <motion.div
              className={"relative shadow-xl w-[334px] h-[257px] md:w-[480px] md:h-[370px] xl:h-[450px]"}
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src="/assets/aboult.png"
                style={{ objectFit: 'cover' }}
                fill
                alt=""
                priority
                className="z-40 absolute rounded-[5px] w-auto"
              />
            </motion.div>
            <motion.div
              className="z-40 flex flex-col gap-4 lg-xl:w-[80%] xl:w-[55%]"
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.05 }}
            >
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. 
              </p>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. 
              </p>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. 
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}