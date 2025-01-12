import styles from './Futter.module.css';
import logoVk from './vk.png';
import logoYoutube from './you.png';
import logoTg from './tg.png';
import React from 'react';
import MapComponent from './map.js';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.container}>
          <h2 className={styles.containerTitle}>Связь с Нами</h2>
          <p className={styles.containerText}>+7 (9xx) xxx-xx-xx</p>
          <p className={styles.containerText}>+7 (9xx) xxx-xx-xx</p>
          <p className={styles.containerText}>+7 (9xx) xxx-xx-xx</p>
          <p className={styles.containerText}>mailpochtaferma.@mail.ru</p>
          <p className={styles.containerText}>mailpochtaferma2.@mail.ru</p>
        </div>
        <div className={styles.container}>
          <h2 className={styles.containerTitle}>Будьте с Нами </h2>
            <div className={styles.iconscontainer}>
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                <img src={logoVk} alt="ВКонтакте" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <img src={logoYoutube} alt="Ютуб" />
              </a>
              <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                <img src={logoTg} alt="Телеграм" />
              </a>
            </div>
          </div>
          <div className='map-container'>
           <MapComponent />
          </div>
      </div>
    </footer>
  );
};

export default Footer;