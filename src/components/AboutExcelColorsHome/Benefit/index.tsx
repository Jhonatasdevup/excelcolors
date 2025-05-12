import { ComponentType, ReactElement } from "react";
import styles from './styles.module.css';

type BenefitProps = {
  icon: ComponentType | ReactElement; 
  title: string;
};

export default function Benefit({ icon: Icon, title }: BenefitProps) {
  return (
    <div className={styles.divMain}>
      {typeof Icon === 'function' ? <Icon /> : Icon}
      <p>{title}</p>
    </div>
  );
}