
import WhyElectrostaticPainting from "@/components/WhyElectrostaticPainting";
import styles from "./page.module.css";
import AboutHome from "@/components/AboutHome";
import AboutExcelColorsHome from "@/components/AboutExcelColorsHome";
import ServiceHome from "@/components/ServiceHome";


export default function Home() {
  return (
    <div className={styles.page}>
      <AboutHome/>
      <AboutExcelColorsHome/>
      <WhyElectrostaticPainting/>
      <ServiceHome/>

    </div>
  );
}
