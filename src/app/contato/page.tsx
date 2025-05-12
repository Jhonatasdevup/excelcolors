
import ContactForm from './ContatoComp'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Excel Colors",
  description: "Entre em contato com a Excel Colors agora mesmo. Atendimento ao cliente especializado. Preencha o formulário e solicite seu atendimento.",
  keywords: [
    "serviços de pintura eletrostática",
    "jateamento com ônix de alumínio",
    "preparação de superfície",
    "pintura de portões",
    "pintura de rodas",
    "revestimento metálico",
    "acabamento durável",
    "pintura industrial",
    "Excel Colors São José dos Campos",
    "pintura de móveis metálicos",
  ],
  authors: [{ name: "Excel Colors", url: "https://www.excelcolors.com" }],
  creator: "Excel Colors",
  publisher: "Excel Colors",
  metadataBase: new URL("https://www.excelcolors.com"),
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Fale Conosco | Excel Colors",
    description: "Solicite atendimento preenchendo nosso formulário. Atendimento especializado com garantia e agilidade.",
    url: "https://www.excelcolors.com/contato",
    siteName: "Excel Colors",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo.png", // substitua pelo URL real do logo
        width: 800,
        height: 600,
        alt: "Excel Colors"
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    }
  },
  twitter: {
    card: "summary_large_image",
    title: "Fale Conosco | Excel Colors",
    description: "Entre em contato com nosso atendimento especializado preenchendo o formulário.",
    site: "", // substitua com o Twitter real se tiver
    images: ["/"]
  },
  category: "Serviços",
};


export default function page() {
  return (
    <section><ContactForm/></section>
  )
}
