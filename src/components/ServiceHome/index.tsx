import Image from "next/image";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import Link from "next/link";

export default function ServiceHome() {
  const services = [
    { id: 1, name: "Pintura Industrial" },
    { id: 2, name: "Revestimentos Especiais" },
    { id: 4, name: "Proteção Anti-corrosiva" },
    { id: 6, name: "Acabamento Automotivo" },
    { id: 7, name: "Personalização de Cores" }
  ];

  return (
    <section className={styles.sectionMain}>
      <div className={styles.divHeader}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Conheça nossos <span className={styles.highlight}>serviços</span></h2>
          <p className={styles.subtitle}>Excelência em pintura eletrostática para todos os segmentos</p>
        </div>
        
        <div className={styles.divTras}></div>
        
        <div className={styles.divWord}>
          {["DURABILIDADE", "PRECISÃO", "EFICIÊNCIA"].map((word, index) => (
            <div key={index} className={styles.wordItem}>
              <p>{word}</p>
              {index < 2 && <EastOutlinedIcon className={styles.arrowIcon} />}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.imageWrapper}>
              <Image 
                alt={`Serviço ${service.name}`} 
                src={`/imgsServiceHome/${service.id}.png`} 
                fill
                className={styles.serviceImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <h3 className={styles.serviceTitle}>{service.name}</h3>
          </div>
        ))}
      </div>
      <Link href={'/servicos'}>
        <Button 
          variant="contained" 
          className={styles.ctaButton}
          endIcon={<PanToolAltOutlinedIcon className={styles.buttonIcon}/>}
        >
          Descubra como a pintura eletrostática pode revolucionar seus projetos!
        </Button>
      </Link>
    </section>
  );
}