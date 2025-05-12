import React from 'react';
import styles from './styles.module.css'

interface GoogleMapsEmbedProps {
  width?: string;
  height?: string;
}

const GoogleMapsEmbed: React.FC<GoogleMapsEmbedProps> = ({
  width = '600',
  height = '450',
}) => {
  return (
    <div className={styles.googlemapscontainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d217.92093252044708!2d-45.92184363935333!3d-23.16157820376374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1746674048544!5m2!1spt-BR!2sbr"
        width={width}
        height={height}
        style={{ border: 0, borderRadius:10 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Excel Colors"
      />
    </div>
  );
};

export default GoogleMapsEmbed;