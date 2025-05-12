import Link from "next/link";
import styles from "./styles.module.css";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlaceIcon from '@mui/icons-material/Place';
import GoogleMapsEmbed from "./GoogleMapsEmbed";
export default function Footer() {
  const dataContact = [
    {
      icon: <WhatsAppIcon sx={{fontSize: 35, color:'rgb(203, 203, 203)'}}/>,
      title: "WhatsApp",
      data: "(12) 9 8251-0000",
      link: "https://wa.me/5512982510000"
    },
    {
      icon: <InstagramIcon sx={{fontSize: 35, color:'rgb(203, 203, 203)'}}/>,
      title: "Instagram",
      data: "@excelcolors",
      link:"https://www.instagram.com/excelcolors/"
    },
    {
      icon: <MailOutlineIcon sx={{fontSize: 35, color:'rgb(203, 203, 203)'}}/>,
      title: "Email",
      data: "excelcolorsbrasil@gmail.com",
      link:"mailto:excelcolorsbrasil@gmail.com"
    },
  ];

  return (
    <footer className={styles.footerMain}>
      <section className={styles.sectionMain}>
        <div className={styles.menu}>
          <h6>SITE</h6>
          <ul>
            <li>
              <Link href="/" className={styles.link}>
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} /> Início
              </Link>
            </li>
            <li>
              <Link href="/#sobre" className={styles.link}>
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} /> Sobre{" "}
              </Link>
            </li>
            <li>
              <Link href="/servicos" className={styles.link}>
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} /> Serviços
              </Link>
            </li>
            <li>
              <Link href="/cores" className={styles.link}>
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} /> Cores
              </Link>
            </li>
            <li>
              <Link href="/contato" className={styles.link}>
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} /> Contato
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.divData}>
          <h5>Atendimento</h5>
          <div className={styles.divService}>
            {dataContact.map((item, index) => (
              <div key={index} className={styles.divBoxService}>
                {item.icon}
                <Link href={item.link} target="_blank" style={{textDecoration: 'none'}}>
                <div>
                  <h6>{item.title}</h6>
                  <p>{item.data}</p>
                </div>
                </Link>
              </div>
            ))}
          </div>
          <h5>Localização</h5>
            <div className={styles.divLocation}>
              <PlaceIcon sx={{fontSize: 30, color:'rgb(203, 203, 203)'}}/>
              <p>Estr. Mun. Jaguari, km 2911 - 7001 - Vila Dirce, São José dos Campos - SP, 12213-011</p>
            </div>
        </div>

        <div className={styles.divMap}>
            <GoogleMapsEmbed width="300" height="250"/>
        </div>
      </section>

    </footer>
  );
}
