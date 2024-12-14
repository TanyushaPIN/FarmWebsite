import styles from './Header.module.css'; 
import logo from './logo.png';

const Header = () => {

  return (
    <header className={styles.header}>
    <div className={styles.logo}>
        <img src={logo} alt="Логотип" />
    </div>
    </header>
  );
};

export default Header;
