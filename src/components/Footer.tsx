import Image from "next/image"
import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa"
import { LuInstagram, LuPhone } from "react-icons/lu"

const Footer = () => {
  return (
    <footer className="w-full bg-backgroundFooter/25">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:max-w-[800px]">
        <Link href='/'>
          <Image src={'/assets/logoCurta.png'} width={221} height={221} alt="Logo da Psicóloga Eliane Alano" />
        </Link>

        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-3">
            <h3 className="text-center font-bold">
              Localização
            </h3>
            <div className="flex flex-col gap-1 justify-center items-center">
              <span className="p">Goiabeiras, Vitória / ES</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-center font-bold">
              Permita-se essa experiência!
            </h3>

            <span className="text-center w-[250px]">Fale com a gente, tire suas dúvidas e reserve seu passeio.</span>

            <div className="flex mb-1 justify-center items-center">
              <span className="p font-medium">Telefone: (27) 9 9246-7274 </span>
            </div>

            <ul className="flex items-center justify-center gap-6">
              <li>
                <Link
                  href="tel:+5527992467274"
                  target="_blank"
                  className=" p flex gap-2"
                >
                  <LuPhone size={26} className="text-primary" />
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.instagram.com/inata_sustenatural'
                  target={'_blank'}
                  className="p flex gap-2"
                >
                  <LuInstagram size={26} className="text-primary" />
                </Link>
              </li>
              <li>
                <Link
                  href='mailto:wallmendes2014@gmail.com'
                  target={'_blank'}
                  className="p flex gap-2"
                >
                  <AiOutlineMail size={26} className="text-primary" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/5527992467274?text=Olá,%20Wallace!%20Cheguei%20aqui%20por%20meio%20do%20seu%20site.%20Gostaria%20de%20saber%20mais%20sobre%20os%20passeios."
                  target="_blank"
                  className="p flex gap-2"
                >
                  <FaWhatsapp size={26} className="text-primary" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-blueDarkFooter">
        <div className="w-full mx-auto px-[15px] md:px-[24px] lg:px-[48px] flex flex-col items-center justify-center py-2 lg:flex-row lg:justify-between lg:max-w-[1400px]">
          <span
            className="font-dm_sans text-white"
          >
            {new Date().getFullYear()} &copy; Inata Sutenatural
          </span>
          <span className="font-dm_sans text-white"
          >
            Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
