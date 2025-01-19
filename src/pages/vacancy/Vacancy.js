import styles from './Vacancy.module.css';

const Vacancy = () => {
  return (
    <>  
      <div className={styles.vacancy_container}>
        <h1>В нашу команду требуются:</h1>  
        <div className={styles.vacancy}>
          <h2 className={styles.name}><u>Врач Ветеринар</u></h2>  
          <p className={styles.description}>
            Требуется врач-ветеринар для работы на ферме.<br /> Обязателен опыт работы от 1 года и
            высшее образование. <br /> График работы: 5/2 с 9:00 до 18:00 <br /> Формат: на месте работодателя
            <br /> Связаться с нами: <u> +7 999 999 99 99</u>
          </p>
          <h2 className={styles.zp}><u>Зарплата: 70 000 рублей</u></h2>
        </div>
        <div className={styles.vacancy}>
          <h2 className={styles.name}><u>Дальнобойщик</u></h2>  
          <p className={styles.description}>
            Требуется дальнобойщик для перевозки грузов.<br /> Обязателен опыт работы от 3 года и
            наличие водительских прав категории С. <br /> График работы: 30/30 <br /> Формат: вахтовый
            <br /> Связаться с нами: <u> +7 999 999 99 99</u>
          </p>
          <h2 className={styles.zp}><u>Зарплата: 150 000 рублей</u></h2>
        </div>
        <div className={styles.vacancy}>
          <h2 className={styles.name}><u>Уборщик</u></h2>  
          <p className={styles.description}>
            Требуется уборщик для уборки территории фермы.<br /> Опыт работыне обязателен.
            Образование не важно. <br /> График работы: 5/2 с 9:00 до 18:00 <br /> Формат: на месте работодателя
            <br /> Связаться с нами:<u> +7 999 999 99 99</u>
          </p>
          <h2 className={styles.zp}><u>Зарплата: 30 000 рублей</u></h2>
        </div>
      </div>
    </>
  );
};

export default Vacancy;