import Image from "next/image";
import styles from "./styles.module.css";
import Divider from "@mui/material/Divider";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Button } from "@mui/material";
import Link from 'next/link';


export default function HeaderTop() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image 
            alt="logo Excel Colors" 
            src="/logo.png" 
            width={90} 
            height={90}
            priority
            className={styles.logo}
          />
        </div>

        {/* Localização */}
        <div className={styles.locationContainer}>
          <div className={styles.locationContent}>
            <MapOutlinedIcon fontSize="large" className={styles.locationIcon}/>
            <Divider orientation="vertical" className={styles.divider} />
            <div className={styles.address}>
              <h6 className={styles.addressTitle}>ESTAMOS LOCALIZADOS</h6>
              <p className={styles.addressText}>
                Estr. Mun. Jaguari, km 2911 - 7001 - Vila Dirce, São José dos Campos - SP, 12213-011
              </p>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className={styles.buttonsContainer}>
          <Link href={'https://wa.me/5512982510000'} target="_blank">
          <Button 
            variant="contained" 
            color="success" 
            startIcon={<WhatsAppIcon className={styles.whatsappIcon}/>}
            className={styles.whatsappButton}
          >
            <span className={styles.buttonText}>(12) 9 8251-0000</span>
          </Button>
          </Link>
          <Link href={'/contato'}>
          <Button 
            variant="outlined" 
            color="success"
            className={styles.contactButton}
          >
            Contato
          </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}