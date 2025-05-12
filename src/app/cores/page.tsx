
import styles from "./styles.module.css";
import BoxAllColors from "./BoxAllColors";

import {
  dataColorsBlues,
  dataColorsBrowns,
  dataColorsGrays,
  dataColorsGreens,
  dataColorsOranges,
  dataColorsPurples,
  dataColorsReds,
  dataColorsWhiteandBlacks,
  dataColorsYellows,
} from "./colors";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tabela de Cores RAL | Códigos e Nomes Oficiais',
  description: 'Confira a tabela completa das cores RAL com códigos hexadecimais, nomes oficiais e organização por série (amarelos, laranjas, vermelhos, roxos, azuis e verdes).',
  keywords: [
    'cores RAL', 'tabela RAL', 'RAL código hexadecimal', 'cores industriais', 'RAL Design', 'RAL Classic',
    'tabela de cores RAL', 'RAL cores amarelas', 'RAL laranja', 'RAL vermelho', 'RAL azul', 'RAL verde', 'RAL 1000 a 6033'
  ],
  openGraph: {
    title: 'Tabela de Cores RAL | Códigos e Nomes Oficiais',
    description: 'Visualize a lista completa das cores RAL com seus respectivos nomes, códigos e representação visual.',
    url: 'https://excelcolors.com/cores',
    siteName: 'Seu Site',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tabela de Cores RAL | Códigos e Nomes Oficiais',
    description: 'Visualize a lista completa das cores RAL com seus respectivos nomes, códigos e representação visual.',
    images: ["https://excelcolors.com.br/images/servicos-capa.jpg"],
  },
  robots: 'index, follow',
};

export default function Colors() {
  return (
    <section className={styles.sectionMain}>
      <BoxAllColors colors={dataColorsYellows} title="Série Amarelos" />
      <BoxAllColors colors={dataColorsOranges} title="Série Laranjas" />
      <BoxAllColors colors={dataColorsReds} title="Série Vermelhos" />
      <BoxAllColors colors={dataColorsPurples} title="Série Roxos" />
      <BoxAllColors colors={dataColorsBlues} title="Série Azuis" />
      <BoxAllColors colors={dataColorsGreens} title="Série Verdes" />
      <BoxAllColors colors={dataColorsGrays} title="Série Cinzentos" />
      <BoxAllColors colors={dataColorsBrowns} title="Série Castanhos" />
      <BoxAllColors
        colors={dataColorsWhiteandBlacks}
        title="Série Brancos e Pretos"
      />
    </section>
  );
}
