import BigCarousel from '../carousels/bigCarousel/BigCarousel';
import Button from '@mui/material/Button';

import styles from './homePage.module.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <BigCarousel />
            <section className={styles['top-section']}>
                <h2 className={styles.heading}>За нас</h2>
                <div className={styles['info-container']}>
                    <p className={styles.info}>
                        Добре дошли в нашия затворен комплекс в Созопол - идеалното място за тези, които търсят уют и спокойствие.
                        Всеки момент в нашия комплекс е наситен с удоволствие - от открития басейн до градината.
                    </p>
                    <p className={styles.info}>
                        Самостоятелните вили са с капацитет до 8 души и общо 150 кв.м., напълно климатизирани.
                        Кухнята е оборудвана, а трапезарията и всекидневната създават пространство за споделяне на приятни моменти.
                    </p>
                    <p className={styles.info}>
                        Вилите са обзаведени с необходимото за една приятна почивка - пералня,телевизия, интернет.
                        Самостоятелната веранда ви предоставя уединено пространство с изглед към градината и басейна, където може да се насладите на спокойствието.
                    </p>
                </div>
            </section>

            <section className={styles['bottom-section']}>
                <div className={styles['inner-container']}>
                    <div className={`${styles['image-container']} ${styles['zoom-effect']}`}>
                        <img className={styles.image} src="https://img.vila.bg/g/2260/184188.jpg" alt="" />
                    </div>
                    <div className={`${styles['image-container']} ${styles['zoom-effect']}`}>
                        <img className={styles.image} src="https://img.vila.bg/g/2260/184153.jpg" alt="" />
                    </div>
                    <div className={`${styles['image-container']} ${styles['zoom-effect']}`}>
                        <img className={styles.image} src="https://img.vila.bg/g/2260/184155.jpg" alt="" />
                    </div>
                    <div className={`${styles['image-container']} ${styles['zoom-effect']}`}>
                        <img className={styles.image} src="https://img.vila.bg/g/2260/184188.jpg" alt="" />
                    </div>
                    <div className={`${styles['image-container']} ${styles['zoom-effect']}`}>
                        <img className={styles.image} src="https://img.vila.bg/g/2260/184153.jpg" alt="" />
                    </div>
                    <div className={`${styles['image-container']} ${styles['zoom-effect']}`}>
                        <img className={styles.image} src="https://img.vila.bg/g/2260/184155.jpg" alt="" />
                    </div>
                </div>

                <p className={styles.info}>За още снимки посетете галерията</p>
                
                <Link to="/">
                    <Button sx={{ color: '#3f3f43'}} size="large">Галерия</Button>
                </Link>
            </section>
        </>
    );
}

export default HomePage;