import styles from './villaInfo.module.css';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import SmallCarousel from '../carousels/smallCarousel/SmallCarousel';
import BigCarousel from '../carousels/bigCarousel/BigCarousel';
import AccordionText from '../accordionText/AccordionText';

import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = { loop: true }

const images = [
    'https://img.vila.bg/g/2260/184180.jpg',
    'https://img.vila.bg/g/2260/184175.jpg',
    'https://img.vila.bg/g/2260/184183.jpg',
]

const accordion = {
    heading: 'An introduction to Villa Castelo',
    main: `What is the story behind Villa Castelo, what was your inspiration to create it?
    Originally, we wanted a holiday house for ourselves and it was only intended for personal use. But then we thought that maybe other people would want to stay in Alentejo and decided to open it up to guests. It’s a private area with privileged views toward a castle and we wanted to share that.`,
    preview: ' Our idea was to create something minimalistic that didn’t have a big impact on the landscape.',
    hidden: `Our idea was to create something minimalistic that didn’t have a big impact on the landscape. It’s subtle. We also wanted something that was the opposite of what you usually find in Alentejo, which is old houses that are cold and uncomfortable in the wintertime. Along the coast, you can find lots of modern houses but not near the Spanish border where we are. So we invested in all the best materials and insulation, as well as heated floors.
    I’m a physics engineer and my husband has an IT company, so we worked with an architect on the project. We wanted a lot of wood and a lot of glass to enjoy the landscape outside. I love big windows and the feeling of not being sure whether you’re inside or outside. Sometimes you see big houses with lots of rooms. But then everyone stays together in one room. I wanted a design where you could be inside or outside and feel as though you were all together.
    How would you describe the atmosphere and the interior design of the villa?
    When I’m there, I feel like I’m in a bubble and time slows down. The days are really long and quiet — you have time to think. In the city, I am always rushing and thinking about all the stuff I have to do. When I go to Alentejo, my mind and body slow down. I have time to think and breathe and enjoy what is around me.
    To you personally, what is so special about the house?
    It’s the quiet and the silence - the serene feeling I get when I’m there. I like to sit on the terrace beside the pool and enjoy the infinite view. There are no buildings or trees blocking the view. Last New Year’s Eve, we could see fireworks from six different towns.
    I also love the night sky, which is amazing. You can see shooting stars every night and satellites passing by, as well as all the colours of the Milky Way. You don’t need any equipment, just the naked eye.
`,
}

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
                            <p>4 стаи 8 човека</p>
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
                    <AccordionText text={accordion} />
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
                    <ul className={styles.list}>
                        <li>4 Двойни стай</li>
                        <li>1 Дневна</li>
                        <li>1 Кухненски бокс</li>
                        <li>Климатизацирани</li>
                    </ul>

                    <ul className={styles.list}>
                        <li>2 Бани</li>
                        <li>Допълнителни легла*</li>
                        <li>Веранда</li>
                    </ul>
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
                    <div className={styles['border-top']}>
                        <h2>Facilities & services</h2>
                        <div className={styles['ul-container']}>
                            <div>
                                <ul className={styles.list}>
                                    <li>
                                        <CheckIcon fontSize='large' className={styles['check-icon']} />
                                        <p>Children welcome</p>
                                    </li>
                                    <li>
                                        <CheckIcon fontSize='large' className={styles['check-icon']} />
                                        <p>Swimming poo</p>
                                    </li>
                                    <li>
                                        <CheckIcon fontSize='large' className={styles['check-icon']} />
                                        <p>WiFi</p>
                                    </li>
                                    <li>
                                        <CheckIcon fontSize='large' className={styles['check-icon']} />
                                        <p>Air conditioning</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className={styles.list}>
                                    <li>
                                        <CheckIcon fontSize='large' className={styles['check-icon']} />
                                        <p>Terrace</p>
                                    </li>
                                    <li>
                                        <CheckIcon fontSize='large' className={styles['check-icon']} />
                                        <p>BBQ area</p>
                                    </li>
                                    <li>
                                        <CheckIcon fontSize='large' className={styles['check-icon']} />
                                        <p>Safe box</p>
                                    </li>
                                    <li>
                                        <CheckIcon fontSize='large' className={styles['check-icon']} />
                                        <p>Hair dryer</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <section className={styles.accordion}>
                    <AccordionText text={accordion} />
                </section>
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