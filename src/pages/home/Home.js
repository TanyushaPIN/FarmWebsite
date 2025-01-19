import styles from './Home.module.css'
import foto from './osnovatel 1.png'
import video from './chichen.mov'
import cow from './cow.png'
import meat from './meat.png'
import tractor from './tractor.png'
const Home = () => {
    return (
    <>
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.whiterectangle}>
                    <img src={foto} alt="Основатель" />
                    <p className={styles.p_osnovatel}>Наш величайший основатель <strong>Александр Костылев</strong> положил начало нашему фермерскому делу в 1997 году. Он был решительным человеком, который превратил свою мечту в реальность, открыв свою ферму. Его страсть к животноводству вдохновляла коллектив. Он создал место, где природа и люди гармонично сосуществуют.
                    Спустя время эта ферма стала полноценным производством. Мы с гордостью несём его наследие и развиваем производство.</p>
                </div>
                 <div className={`${styles.rectangle} ${styles.rectangle1}`}>
                    <div className={styles.p_rectangle}>
                        <p>     
                            Три главных правила, созданных нашим основателем, которым мы следуем по сей день.
                            <hr/>
                            1. <strong>Уважение к природе. </strong>
                            Это позволяет нам выращивать здоровый и сильный скот.
                            <hr/>
                            2. <strong>Уважение к  труду. </strong>
                            Мы ценим труд каждого и обеспечиваем справедливые условия работы.
                            <hr/>
                            3.<strong>Качество превыше всего.</strong> 
                            Мы стремимся к высочайшему качеству продукции.
                        </p>
                    </div>
                </div>
                <div className={`${styles.rectangle} ${styles.rectangle2}`}>
                    <div className={styles.p_rectangle}>
                        <p> <strong>Ферма "Сын Фермера" </strong>отличается своим подходом к работе. Мы используем экологически чистые методы, 
                            выдерживая баланс между природой и производством. Не используем химические  удобрения и обманные методы. 
                            Одно из наших отличий это то, что даже корм, который едят наши животные мы выращиваем сами и следим за его качеством. Благодаря этому наша ферма не вредит окружающей среде.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.deviz}>
                <h3>Почувствуй разницу!</h3>
                <h5>Еда, которой можно <span>доверять</span></h5>
            </div>
            <div className={styles.hexagon}> 
                <img src={cow} alt="cow" />
                <p>Налаженные поставки продуктов для любого бизнеса. <br/><strong>Просто и легко!</strong></p>
            </div>
            <div className={`${styles.hexagon} ${styles.hexagon2}`} > 
                <img src={meat} alt="meat" />
                <p>Приобретайте здоровое животное для своих целей и корм для него.<br/><strong>Много корма!</strong> </p>
            </div>
            <div className={`${styles.hexagon} ${styles.hexagon3}`} >
                <img src={tractor} alt="tractor" />
                <p>Приходите на работу в наш дружный коллектив! <br/><strong>Мы ждём Вас! </strong></p>
            </div>
            <div className={`${styles.hexagon} ${styles.hexagon4}`} >  
                <video 
                    src={video} 
                    type="video/quicktime"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>
        </div>
    </>
    );
};

export default Home;