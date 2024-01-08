import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './smallCarousel.module.css';

type PropType = {

    options?: EmblaOptionsType
}

const SmallCarousel: React.FC<PropType> = (props) => {
    const { options } = props
    const [emblaRef] = useEmblaCarousel(options)

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    <img className={styles.embla__slide} src="https://img.vila.bg/g/2260/182904.jpg" alt="" />
                    <img className={styles.embla__slide} src="https://img.vila.bg/g/2260/182931.jpg" alt="" />
                    <img className={styles.embla__slide} src="https://img.vila.bg/g/2260/182903.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SmallCarousel