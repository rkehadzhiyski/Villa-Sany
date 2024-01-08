import styles from './villaInfo.module.css';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import SmallCarousel from '../carousels/smallCarousel/SmallCarousel';
import AccordionText from '../accordionText/AccordionText';

import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }

const longText = `To the south is Amareleja where you can enjoy really nice food. Alentejo is renowned for its wine, so you can visit the vineyards and do tastings, as well as sample some of the local olive oil.
Other activities in the area include horseback riding, water skiing and boat rides, as well as hot air ballooning. Because of the lack of light pollution, Alentejo is also one of the best places to stargaze in Portugal.`;

const VillaInfo = () => {
    return (
        <>
            <section className={styles.section}>
                <h2>Вила Сани</h2>
                <div className={styles['main-info-container']}>
                    <div className={styles['inner']}>
                        <div className={styles.align}>
                            <HomeOutlinedIcon />
                            200kw
                        </div>
                        <div className={styles.align}>
                            <BedOutlinedIcon />
                            3 bedrooms for 8-10 people
                        </div>
                        <div className={styles.align}>
                            <CheckCircleOutlineOutlinedIcon />
                            Ideal for couples, families & groups
                            Children welcome
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
                            Location: Countryside
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.accordion}>
                <AccordionText text={longText} />
            </section>

            <section className={styles.section}>
                <div className={styles.carusel}>
                    <SmallCarousel options={OPTIONS} />
                </div>
            </section>

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