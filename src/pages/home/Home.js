import { Link } from "react-router-dom"; 
import styles from './Home.module.css'
import foto from './osnovatel 1.png'
const Home = () => {
    return (
    <>
        <div className={styles.roundedbox}>
        <div className={styles.logo}>
            <img src={foto} alt="Основатель" />
        </div>
        <div className={styles.roundedtext}>Текст</div>
        </div>
           

        <div className={styles.deviz}>
            <h3>Почувствуй разницу!</h3>
            <h5>Еда, которой можно <span>доверять</span></h5>
        </div>

        </>
    );
};

export default Home;