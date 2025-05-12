import Image from "next/image";
import styles from "./styles.module.css";
import ServicesGallery from "./components/ServicesGallery";
import ContactCTA from "./components/ContactCTA";
import { Metadata } from "next";

export const metadata: Metadata = {

  title: "Serviços de Pintura Eletrostática e Jateamento | Excel Colors",
  description:
    "Conheça os serviços da Excel Colors: pintura eletrostática com acabamento profissional e jateamento com ônix de alumínio quando necessário. Qualidade e durabilidade em cada detalhe!",
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
  authors: [{ name: "Excel Colors", url: "https://excelcolors.com.br" }],
  creator: "Excel Colors",
  publisher: "Excel Colors",
  metadataBase: new URL("https://excelcolors.com.br"),
  alternates: {
    canonical: "https://excelcolors.com.br/servicos",
  },
  openGraph: {
    title: "Serviços de Pintura Eletrostática e Jateamento | Excel Colors",
    description:
      "Excelência em pintura eletrostática e jateamento. Acabamento impecável, proteção contra corrosão e durabilidade. Confira todos os nossos serviços!",
    url: "https://excelcolors.com.br/servicos",
    siteName: "Excel Colors",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://excelcolors.com.br/images/servicos-capa.jpg", // ajuste esse link conforme a imagem que você usar
        width: 1200,
        height: 630,
        alt: "Peças metálicas com pintura eletrostática da Excel Colors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços Excel Colors | Pintura Eletrostática e Jateamento",
    description:
      "Na Excel Colors, a qualidade começa na preparação. Jateamento preciso e pintura eletrostática durável. Fale com nossa equipe especializada!",
    images: ["https://excelcolors.com.br/images/servicos-capa.jpg"],
    creator: "",
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


export default function Servicos() {

  const dataImgs = ['/imgsServiceHome/1.png','/imgsServiceHome/2.png','/imgsServiceHome/3.png','/imgsServiceHome/4.png','/imgsServiceHome/5.png','/imgsServiceHome/6.png','/imgsServiceHome/7.png']

  return (
    <section className={styles.sectionMain}>
      <article className={styles.articleTitle}>
      <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Nossa prioridade é a <span className={styles.highlight}>excelência</span> em cada detalhe da pintura eletrostática.
        </h2>
        
        <div className={styles.divider}></div>
        
        <p className={styles.description}>
          Na <strong>Excel Colors</strong>, unimos tecnologia de ponta, insumos de alta qualidade e uma equipe especializada para garantir:
        </p>
        
        <ul className={styles.features}>
          <li>
            <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            Qualidade impecável
          </li>
          <li>
            <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            Alta proteção contra corrosão
          </li>
          <li>
            <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            Longa durabilidade em cada peça
          </li>
        </ul>
        
        <p className={styles.description}>
          Valorizamos seu projeto com cores vivas e alta qualidade, ideal para aplicações <span className={styles.featureTag}>residenciais</span>, <span className={styles.featureTag}>industriais</span> e <span className={styles.featureTag}>comerciais</span>. Seja em pequenas ou grandes estruturas, nossa pintura entrega resultados que impressionam.
        </p>
      </div>
      </div>
      </article>
    {/**--------------------------------------------------------------- */}
    <section className={`${styles.sectionService}`}>
      <div className={styles.servicesContainer}>
    
        <div className={styles.serviceCard}>
          <div className={styles.imageWrapper}>
            <Image
              alt="Jateamento"
              src='/pageService/Jateamento.jpg'
              fill
              className={styles.serviceImage}
              priority
            />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.serviceTitle}>Jateamento</h2>
            <p className={styles.serviceText}>
              Na Excel Colors, sabemos que um bom acabamento começa com uma preparação adequada da superfície. Por isso, <span className={styles.highlight}>quando necessário</span>, oferecemos o serviço de jateamento, garantindo maior aderência da tinta e durabilidade no resultado final. Utilizamos métodos tradicionais e, quando o projeto exige mais precisão e cuidado, aplicamos o jateamento com <span className={styles.highlight}>ônix de alumínio</span>, uma alternativa eficiente e menos agressiva ao material.
            </p>
          </div>
        </div>

        {/* Segundo serviço - imagem à direita */}
        <div className={`${styles.serviceCard}`}>
          <div className={styles.textContent}>
            <h2 className={styles.serviceTitle}>Pintura Eletrostática</h2>
            <p className={styles.serviceText}>
              Na Excel Colors, a gente sabe que cada detalhe faz diferença. Por isso, oferecemos o serviço de <span className={styles.highlight}>pintura eletrostática</span> com o cuidado e a qualidade que você procura. Esse processo garante um acabamento bonito, liso e duradouro, perfeito para proteger suas peças e valorizar ainda mais o visual. Seja um portão, uma roda, um móvel ou qualquer item metálico, nossa pintura oferece <span className={styles.highlight}>resistência</span>, <span className={styles.highlight}>cor viva</span> e um toque <span className={styles.highlight}>profissional</span> que faz toda a diferença.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              alt="Pintura Eletrostática"
              src='/pageService/pinturaPo.jpg'
              fill
              className={styles.serviceImage}
            />
          </div>
        </div>
      </div>
    </section>
    {/**--------------------------------------------------------------- */}
    

    <ServicesGallery dataImgs={dataImgs} />

    <ContactCTA/>
    </section>
  );
}
