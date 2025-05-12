import styles from './styles.module.css'

interface colorsType {
    Numero: string;
    Hex: string;
    Name: string;
}



export default function BoxAllColors({colors, title}: {colors: colorsType[]; title: string;}) {
    
  return (
    <div className={styles.divMain}>
      <h4>{title}</h4>
        <div  className={styles.divColorsAll}>
          {colors.map((item, index)=>(
            <div key={index} className={styles.divBoxColor} style={{backgroundColor:`${item.Hex}`}}>
              <div className={styles.divInfoBox}>
                <p>{item.Name}</p>
                <p>{item.Numero}</p>
                <p>{item.Hex}</p>
              </div>

            </div>
          ))}
        </div>

  </div>
  )
}
