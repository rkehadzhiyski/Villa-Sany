import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './smallCarousel.module.css';

type PropType = {
    images: string[],
    options?: EmblaOptionsType
}

const SmallCarousel: React.FC<PropType> = (props) => {
    const { options,images } = props
    const [emblaRef] = useEmblaCarousel(options)

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {images.map((imageUrl, index) => (
                        <img key={index} className={styles.embla__slide} src={imageUrl} alt="" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmallCarousel