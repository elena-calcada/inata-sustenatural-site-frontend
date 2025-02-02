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
import { NavLink } from "./NavLink";

interface TourDetailProps {
  images: IImage[];
  tourItem: ITourItem;
  tourGroup: TourGroup;
}

export default function TourDetail({ images, tourItem, tourGroup }: TourDetailProps) {
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
          <span className="text-blueColor-dark"> / </span>
          <NavLink href={`/passeios/${tourGroup.slug}/${tourItem.slug}`}>{tourItem.slug}</NavLink>
        </nav>
      </div>

      <section className="w-full">
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
                <div className="flex items-center justify-center mt-4 lg:mt-0">
                  <Link
                    href="https://wa.me/5527992467274?text=Olá,%20Wallace!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios."
                    target="_blank"
                    className="border-[3px] border-blueColor-base px-10 lg:px-3 py-2 rounded-md text-blueColor-base font-bold hover:bg-blueColor-base hover:text-white transition-all flex items-center justify-center gap-1"
                  >
                    <FaWhatsapp size={20} className="text-primary" />
                    Reservar
                  </Link>
                </div>
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

            {tourItem.date && (
              <div className="w-full border-t border-grayLight py-8 flex items-center lg:items-start lg:gap-0 lg:justify-between">
                <div className="w-1/2 sm:w-1/3 lg:w-1/5">
                  <h3 className="text-xl font-bold">Data</h3>
                </div>
                <div className="flex items-center justify-start w-1/2 sm:w-2/3 lg:w-4/5">
                  <p>{tourItem.date}</p>
                </div>
              </div>
            )}

            {(tourItem.meeting_point_name || tourItem.meeting_point_address || tourItem.meeting_point_description) && (
              <div className="w-full border-t border-grayLight py-8 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-start lg:justify-between">
                <div className="w-full lg:w-1/5">
                  <h3 className="text-xl font-bold">Ponto de Encontro</h3>
                </div>
                <div className="w-full flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:w-4/5">
                  <div className="flex flex-col gap-4 lg:gap-1">
                    <span>{tourItem.meeting_point_name}</span>
                    {tourItem.meeting_point_address && (
                      <div className="w-full flex items-center gap-1">
                        <div>
                          <LuMapPin size={22} className="text-textColor" />
                        </div>
                        <div>
                          <span className="">{tourItem.meeting_point_address}</span>
                        </div>
                      </div>
                    )}
                    <span>{tourItem.meeting_point_description}</span>
                  </div>
                  {tourItem.meeting_point_address && (
                    <div className="flex items-center justify-center mt-4 lg:mt-0">
                      <Link
                        href={`https://www.google.com/maps/place/${encodeURIComponent(tourItem.meeting_point_address)}`}
                        target="_blank"
                        className="text-sm bg-blueColor-base px-10 lg:px-3 py-2 rounded-md text-white font-bold hover:bg-blueColor-dark transition-all flex items-center justify-center gap-1"
                      >
                        <LuMapPin size={18} className="text-primary" />
                        Localização
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

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
                    {tourItem.meeting_point_hour && (
                      <div><span className="font-semibold">Horário: </span><span>{tourItem.meeting_point_hour}</span></div>
                    )}
                    {tourItem.level && (
                      <div><span className="font-semibold">Nível de Esforço: </span><span>{tourItem.level}</span></div>
                    )}
                    <div><span className="font-semibold">É permitido pet? </span><span>{tourItem.pet === "SIM" ? "Sim" : "Não"}</span></div>
                    {tourItem.note && (
                      <div><span className="font-semibold">Observação: </span><span>{tourItem.note}</span></div>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center mt-4 lg:mt-0">
                  <Link
                    href="https://wa.me/5527992467274?text=Olá,%20Wallace!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios."
                    target="_blank"
                    className="border-[3px] border-blueColor-base px-10 lg:px-3 py-2 rounded-md text-blueColor-base font-bold hover:bg-blueColor-base hover:text-white transition-all flex items-center justify-center gap-1"
                  >
                    <FaWhatsapp size={20} className="text-primary" />
                    Reservar
                  </Link>
                </div>
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
                      <div><span className="font-semibold text-xl text-blueColor-base">{`A partir de R$ ${tourItem.price},00`}</span></div>
                    )}
                    <div><span className="font-semibold">Forma de pagamento: </span><span>50% antecipado e o restante no embarque, ou 100% adiantado.</span></div>
                    <div><span className="font-semibold">Crianças entre 7 e 12 anos: </span><span>50% de desconto.</span></div>
                    <div><span className="font-semibold">Crianças até 7 anos: </span><span>Entrada gratuita.</span></div>
                    <div><span className="font-semibold">Doadores de Sangue: </span><span>25% de desconto, mediante apresentação do comprovante.</span></div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-4 lg:mt-0">
                  <Link
                    href="https://wa.me/5527992467274?text=Olá,%20Wallace!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios."
                    target="_blank"
                    className="text-sm bg-blueColor-base px-10 lg:px-3 py-2 rounded-md text-white font-bold hover:bg-blueColor-dark transition-all flex items-center justify-center gap-1"
                  >
                    <FaWhatsapp size={18} className="text-primary" />
                    Dúvidas
                  </Link>
                </div>
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
                <div className="flex items-center justify-center mt-4 lg:mt-0">
                  <Link
                    href="https://wa.me/5527992467274?text=Olá,%20Wallace!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios."
                    target="_blank"
                    className="text-sm bg-blueColor-base px-10 lg:px-3 py-2 rounded-md text-white font-bold hover:bg-blueColor-dark transition-all flex items-center justify-center gap-1"
                  >
                    <FaWhatsapp size={18} className="text-primary" />
                    Dúvidas
                  </Link>
                </div>
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
