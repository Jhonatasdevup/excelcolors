import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import CreatedBy from "@/components/CreatedBy";
import WhatsAppButton from "@/components/WhatsAppButtom";
import CookieConsent from "@/components/CookieConsent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Excel Colors | Pintura Eletrostática e Jateamento em São José dos Campos",
  description:
    "Excel Colors é especialista em pintura eletrostática e jateamento. Transformamos peças metálicas com acabamento profissional, durável e sustentável. Atendemos desde itens pequenos até grandes estruturas industriais.",
  keywords: [
    "pintura eletrostática",
    "jateamento",
    "pintura a pó",
    "acabamento metálico",
    "revestimento industrial",
    "proteção anticorrosiva",
    "São José dos Campos",
    "Excel Colors",
    "serviço de pintura SP",
    "pintura de portões",
    "pintura de rodas",
    "pintura de móveis metálicos",
  ],
  authors: [{ name: "Excel Colors", url: "https://excelcolors.com.br" }],
  creator: "Excel Colors",
  publisher: "Excel Colors",
  metadataBase: new URL("https://excelcolors.com.br"),
  alternates: {
    canonical: "https://excelcolors.com.br",
  },
  openGraph: {
    title: "Excel Colors | Pintura Eletrostática e Jateamento",
    description:
      "Especialistas em pintura eletrostática e jateamento em São José dos Campos. Qualidade, durabilidade e estética com atendimento especializado.",
    url: "https://excelcolors.com.br",
    siteName: "Excel Colors",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://excelcolors.com.br/images/capa-site.jpg", // substitua pelo caminho real da imagem
        width: 1200,
        height: 630,
        alt: "Excel Colors - Pintura Eletrostática e Jateamento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel Colors | Pintura Eletrostática e Jateamento",
    description:
      "Transformamos peças metálicas com acabamento profissional, proteção duradoura e compromisso com prazos. Conheça a Excel Colors!",
    images: ["https://excelcolors.com.br/images/capa-site.jpg"], // mesma imagem do Open Graph
    creator: "@excelcolors",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className}`}>
        <HeaderTop/>
        <Navbar/>
        {children}
        <Footer/>
        <CreatedBy/>
        <WhatsAppButton/>
        <CookieConsent/>
      </body>
    </html>
  );
}
