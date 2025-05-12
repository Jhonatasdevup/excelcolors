import Benefit from './Benefit'
import styles from './styles.module.css'

import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";



export default function AboutExcelColorsHome() {
    const dataBenefit = [
        {
            icon: <DesignServicesIcon sx={{fontSize: 40, color: ' #F26C28'}}/>,
            title:'Acabamento profissional'
        },
        {
            icon:<SecurityIcon sx={{fontSize: 40, color: ' #F26C28'}}/>,
            title:'Proteção duradoura'
        },
        {
            icon:<AccessTimeIcon sx={{fontSize: 40, color: ' #F26C28'}}/>,
            title:'Compromisso com prazos'
        },
        {
            icon:<SupportAgentIcon sx={{fontSize: 40, color: ' #F26C28'}}/>,
            title:'Atendimento especializado'
        },
        {
            icon:<EnergySavingsLeafIcon sx={{fontSize: 40, color: ' #F26C28'}}/>,
            title:'Tecnologia sustentável'
        },
    ]
  return (
    <section className={styles.sectionMain} id='sobre'>
        <div className={styles.divMain}>
            <div className={styles.divLogo}></div>
            
            <h4>Soluções em Pintura Eletrostática e Jateamento com Alto Padrão de Qualidade</h4>
            <p>A Excel Colors é referência em pintura eletrostática a pó e jateamento, oferecendo soluções de alta performance e qualidade para proteção e acabamento, sempre com foco na qualidade, durabilidade e estética. Nosso processo garante um acabamento uniforme, resistência a corrosão, economia a longo prazo e menor impacto ambiental. Escolher a Excel Colors é contar com:</p>
            <div className={styles.divAllBenefit}>
            {dataBenefit.map((item,index)=>(
                <div key={index}>
                <Benefit title={item.title} icon={item.icon}/>
                </div>
            ))}
            
        </div>
        </div>

    </section>
  )
}
