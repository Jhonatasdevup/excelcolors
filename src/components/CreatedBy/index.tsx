import styles from "./styles.module.css";

import InstagramIcon from "@mui/icons-material/Instagram";

export default function CreatedBy() {
  return (
    <section className={styles.sectionMain}>
      <div className={styles.divMain}>
        <p>
          © {new Date().getFullYear()} Excel Colors. Todos os
          direitos reservados.
        </p>
        <p>
          Nossa <a href="/politicadeprivacidade"> Política de Privacidade</a>{" "}
        </p>
        <div className={styles.divInsta}>
        <p>
          Site criado por 
        </p>
          <a href="https://www.instagram.com/jhonatas.dev/" target="_blank">
          <InstagramIcon sx={{ fontSize: 19 }} />
             jhonatas.dev
          </a>
        </div>
      </div>
    </section>
  );
}
