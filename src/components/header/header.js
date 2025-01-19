import styles from './Header.module.css';
import logo from './logo.png';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Логотип" />
          <h2 className={styles.companyName}>Fermes Son</h2>
        </div>
        <nav className={styles.nav}>
          <Link
            to="/"
            data-text="Главная"
            className={location.pathname === '/' ? styles.active : ''}> Главная </Link>
          <Link
            to="/Galery" 
            data-text="Галерея"
            className={location.pathname === '/Galery' ? styles.active : ''}> Галерея </Link>
          <Link
            to="/Vacancy"
            data-text="Вакансии"
            className={location.pathname === '/Vacancy' ? styles.active : ''}>Вакансии </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;