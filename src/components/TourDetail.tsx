"use client"
import { IImage } from "@/entities/IImage";
import { ITourItem } from "@/entities/ITourItem";
import { TourGroup } from "@/entities/TourGroup";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCircle, FaWhatsapp } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import ImageSlider from "./ImageSlider";

interface TourDetailProps {
  images: IImage[];
  tourItem: ITourItem;
  tourGroup: TourGroup;
}

export default function TourDetail({ images, tourItem, tourGroup }: TourDetailProps) {
  return(
    <main>
      <section className="mt-[75px] w-full h-[32vh]">
        <ImageSlider
          images={images}
        />
      </section>
      <section className="w-full bg-background">
        <div className="overflow-hidden w-full h-full flex flex-col items-center justify-center">
          <motion.div
            className="container !py-16 flex flex-col items-center md:items-start justify-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h1 className="h2 !text-5xl !mb-4 text-center">{tourGroup.title}</h1>
            <h2 className="h2 !text-3xl !mb-0">{tourItem.title}</h2>
          </motion.div>

          <motion.div
            className="container !py-0 !pb-10"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.03 }}
          >
            <div className="w-full border-t border-grayLight py-8 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-start lg:justify-between">
              <div className="w-full lg:w-1/5">
                <h3 className="text-xl font-bold">Descrição</h3>
              </div>
              <div className="w-full flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:w-4/5">
                <div className="">
                  <p>{tourItem.long_description}</p>
                </div>
                <Link
                  href="https://wa.me/5527992467274?text=Olá,%20Wallace!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios."
                  target="_blank"
                  className="border-[3px] border-blueColor-base px-3 py-2 rounded-md text-blueColor-base font-bold hover:bg-blueColor-base hover:text-white transition-all flex items-center justify-center gap-1"
                >
                  <FaWhatsapp size={20} className="text-primary" />
                  Reservar
                </Link>
              </div>
            </div>

            {tourItem.season && (
              <div className="w-full border-t border-grayLight py-8 flex items-center lg:items-start lg:gap-0 lg:justify-between">
                <div className="w-1/2 sm:w-1/3 lg:w-1/5">
                  <h3 className="text-xl font-bold">Temporada</h3>
                </div>
                <div className="flex items-center justify-start w-1/2 sm:w-2/3 lg:w-4/5">
                  <p>{tourItem.season}</p>
                </div>
              </div>
            )}

            <div className="w-full border-t border-grayLight py-8 flex items-center lg:items-start lg:gap-0 lg:justify-between">
              <div className="w-1/2 sm:w-1/3 lg:w-1/5">
                <h3 className="text-xl font-bold">Data</h3>
              </div>
              <div className="flex items-center justify-start w-1/2 sm:w-2/3 lg:w-4/5">
                <p>{tourItem.date}</p>
              </div>
            </div>

            <div className="w-full border-t border-grayLight py-8 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-start lg:justify-between">
              <div className="w-full lg:w-1/5">
                <h3 className="text-xl font-bold">Ponto de Encontro</h3>
              </div>
              <div className="w-full flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:w-4/5">
                <div className="flex flex-col gap-4 lg:gap-1">
                  <span>{tourItem.meeting_point_name}</span>
                  <div className="w-full flex items-center gap-1">
                    <div>
                      <LuMapPin size={22} className="text-textColor" />
                    </div>
                    <div>
                      <span className="">{tourItem.meeting_point_address}</span>
                    </div>
                  </div>
                  <span>{tourItem.meeting_point_description}</span>
                </div>
                <Link
                  href="https://www.google.com.br/maps/place/R.+das+Paneleiras,+55+-+Goiabeiras,+Vit%C3%B3ria+-+ES,+29075-105/@-20.2696367,-40.3057538,17z/data=!3m1!4b1!4m6!3m5!1s0xb8180f481e505b:0x838d887e07b7a61b!8m2!3d-20.2696418!4d-40.3031789!16s%2Fg%2F11b8zd4bxs?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"
                  target="_blank"
                  className="text-sm bg-blueColor-base px-3 py-2 rounded-md text-white font-bold hover:bg-blueColor-dark transition-all flex items-center justify-center gap-1"
                >
                  <LuMapPin size={18} className="text-primary" />
                  Localização
                </Link>
              </div>
            </div>

            <div className="w-full border-t border-grayLight py-8 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-start lg:justify-between">
              <div className="w-full lg:w-1/5">
                <h3 className="text-xl font-bold">Detalhes</h3>
              </div>
              <div className="w-full flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:w-4/5">
                <div className="">
                  <div className="flex flex-col gap-3 lg:gap-1">
                    {tourItem.type && (
                      <div><span className="font-semibold">Tipo de passeio: </span><span>{tourItem.type}</span></div>
                    )}
                    <div><span className="font-semibold">Percurso: </span><span>{tourItem.route_size}</span></div>
                    <div><span className="font-semibold">Duração: </span><span>{tourItem.duration}</span></div>
                    <div><span className="font-semibold">Horário: </span><span>{tourItem.meeting_point_hour}</span></div>
                    {tourItem.level && (
                      <div><span className="font-semibold">Nível de Esforço: </span><span>{tourItem.level}</span></div>
                    )}
                    <div><span className="font-semibold">É permitido pet? </span><span>{tourItem.pet === "SIM" ? "Sim" : "Não"}</span></div>
                    <div><span className="font-semibold">Observação: </span><span>{tourItem.note}</span></div>
                  </div>
                </div>
                <Link
                  href="https://wa.me/5527992467274?text=Olá,%20Wallace!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios."
                  target="_blank"
                  className="border-[3px] border-blueColor-base px-3 py-2 rounded-md text-blueColor-base font-bold hover:bg-blueColor-base hover:text-white transition-all flex items-center justify-center gap-1"
                >
                  <FaWhatsapp size={20} className="text-primary" />
                  Reservar
                </Link>
              </div>
            </div>

            <div className="w-full border-t border-grayLight py-8 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-start lg:justify-between">
              <div className="w-full lg:w-1/5">
                <h3 className="text-xl font-bold">Preço</h3>
              </div>
              <div className="w-full flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:w-4/5">
                <div className="">
                  <div className="flex flex-col gap-4 lg:gap-1">
                    {tourItem.price !== 0 && (
                      <div><span className="font-semibold text-xl text-blueColor-base">{`R$ ${tourItem.price},00`}</span></div>
                    )}
                    <div><span className="font-semibold">Forma de pagamento: </span><span>50% antecipado e o restante no embarque, ou 100% adiantado.</span></div>
                    <div><span className="font-semibold">Crianças entre 7 e 12 anos: </span><span>50% de desconto.</span></div>
                    <div><span className="font-semibold">Crianças até 7 anos: </span><span>Entrada gratuita.</span></div>
                    <div><span className="font-semibold">Doadores de Sangue: </span><span>25% de desconto, mediante apresentação do comprovante.</span></div>
                  </div>
                </div>
                <Link
                  href="https://wa.me/5527992467274?text=Olá,%20Wallace!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios."
                  target="_blank"
                  className="text-sm bg-blueColor-base px-3 py-2 rounded-md text-white font-bold hover:bg-blueColor-dark transition-all flex items-center justify-center gap-1"
                >
                  <FaWhatsapp size={18} className="text-primary" />
                  Dúvidas
                </Link>
              </div>
            </div>

            <div className="w-full border-t border-grayLight py-8 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-start lg:justify-between">
              <div className="w-1/5">
                <h3 className="text-xl font-bold">Cancelamento</h3>
              </div>
              <div className="w-full flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:w-4/5">
                <div className="">
                  <div className="flex flex-col gap-1">
                    <div><span>Em caso de chuva ou outras intercorrências, o cliente pode escolher: </span></div>
                    <div className="flex items-center gap-2 ml-6">
                      <FaCircle size={6}/>
                      <span>Valor ressarcido integralmente; ou</span>
                    </div>
                    <div className="flex items-center gap-2 ml-6">
                      <FaCircle size={6}/>
                      <span>Abrir a reserva para outros passeios disponíveis.</span>
                    </div>
                    <div><span>Caso ocorra algum problema pessoal que impeça seu comparecimento, favor entrar em contato o quanto antes.</span></div>
                  </div>
                </div>
                <Link
                  href="https://wa.me/5527992467274?text=Olá,%20Wallace!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios."
                  target="_blank"
                  className="text-sm bg-blueColor-base px-3 py-2 rounded-md text-white font-bold hover:bg-blueColor-dark transition-all flex items-center justify-center gap-1"
                >
                  <FaWhatsapp size={18} className="text-primary" />
                  Dúvidas
                </Link>
              </div>
            </div>

            {tourItem.important && (
            <div className="w-full border-t border-grayLight py-8 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-start lg:justify-between">
              <div className="w-1/5">
                <h3 className="text-xl font-bold">Importante</h3>
              </div>
              <div className="flex items-center justify-start w-4/5">
                <p>{tourItem.important}</p>
              </div>
            </div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
