import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inatasustenatural.com.br'),
  title: "Inata Sustenatural - Vitória/ES",
  description: "Os melhores passeios turísticos da Grande Vitória - ES",
  keywords: ["Espírito Santo", "Vitória/ES", "Vitória", "Vitória, Espírito Santo", "Grande Vitória", "Grande Vitória, Espírito Santo", "Grande Vitória/ES", "Vila Velha", "Vila Velha/ES", "Vila Velha, Espírito Santo", "capixaba", "Manguezal de Goiabeiras", "Manguezal de Goiabeiras/ES", "Manguezal de Goiabeiras, Espírito Santo", "Manguezal de Goiabeiras, Vitória/ES", "Manguezal de Goiabeiras, Vitória, Espírito Santo", "passeio", "passeios", "passeios turísticos", "passeios turísticos no Espírito Santo", "passeios turísticos em Vitória/ES", "passeios turísticos em Vitória, Espírito Santo", "passeios turísticos pelo Manguezal de Goiabeiras", "passeios turísticos pelo Manguezal de Goiabeiras em Vitória/ES", "passeios turísticos pelo Manguezal de Goiabeiras em Vitória, Espírito Santo", "turismo", "Turismo no Espírito Santo", "Turismo capixaba", "turismo em Vitória/ES", "turismo em Vitória, Espírito Santo", "aventura", "aventura ao ar livre", "avetura no Espírito Santo", "aventura ao ar livre em Vitória/ES", "aventura ao ar livre em Vitória, Espírito Santo", "Inata", "Inata Sustenatural", "Passeios Inata Sustebatural", "Inata Sustenatural turismo", "Caiaque", "passeio de caiaque", "passeio de caiaque no Espírito Santo", "passeio de caiaque em Vitória/ES", "Passeio de caiaque em Vitória, Espírito Santo", "passeio de caiaque pelo Manguezal de Goiabeiras", "passeio de caiaque pelo Manguezal de Goiabeiras em Vitória/ES", "passeio de caiaque pelo Manguezal de Goiabeiras em Vitória, Espírito Santo", "barco", "passeio de barco", "passeio de barco no Espírito Santo", "passeio de barco em Vitória/ES", "Passeio de barco em Vitória, Espírito Santo", "passeio de barco pelo Manguezal de Goiabeiras", "passeio de barco pelo Manguezal de Goiabeiras em Vitória/ES", "passeio de barco pelo Manguezal de Goiabeiras em Vitória, Espírito Santo", "ecoturismo", "turismo sustentável", "turismo responsável", "experiências sustentáveis", "aventura sustentável", "conexão com a natureza", "experiências únicas no Espírito Santo", "fauna e flora do Espírito Santo", "belezas naturais do Espírito Santo", "natureza em Vitória", "passeios para famílias", "passeios para casais", "passeios em grupo", "aventura para crianças", "Rota das Baleias Jubarte","Passeio de caiaque", "Remada em Vitória", "Passeio de barco", "Passeio no ES", "Remada no ES", "Trilha", "Trilha à pé", "Trilha na água", "Trilha na cachoeira", "Cachoeira em Vitória", "Vale das Cachoeiras", "Piapitangui", "Cachoeiras de Piapitangui", "Trilha em Vitória", "Natureza", "Passeio ecológico", "Passeio ecológico em Vitória", "Panela de barro", "Manguezal", "Mangrove", "Remada na praia", "Turismo sustentável", "Turismo de Baleia", "Caiaque", "remar", "O que fazer em Vitória", "Sustentabilidade", "Lixo zero", "Passeio em Vitória", "Férias em Vitória", "Quero ver baleia", "Quero ver baleia em Vitória", "Visualização de baleia jubarte em Vitória", "Quero ver baleia jubarte", "Baleia jubarte", "Projeto baleia jubarte", "Rota da baleia jubarte", "Mestre Álvaro", "Morro Mestre Álvaro", "Trilha no Mestre Álvaro", "Mestre Álvaro Serra", "Paneleiras de Goiabeiras", "Galpão das Paneleiras de Goiabeiras", "Agência ecoturismo", "Agência turismo de aventura em Vitória-ES", "Agências turismo de aventura em Vitória-ES", "Agências ecoturismo", "Agência ecoturismo em vitória-ES", "Agências ecoturismo em vitória-ES", "Ecoturismo Iha das Caieiras", "Caiaque Ilha das Caieiras", "Passeio de barco Ilha das Caieiras", "Passeios de barco Ilha das Caieiras", "Ecoturismo Ilha das Caieiras", "Aluguel  de barcos Ilha das Caieiras", "Aluguel de barcos em vitória-ES", "Passeios Ilha das Caieiras", "Passeio de barco em Vila Velha", "Passeios de barco em Vila Velha", "Passeio de caiaque em Vila Velha", "Passeios de caiaque em Vila Velha", "Ecoturismo em em Vila Velha", "Prainha de Vila Velha", "Ilha das Caieiras"],
  openGraph: {
    title: "Inata Sustenatural - Vitória/ES",
    description: "Os melhores passeios turísticos de Vitória/ES",
    url: "https://www.inatasustenatural.com.br",
    siteName: "Inata Sustenatural",
    images: [
      {
        url: "/openGraphImage.png",
        alt: "Um conjunto de quatro imagens. A primeira mostra o salto de uma baleia jubarte no mar; a segunda é a vista do nascer do sol no Pico da Bandeira; a terceira mostra um grupo de pessoas em caiaques em um Manguezal, posando para a foto; a quarta mostra um casal em um barco passeando pelo manguezal ao por do sol."
      }
    ],
    locale: "pt-BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
