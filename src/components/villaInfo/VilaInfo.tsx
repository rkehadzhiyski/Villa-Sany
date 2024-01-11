import styles from './villaInfo.module.css';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import SmallCarousel from '../carousels/smallCarousel/SmallCarousel';
import BigCarousel from '../carousels/bigCarousel/BigCarousel';
import AccordionText from '../accordionText/AccordionText';

import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }

const images = [
    'https://img.vila.bg/g/2260/184180.jpg',
    'https://img.vila.bg/g/2260/184175.jpg',
    'https://img.vila.bg/g/2260/184183.jpg',
]

const longText = `To the south is Amareleja where you can enjoy really nice food. Alentejo is renowned for its wine, so you can visit the vineyards and do tastings, as well as sample some of the local olive oil.
Other activities in the area include horseback riding, water skiing and boat rides, as well as hot air ballooning. Because of the lack of light pollution, Alentejo is also one of the best places to stargaze in Portugal.`;

const VillaInfo = () => {
    return (
        <>
            <BigCarousel />
            <section className={styles.section}>
                <h2>Вила Сани</h2>
                <div className={styles['main-info-container']}>
                    <div className={styles['inner']}>
                        <div className={styles.align}>
                            <HomeOutlinedIcon />
                            <p>200m²</p>
                        </div>

                        <div className={styles.align}>
                            <BedOutlinedIcon />
                            <p>4 стай 8 човека</p>
                        </div>

                        <div className={styles.align}>
                            <CheckCircleOutlineOutlinedIcon />
                            <p>
                                Ideal for couples, families & groups
                                Children welcome
                            </p>
                        </div>
                    </div>

                    <div className={styles['inner']}>
                        <div className={styles.align}>
                            <RestaurantOutlinedIcon />
                            Grocery shopping on request
                            Self-catering
                            All meals on request
                            Kitchen
                        </div>
                        <div className={styles.align}>
                            <LocationOnOutlinedIcon />
                            <p>
                                <span className={styles.bold}>Локация:</span> местност Буджака, Созопол,България
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <section className={styles.accordion}>
                    <AccordionText text={longText} />
                </section>

                <div className={styles.carousel}>
                    <SmallCarousel options={OPTIONS} images={images} />
                </div>

                <div className={styles['additional-info-container']}>
                    <div className={styles['additional-info-left']}>
                        <p>Вила Сани за 8 човека / 250 m²</p>
                    </div>

                    <div className={styles['additional-info-right']}>
                        <p>€1,200 / ден</p>
                    </div>
                </div>

                <div className={styles['ul-container']}>
                    <div>
                        <ul className={styles.list}>
                            <li>4 Двойни стай</li>
                            <li>1 Дневна</li>
                            <li>1 Кухненски бокс</li>
                            <li>Климатизацирани</li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.list}>
                            <li>2 Бани</li>
                            <li>Допълнителни легла*</li>
                            <li>Веранда</li>
                        </ul>
                    </div>
                </div>

                <div className={styles['important-info']}>
                    <div className={styles['info-left']}>
                        <div>
                            <h3>Included in the rates</h3>
                            <p>
                                Rates include bed/bath/pool linen, a pre-stocked pantry with basics,
                                one meal prepared by a chef (day and time to be arranged before arrival),
                                mid-week cleaning (towel/bedsheet change on request) and final cleaning.
                            </p>
                        </div>

                        <div>
                            <h3>Children & Extra beds</h3>
                            <p>
                                We are happy to have children as guests and have a dedicated room for
                                them as well as a dining table and chairs, custom-made, for them to feel special.
                                Cutlery, cups, dishes, bib, high-chair, toys, and pool toys are available.
                                Crib and other specific items might be available on request (e.g. bottle warmer, bottles, bath, etc.).
                            </p>
                        </div>
                    </div>
                    <div className={styles['info-right']}>
                        <div>
                            <h3>Minimum stay</h3>
                            <p>3 - 5 nights (check calendar for dates)</p>
                        </div>

                        <div>
                            <h3>Check in time</h3>
                            <p>after 16:00</p>
                        </div>

                        <div>
                            <h3>Check out time</h3>
                            <p>before 11:00</p>
                        </div>

                        <div>
                            <p className={styles.important}>Closed December to January</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2>Facilities & services</h2>
                        <div className={styles['ul-container']}>
                            <div>
                                <ul className={styles['check-list']}>
                                    <li>Children welcome</li>
                                    <li>Swimming poo</li>
                                    <li>WiFi</li>
                                    <li>Air conditioning</li>
                                </ul>
                            </div>
                            <div>
                                <ul className={styles['check-list']}>
                                    <li>Terrace</li>
                                    <li>BBQ area</li>
                                    <li>Safe box</li>
                                    <li>Hair dryer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>            
        </section >

            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.1802925005545!2d27.722319489214566!3d42.402605692599316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6c80e5682ec29%3A0x69a897279b09fcab!2sSani%20Holiday%20Village!5e0!3m2!1sbg!2sbg!4v1704714439177!5m2!1sbg!2sbg"
                    width="1900"
                    height="600"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
}

export default VillaInfo;