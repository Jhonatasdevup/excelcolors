import Image from "next/image";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Link from "next/link";

export default function AboutHome() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Especialista em <span className={styles.primaryHighlight}>PINTURA ELETROSTÁTICA</span> e{" "}
            <span className={styles.secondaryHighlight}>JATEAMENTO</span>
          </h2>
          
          <div className={styles.divider}></div>
          
          <article className={styles.description}>
            <p className={styles.paragraph}>
              Transformamos peças metálicas com acabamento profissional e durável!
            </p>
            <p className={styles.paragraph}>
              Atendemos desde itens pequenos como rodas, luminárias e utensílios,
              até estruturas maiores como portões, grades, corrimãos e componentes
              industriais.
            </p>
            <p className={styles.paragraph}>
              Entre em contato e descubra como podemos valorizar o seu projeto com
              qualidade e excelência.
            </p>
          </article>
          <Link href={'/contato'}>
          <Button 
            variant="contained" 
            className={styles.ctaButton}
            startIcon={<LocalOfferOutlinedIcon />}
          >
            Solicite um orçamento personalizado!
          </Button>
          </Link>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              alt="Excel Colors - Pintura Eletrostática"
              src="/AboutHome.png"
              fill
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}