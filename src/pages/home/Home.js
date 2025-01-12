import { Link } from "react-router-dom"; 
import styles from './Home.module.css'
import foto from './osnovatel 1.png'
const Home = () => {
    return (
    <>
      
        <div className={styles.home}>
        <div className={styles.container}>
        <div className={styles.whiterectangle}></div>
        <div className={`${styles.rectangle} ${styles.rectangle1}`}></div>
        <div className={`${styles.rectangle} ${styles.rectangle2}`}></div>
        </div>
            <div className={styles.deviz}>
                <h3>Почувствуй разницу!</h3>
                <h5>Еда, которой можно <span>доверять</span></h5>
            </div>
        </div>

        </>
    );
};

export default Home;