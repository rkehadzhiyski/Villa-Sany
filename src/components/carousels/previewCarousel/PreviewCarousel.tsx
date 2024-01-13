import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { Thumb } from './previewCarouselThumb';
import imageByIndex from './imagesByIndex';
import styles from './previewCarousel.module.css';

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const PreviewCarousel: React.FC<PropType> = (props) => {
    const { slides } = props
    const [emblaThumbsRef] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true,
        loop: true,
    })

    return (
        <div className={styles.embla}>
            <div className={styles["embla-thumbs"]}>
                <div className={styles["embla-thumbs__viewport"]} ref={emblaThumbsRef}>
                    <div className={styles["embla-thumbs__container"]}>
                        {slides.map((index) => (
                            <Thumb
                                imgSrc={imageByIndex(index)}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewCarousel;