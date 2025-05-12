import ClearIcon from '@mui/icons-material/Clear';

import styles from './styles.module.css'
import Image from 'next/image';

export default function ComparisonImg({beforeImage, afterImage, alt}:{beforeImage:string, afterImage:string, alt: string}) {
  return (
    <section className={styles.sectionMain}>
        <div className={styles.divImg}>
            <Image alt={alt} src={beforeImage} width={200} height={300}/>
            <p>Antes</p>
        </div>
            <ClearIcon sx={{fontSize:50, color:"#F26C28"}}/>
        <div className ={styles.divImg}>
            <Image alt={alt} src={afterImage} width={200} height={300}/>
            <p>Depois</p>
        </div>
    </section>
  )
}
