import Link from 'next/link';
import styles from './styles.module.css';
import ArrowForward from '@mui/icons-material/ArrowForward';

export default function ContactCTA() {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Precisa de ajuda profissional?</h2>
          <p className={styles.subtext}>
            Nossa equipe especializada está pronta para te atender. Soluções rápidas e personalizadas para seu negócio.
          </p>
        </div>
        <Link href="/contato" className={styles.ctaButton}>
          Fale conosco agora
          <ArrowForward className={styles.arrowIcon} />
        </Link>
      </div>
    </div>
  );
}