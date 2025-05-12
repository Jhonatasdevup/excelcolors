import styles from "./styles.module.css";
import { Divider } from "@mui/material";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import SecurityIcon from "@mui/icons-material/Security";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import BuildIcon from "@mui/icons-material/Build";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShieldIcon from "@mui/icons-material/Shield";

export default function WhyElectrostaticPainting() {
  const benefits = [
    {
      title: "Acabamento Uniforme e de Alta Qualidade",
      description: "A pintura eletrostática garante um acabamento liso e homogêneo, sem escorrimentos ou marcas de pincel, valorizando a estética do produto final com aspecto profissional e refinado.",
      icon: <FormatPaintIcon className={styles.icon} />,
    },
    {
      title: "Alta Aderência e Durabilidade",
      description: "O processo utiliza carga elétrica para fixar a tinta ao metal, proporcionando excelente aderência. Isso torna a pintura muito mais resistente a riscos, corrosão, impactos e desgaste do tempo.",
      icon: <SecurityIcon className={styles.icon} />,
    },
    {
      title: "Sustentabilidade e Baixo Impacto Ambiental",
      description: "A tinta em pó usada na pintura eletrostática não contém solventes tóxicos e não libera gases prejudiciais, além de permitir o reaproveitamento do pó excedente, reduzindo o desperdício.",
      icon: <ForestOutlinedIcon className={styles.icon} />,
    },
    {
      title: "Versatilidade de Aplicação",
      description: "Ideal para metais como alumínio, ferro e aço, a pintura eletrostática é utilizada em móveis, esquadrias, portões, estruturas industriais, eletrodomésticos e muito mais, oferecendo ampla aplicabilidade.",
      icon: <BuildIcon className={styles.icon} />,
    },
    {
      title: "Custo-benefício no Longo Prazo",
      description: "Apesar do investimento inicial, a durabilidade da pintura reduz a necessidade de manutenção ou repintura frequente, gerando economia e mais eficiência ao longo do tempo.",
      icon: <AttachMoneyIcon className={styles.icon} />,
    },
    {
      title: "Proteção Contra Agentes Externos",
      description: "A camada de tinta cria uma barreira protetora contra umidade, raios UV, produtos químicos e variações de temperatura, garantindo maior vida útil às peças mesmo em ambientes externos ou agressivos.",
      icon: <ShieldIcon className={styles.icon} />,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Por que escolher a pintura <span className={styles.highlight}>eletrostática?</span></h2>
        <p className={styles.subtitle}>Tecnologia avançada que combina qualidade, durabilidade e sustentabilidade</p>
      </div>
      
      <div className={styles.benefitsGrid}>
        {benefits.map((benefit, index) => (
          <div className={styles.benefitCard} key={index}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                {benefit.icon}
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
            </div>
            <Divider className={styles.divider} />
            <p className={styles.cardDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}